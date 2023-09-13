/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('user_table', table => {
    table.increments('id').primary();
    table.string('First_Name', 250).notNullable();
    table.string('Last_Name', 250).notNullable();
    table.string('Username', 250).notNullable();
    table.string('Password', 250).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user_table');
};
