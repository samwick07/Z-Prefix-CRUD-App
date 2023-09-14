/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item_table').del()
  await knex('item_table').insert([
    {UserId: 1, ItemName: 'Hammer', Description: 'Used for nailing', Quantity: 7},
    {UserId: 2, ItemName: 'Screw Driver', Description: 'Used for screwing', Quantity: 2},
    {UserId: 3, ItemName: 'Shovel', Description: 'Used for digging', Quantity: 12},
    {UserId: 1, ItemName: 'Socket Wrench', Description: 'Used for torquing', Quantity: 3},
    {UserId: 2, ItemName: 'Square', Description: 'Used for 90 degrees', Quantity: 1},
    {UserId: 3, ItemName: 'Tape Measure', Description: 'Used for measuring', Quantity: 2},
    {UserId: 1, ItemName: 'Pipe Wrench', Description: 'Used for pipes', Quantity: 1},
    {UserId: 2, ItemName: 'Bubble Level', Description: 'Used for leveling', Quantity: 2},
    {UserId: 3, ItemName: 'Vice Grips', Description: 'Used for gripping', Quantity: 6},
    {UserId: 1, ItemName: 'Needle-nose Pliers', Description: 'Used for holding', Quantity: 3},
    {UserId: 2, ItemName: 'Allen Wrench', Description: 'Used for hex bolts', Quantity: 4},
    {UserId: 3, ItemName: 'Shears', Description: 'Used for shearing', Quantity: 1}
  ]);
};
