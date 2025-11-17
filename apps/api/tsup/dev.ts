import defu from "defu"
import { defineConfig } from "tsup"

import baseConfig from "./base"

export default defu(
    baseConfig,
    defineConfig({
        sourcemap: "inline",
        define: {
            "process.env.NODE_ENV": JSON.stringify("development")
        }
    })
)
