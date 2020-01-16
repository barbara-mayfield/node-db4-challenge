
exports.seed = async function(knex) {
  await knex("recipe_steps").insert([
    { recipe_id: 1, step_id: 1, ingredient_id: 1 },
    { recipe_id: 2, step_id: 2, ingredient_id: 2 },
    { recipe_id: 3, step_id: 3, ingredient_id: 3 },
  ])
};
