const db = require("../db-config")

function getRecipes(id) {
    // SELECT r.name, r.author, i.ingredient
    // FROM recipes AS r
    // JOIN ingredients as i
    // WHERE i.id = r.id;

    return db("recipes as r")
        .select("r.name", "r.author")
} 

module.exports = {
    getRecipes,
}