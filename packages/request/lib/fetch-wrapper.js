import { isPlainObject } from "is-plain-object";
import { RequestError } from "@octokit-next/request-error";

import getBuffer from "./get-buffer-response.js";

export default function fetchWrapper(requestOptions) {
  const log = requestOptions.request?.log || console;

  if (
    isPlainObject(requestOptions.body) ||
    Array.isArray(requestOptions.body)
  ) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }

  let responseHeaders = {};
  let status;
  let url;

  const { redirect, fetch, ...remainingRequestOptions } =
    requestOptions.request || {};

  const fetchOptions = {
    method: requestOptions.method,
    body: requestOptions.body,
    headers: requestOptions.headers,
    redirect,
    ...remainingRequestOptions,
  };

  const requestOrGlobalFetch = fetch || globalThis.fetch;

  return requestOrGlobalFetch(requestOptions.url, fetchOptions)
    .then(async (response) => {
      url = response.url;
      status = response.status;

      for (const keyAndValue of response.headers) {
        responseHeaders[keyAndValue[0]] = keyAndValue[1];
      }

      if ("deprecation" in responseHeaders) {
        const matches =
          responseHeaders.link &&
          responseHeaders.link.match(/<([^>]+)>; rel="deprecation"/);
        const deprecationLink = matches && matches.pop();
        log.warn(
          `[@octokit/request] "${requestOptions.method} ${
            requestOptions.url
          }" is deprecated. It is scheduled to be removed on ${
            responseHeaders.sunset
          }${deprecationLink ? `. See ${deprecationLink}` : ""}`
        );
      }

      if (status === 204 || status === 205) {
        return;
      }

      // GitHub API returns 200 for HEAD requests
      if (requestOptions.method === "HEAD") {
        if (status < 400) {
          return;
        }
        throw new RequestError(response.statusText, status, {
          response: {
            url,
            status,
            headers: responseHeaders,
            data: undefined,
          },
          request: requestOptions,
        });
      }

      if (status === 304) {
        throw new RequestError("Not modified", status, {
          response: {
            url,
            status,
            headers: responseHeaders,
            data: await getResponseData(response),
          },
          request: requestOptions,
        });
      }

      if (status >= 400) {
        const data = await getResponseData(response);
        const error = new RequestError(toErrorMessage(data), status, {
          response: {
            url,
            status,
            headers: responseHeaders,
            data,
          },
          request: requestOptions,
        });
        throw error;
      }

      return getResponseData(response);
    })

    .then((data) => {
      return {
        status,
        url,
        headers: responseHeaders,
        data,
      };
    })

    .catch((error) => {
      if (error instanceof RequestError) throw error;

      if (error.name === "AbortError") throw error;

      throw new RequestError(error.message, 500, {
        request: requestOptions,
      });
    });
}

async function getResponseData(response) {
  const contentType = response.headers.get("content-type");

  if (/application\/json/.test(contentType)) {
    return response.json();
  }

  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }
  /* c8 ignore next 2 */
  // TODO: figure out how to test buffers
  return getBuffer(response);
}

function toErrorMessage(data) {
  if (typeof data === "string") return data;

  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
    }
    return data.message;
  }
  /* c8 ignore next 2 */
  // shouldn't happen, but just in case
  return `Unknown error: ${JSON.stringify(data)}`;
}
