exports.seed = async function(knex) {
  await knex("recipe_ingredients").truncate()
  await knex("recipe_steps").truncate()
  await knex("steps").truncate()
  await knex("ingredients").truncate()
  await knex("recipes").truncate()
};
