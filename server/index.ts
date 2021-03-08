require('dotenv').config({ path: __dirname + '/.env' })
import { PORT } from './config/constants';
const express = require("express");
const app = express();
const cors = require('cors');

// This will fire our mongoose.connect statement to initialize our database connection
require("./config/mongoose.config");

app.use(cors(), express.urlencoded({ extended: true }), express.json());

// This is where we import the users routes function from our user.routes.js file
require("./routes/myKanban.routes")(app);

const server = app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));