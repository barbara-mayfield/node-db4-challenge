const express = require("express")
const helmet = require("helmet")
const db = require("./db-config")
const recipeRouter = require("./recipes/recipe-router")

const server = express()
const port = process.env.PORT || 8080

server.use(helmet())
server.use(express.json())

server.use("/api/recipes", recipeRouter)

server.get("/api/steps", async (req, res, next) => {
  try {
    res.json(await db("steps"))
  } catch(err) {
    next(err)
  }
})


server.delete("/api/steps/:id", async (req, res, next) => {
  try {
    const count = await db("steps")
      .where({ id: req.params.id })
      .del()

    if (count > 0) {
      res.status(204).end()
    } else {
      res.status(404).json({
        message: "Step not found",
      })
    }
  } catch(err) {
    next(err)
  }
})

server.use((err, req, res, next) => {
  console.log("Error:", err)

  res.status(500).json({
    message: "Something went wrong",
  })
})

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})