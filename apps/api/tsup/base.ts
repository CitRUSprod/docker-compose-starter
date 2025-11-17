import path from "node:path"
import { fileURLToPath } from "node:url"

import { defineConfig } from "tsup"

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    entry: ["src/main.ts"],
    format: "esm",
    platform: "node",
    clean: true,
    inject: [path.join(dirname, "dotenv.ts")]
})
