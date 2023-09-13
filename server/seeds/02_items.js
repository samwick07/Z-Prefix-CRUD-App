/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('item_table').del()
  await knex('item_table').insert([
    {UserId: 1, Item_Name: 'Hammer', Description: 'Used for nailing', Quantity: 7},
    {UserId: 2, Item_Name: 'Screw Driver', Description: 'Used for screwing', Quantity: 2},
    {UserId: 3, Item_Name: 'Shovel', Description: 'Used for digging', Quantity: 12},
    {UserId: 1, Item_Name: 'Socket Wrench', Description: 'Used for torquing', Quantity: 3},
    {UserId: 2, Item_Name: 'Square', Description: 'Used for 90 degrees', Quantity: 1},
    {UserId: 3, Item_Name: 'Tape Measure', Description: 'Used for measuring', Quantity: 2},
    {UserId: 1, Item_Name: 'Pipe Wrench', Description: 'Used for pipes', Quantity: 1},
    {UserId: 2, Item_Name: 'Bubble Level', Description: 'Used for leveling', Quantity: 2},
    {UserId: 3, Item_Name: 'Vice Grips', Description: 'Used for gripping', Quantity: 6},
    {UserId: 1, Item_Name: 'Needle-nose Pliers', Description: 'Used for holding', Quantity: 3},
    {UserId: 2, Item_Name: 'Allen Wrench', Description: 'Used for hex bolts', Quantity: 4},
    {UserId: 3, Item_Name: 'Shears', Description: 'Used for shearing', Quantity: 1}
  ]);
};
