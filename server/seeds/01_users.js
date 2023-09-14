/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {FirstName: 'Adam', LastName: 'Douglas', Username: 'adoug', Password: 'adoug'},
    {FirstName: 'Brandon', LastName: 'Evanston', Username: 'bevan', Password: 'bevan'},
    {FirstName: 'Charlie', LastName: 'Fitzgerald', Username: 'cfitz', Password: 'cfitz'},
    {FirstName: 'Admin', LastName: 'Istrator', Username: 'admin', Password: 'admin'}
  ]);
};
