import fastify from "fastify"

const port = 6601

const app = fastify()

app.get("/", (request, reply) => {
    reply
        .type("text/html; charset=utf-8")
        .send(
            `<h1>Docker Compose Template</h1><h2>docker-compose-template</h2>`
        )
})

app.listen(port, "0.0.0.0", err => {
    if (err) throw err
    console.log(`Running on http://localhost:${port}`)
})
