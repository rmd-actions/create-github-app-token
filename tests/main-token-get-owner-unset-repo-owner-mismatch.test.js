import { DEFAULT_ENV } from "./main.js";

// Verify `main` exits with an error when a full repository name does not match the default owner.
for (const [key, value] of Object.entries(DEFAULT_ENV)) {
  process.env[key] = value;
}

delete process.env.INPUT_OWNER;
process.env.INPUT_REPOSITORIES = "octocat/hello-world";

const { default: promise } = await import("../main.js");
await promise;

