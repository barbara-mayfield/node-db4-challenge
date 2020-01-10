exports.seed = async function(knex) {
  await knex("steps").insert([
    { id: 1, step: "Thaw chicken" },
    { id: 2, step: "Boil potatoes" },
    { id: 3, step: "Buy tomatoes" },
  ])
};