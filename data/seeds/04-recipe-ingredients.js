exports.seed = async function(knex) {
  await knex("recipe_ingredients").insert([
    { ingredient_id: 1, recipe_id: 1, unit_measurement: "oz", quantity: 24  },
    { ingredient_id: 2, recipe_id: 2, unit_measurement: "items", quantity: 3  },
    { ingredient_id: 3, recipe_id: 3, unit_measurement: "items", quantity: 4 },
  ])
};