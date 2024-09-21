import fastify from "fastify"
import { random } from "@local/utils"

const port = 6601

const nodeEnv = process.env.NODE_ENV!
const message = process.env.MESSAGE!

const app = fastify()

app.get("/", async () => ({
    nodeEnv,
    message,
    random: random.getInt(1, 100)
}))

await app.ready()

await app.listen({
    host: "0.0.0.0",
    port
})

console.log(`Running on http://localhost:${port}`)
