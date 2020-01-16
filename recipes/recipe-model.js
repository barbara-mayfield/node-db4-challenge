const db = require("../data/db-config")

function getRecipes(id) {
    // SELECT r.name, r.author, i.ingredient
    // FROM recipes AS r
    // JOIN ingredients as i
    // WHERE i.id = r.id;

    return db("recipes as r")
        .join("ingredients as i", "i.ingredient", "i.id")
        .where({ id })
        .select("r.name", "r.author", "i.ingredient")
} 

module.exports = {
    getRecipes,
}