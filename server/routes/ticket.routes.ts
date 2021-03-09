import express from "express";
import JWT from "../JWT/JWT";
import { ticketController } from "../controllers";

export const ticketRoutes = express.Router({
    strict: true
});

ticketRoutes.get("/api/tickets/",
    JWT.checkJwt,
    JWT.JWTErrorHandler,
    ticketController.getAll
    );

ticketRoutes.get("/api/tickets/:id", ticketController.getOne);

ticketRoutes.post("/api/tickets/new", ticketController.createNew);

ticketRoutes.patch("/api/tickets/update/:id", ticketController.update);

ticketRoutes.delete("/api/tickets/delete/:id", ticketController.delete);