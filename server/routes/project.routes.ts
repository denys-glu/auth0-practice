import express from "express";
import JWT from "../JWT/JWT";
import { projectController } from "../controllers";

export const projectRoutes = express.Router({
    strict: true
});

projectRoutes.get("/api/projects/",
    JWT.checkJwt,
    JWT.JWTErrorHandler,
    projectController.getAll
    );

projectRoutes.get("/api/projects/:id", projectController.getOne);

projectRoutes.post("/api/projects/new", projectController.createNew);

projectRoutes.post("/api/projects/add/ticket/:id", projectController.addTicket);