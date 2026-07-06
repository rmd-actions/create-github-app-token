import { DEFAULT_ENV } from "./main.js";

// Verify `main` exits with an error when a full repository name does not match the `owner` input.
for (const [key, value] of Object.entries(DEFAULT_ENV)) {
  process.env[key] = value;
}

process.env.INPUT_OWNER = process.env.GITHUB_REPOSITORY_OWNER;
process.env.INPUT_REPOSITORIES = "octocat/hello-world";

const { default: promise } = await import("../main.js");
await promise;

