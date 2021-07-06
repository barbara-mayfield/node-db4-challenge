exports.seed = async function(knex) {
  await knex("recipes").insert([
    { id: 1, name: "Chicken Parmigiana", author: "Barbara M." },
    { id: 2, name: "Potato Salad", author: "Barbara M." },
    { id: 3, name: "Tomato Soup", author: "Campbells"},
  ])
};
