
exports.up = async function(knex) {
  await knex.schema.createTable("recipes", (table) => {
    table.increments("id")
    table.string("name").notNullable()
    table.string("author").notNullable()
  })

  await knex.schema.createTable("ingredients", (table) => {
    table.increments("id")
    table.string("ingredient").notNullable()
  })

  await knex.schema.createTable("steps", (table) => {
    table.increments("id")
    table.string("step").notNullable()
  })

  await knex.schema.createTable("recipe_steps", (table) => {
    table.integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    table.integer("step_id")
        .notNullable()
        .references("id")
        .inTable("steps")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
    table.integer("ingredient_id")
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
  })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipe_steps")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
};
