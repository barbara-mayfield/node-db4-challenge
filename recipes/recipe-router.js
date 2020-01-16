const express = require("express")
const recipeModel = require("./recipe-model")

const router = express.Router()

router.get("/", async(req, res, next) => {
    try{
        const recipes = await recipeModel.getRecipes()

        res.json(recipes)
    } catch(err) {
        next(err)
    }
})

router.get(":id/ingredients", async(req, res, next) => {
    try {
        const { id } = req.params
        const ingredients = await recipeModel.getShoppingList(id)

        res.json(ingredients)
    } catch {
        next(err)
    }
})

router.get(":id/instructions", async(req, res, next) => {
    try {
        const { id } = req.params
        const instructions = await recipeModel.getInstructions(id)

        resizeBy.json(instructions)
    } catch {
        next(err)
    }
})

module.exports = router;