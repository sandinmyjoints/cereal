import { defineProject } from "vitest/config";

export default defineProject({
  test: {
    globals: true,
    env: {
      NODE_ENV: "test"
    },
    setupFiles: ["vitest-serializers.js"]
  }
});
