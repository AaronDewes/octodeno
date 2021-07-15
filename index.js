import { Base } from "javascript-plugin-architecture-with-typescript-definitions";
import { requestPlugin } from "./plugins/request/index.js";

export const Octokit = Base.plugin(requestPlugin).defaults({
  baseUrl: "https://api.github.com",
});
