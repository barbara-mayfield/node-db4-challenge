const db = require("../data/db-config")

function getRecipes() {
    return db("recipes as r")
        .select("*")
} 

function getShoppingList(id) {
    // SELECT * from recipes_ingredients as ri
    // JOIN ingredients AS i ON i.id = ri.ingredient_id;
    return db("recipes_ingredients as ri")
      .join("ingredients as i", "i.id", "i.quantity", "i.unit_measurement")
      .select("i.ingredient", "i.quantity","i.unit_measurement")
      .where("ri.ingredient_id", id);
};

function getInstructions(id) {
    return db("instructions")
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}