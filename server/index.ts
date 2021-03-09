require("dotenv").config({ path: __dirname + "/.env" })
import express from "express";
import cors from "cors";
import { PORT } from "./config/constants";

import connectToDB from "./config/mongoose.config";
import { ticketRoutes, projectRoutes, userRoutes } from "./routes";

const app = express();

connectToDB();

app.use(cors(), express.urlencoded({ extended: true }), express.json());

app.use(ticketRoutes, projectRoutes, userRoutes)

const server = app.listen(PORT, () => console.log(`The server is all fired up on port ${PORT}`));

export default server;