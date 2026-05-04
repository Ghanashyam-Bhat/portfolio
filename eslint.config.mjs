import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["out/**", "node_modules/**"]),
]);
