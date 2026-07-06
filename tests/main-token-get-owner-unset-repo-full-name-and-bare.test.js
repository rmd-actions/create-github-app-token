import { test } from "./main.js";

// Verify `main` successfully obtains a token when `owner` is omitted and `repositories` mixes a full repository name with bare repository names.
await test(() => {
  delete process.env.INPUT_OWNER;
  process.env.INPUT_REPOSITORIES = `${process.env.GITHUB_REPOSITORY},toolkit`;
});

