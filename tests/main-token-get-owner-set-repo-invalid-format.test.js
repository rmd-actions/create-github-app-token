import { DEFAULT_ENV } from "./main.js";

// Verify `main` exits with an error when a repository entry is neither a repository name nor an owner/repository name.
for (const [key, value] of Object.entries(DEFAULT_ENV)) {
  process.env[key] = value;
}

process.env.INPUT_OWNER = process.env.GITHUB_REPOSITORY_OWNER;
process.env.INPUT_REPOSITORIES = "octocat/hello-world/extra";

const { default: promise } = await import("../main.js");
await promise;

