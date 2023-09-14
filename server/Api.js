const express = require('express');
const cors = require('cors');
const api = express();
const port = 8080;

api.use(cors());
api.use(express.json());

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);
// root route for API testing
api.get('/', (req, res) => res.status(200).send(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));

// C[R]UD API endpoint for reading ALL inventory items
api.get('/Items', (req, res) => {
  knex('item_table')
  .select('*')
  .then((item_table) => {
    res.send(item_table);
  });
});

// C[R]UD API endpoint for reading a single inventory item, selected by InventoryId
api.get("/Items/:id", (req, res) => {
  const itemId = req.params.id;

  knex('item_table')
    .select("*")
    .where({ id: itemId })
    .first()
    .then((item) => {
      if (item) {
        res.send(item);
      } else {
        res.status(404).json({ message: "Item not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// C[R]UD API endpoint for reading ALL inventory users
api.get('/Users', (req, res) => {
  knex('user_table')
    .select("*")
    .then((user_table) => {
      res.send(user_table);
    });
});

// C[R]UD API endpoint for reading a single inventory user, selected by UserId
api.get('/Users/:id', (req, res) => {
  const userId = req.params.id;

  knex('user_table')
    .select("*")
    .where({ id: userId })
    .first()
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// [C]RUD API endpoint for creating a new inventory item within the item_table in the database.
api.post('/NewItem', (req, res) => {
  knex('item_table')
    .insert(req.body)
    .then((newItem) => {
      res.send(req.body.UserId, req.body.ItemName, req.body.Description, req.body.Quantity)
      console.log(`${newItem} was added to the items table in the inventory database.`);
    })
})

// [C]RUD API endpoint for creating a new inventory user within the user_table in the database.
api.post('/NewUser', (req, res) => {
  knex('user_table')
    .insert(req.body)
    .then((newUser) => {
      res.send(req.body.FirstName, req.body.LastName, req.body.Username, req.body.Password)
      console.log(`${newUser} was added to the user table in the inventory database.`);
    })
})

// CR[U]D API endpoint for updating an existing inventory item
api.patch("/UpdateItem/:id", (req, res) => {
  knex("item_table")
    .where({ id: req.params.id })
    .update({
      UserId: req.body.UserId,
      ItemName: req.body.ItemName,
      Description: req.body.Description,
      Quantity: req.body.Quantity
    })
    .then((updatedRows) => {
      if (updatedRows > 0) {
        res
          .status(200)
          .send(`${req.body.ItemName} record was updated`);
      } else {
        res.status(404).send("Error 404 - Item not found!");
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error updating item");
    });
});

// CRU[D] API endpoint for deleting an existing inventory item
api.delete("/DeleteItem/:id", (req, res) => {
  knex("item_table")
    .where({ id: req.params.id })
    .del()
    .then(res.status(200).send(`${req.params.id} deleted`))
    .catch(res.status(400).send(`Unable to delete item!`));
});

api.listen(port, () => console.log(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));