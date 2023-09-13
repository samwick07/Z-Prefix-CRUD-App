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

// C[R]UD API endpoint for ALL inventory items
api.get('/Items', (req, res) => {
  knex('item_table')
  .select('*')
  .then((item_table) => {
    res.send(item_table);
  });
});

// C[R]UD API endpoint for single inventory item, selected by InventoryId
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

// C[R]UD API endpoint for ALL inventory users
api.get('/Users', (req, res) => {
  knex('user_table')
    .select("*")
    .then((user_table) => {
      res.send(user_table);
    });
});

// C[R]UD API endpoint for a single inventory user, selected by UserId
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

api.listen(port, () => console.log(`Z-Prefix CRUD API is listening at http://localhost:${port}!`));