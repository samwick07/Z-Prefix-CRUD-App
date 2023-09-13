/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user_table').del()
  await knex('user_table').insert([
    {First_Name: 'Adam', Last_Name: 'Douglas', Username: 'adoug', Password: 'adoug'},
    {First_Name: 'Brandon', Last_Name: 'Evanston', Username: 'bevan', Password: 'bevan'},
    {First_Name: 'Charlie', Last_Name: 'Fitzgerald', Username: 'cfitz', Password: 'cfitz'},
    {First_Name: 'Admin', Last_Name: 'Istrator', Username: 'admin', Password: 'admin'}
  ]);
};
