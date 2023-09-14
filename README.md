# Z-Prefix-CRUD-App
This single-page CRUD application is useful for inventory management. Users can create, add, update, and delete inventory items and user profiles. This app is built with a PostgreSQL, Express, React.js, Node.js (PERN) stack. All styling utilizes Material UI components and documentation.

## Set-up and Configuration
### Database
For complete functionality, this app requires a `postgresql` database named `inventory`. Configure this database to match the connection string located within the `knexfile.js` file inside the `server` directory. To perform knex migrations and seeding --including rollback-- please utilize the `npm start` script, which is contained within the `package.json` file.
### Backend
From wihtin the `server` directory, run the `npm start` script to host the API server on `localhost:8080`.
### Frontend
From within the `client` directory run the `npm start` script to start the Inventory client on `localhost:3000`.