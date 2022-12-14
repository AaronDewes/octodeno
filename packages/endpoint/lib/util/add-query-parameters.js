export function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);

  if (names.length === 0) {
    return url;
  }

  const query = names
    .map((name) => {
      if (name === "q") {
        return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
      }

      return `${name}=${encodeURIComponent(parameters[name])}`;
    })
    .join("&");

  return url + separator + query;
}
