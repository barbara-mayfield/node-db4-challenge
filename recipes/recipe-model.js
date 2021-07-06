const db = require("../data/db-config")

function getRecipes() {
    return db("recipes as r")
        .leftJoin("ingredients as i")
        .leftJoin("steps as s")
        .select("*")
        .first()
} 

function getShoppingList(recipe_id) {
    // SELECT * from recipes_ingredients as ri
    // JOIN ingredients AS i ON i.id = ri.ingredient_id;
    return db("recipes_ingredients as ri")
      .join("ingredients as i", "i.id", "ri.recipe_id")
      .select("*")
      .where({ recipe_id });
};

function getInstructions(recipe_id) {
    // SELECT r.id, st.id, st.step FROM recipes as r
    // JOIN steps AS st ON st.id = r.id;
    return db("recipes as r")
        .join("steps as st", "st.id", "r.id")
        .select("r.id", "r.name", "st.step")
        .where({ recipe_id })
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}