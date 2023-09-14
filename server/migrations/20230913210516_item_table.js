/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('item_table', table => {
    table.increments('id').primary();
    table.integer('UserId').unsigned();
    table.foreign('UserId').references('user_table.id');
    table.string('ItemName', 250).notNullable();
    table.string('Description', 250).notNullable();
    table.integer('Quantity', 6).notNullable();
  })
};
  
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable('item_table', table => {
    table.dropForeign('UserId');
  })
  .then(function() {
    return knex.schema.dropTableIfExists('item_table');
  });
};