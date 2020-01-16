const db = require("../data/db-config")

function getRecipes() {
    // SELECT * from recipes as r
    // JOIN ingredients AS i ON i.id = r.id
    // JOIN steps AS s ON s.id = r.id;

    return db("recipes as r")
        .select("*")
} 

module.exports = {
    getRecipes,
}