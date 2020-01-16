exports.seed = async function(knex) {
  await knex("ingredients").insert([
    { id: 1, ingredient: "Chicken" },
    { id: 2, ingredient: "Potatoes" },
    { id: 3, ingredient: "Tomatoes" },
  ])
};