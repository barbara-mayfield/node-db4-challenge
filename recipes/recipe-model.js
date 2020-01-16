const db = require("../data/db-config")

function getRecipes() {
    return db("recipes as r")
        .join("ingredients as i")
        .join("steps as s")
        .select("*")
} 

function getShoppingList(id) {
    // SELECT * from recipes_ingredients as ri
    // JOIN ingredients AS i ON i.id = ri.ingredient_id;
    return db("recipes_ingredients as ri")
      .join("ingredients as i", "i.id", "i.quantity", "i.unit_measurement", "ri.recipe_id")
      .select("*")
      .where({ id });
};

function getInstructions(id) {
    // SELECT r.id, st.id, st.step FROM recipes as r
    // JOIN steps AS st ON st.id = r.id;
    return db("recipes as r")
        .join("steps as st")
        .where({ id })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}