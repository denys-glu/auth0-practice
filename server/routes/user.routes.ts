import express from "express";
import JWT from "../JWT/JWT";
import { userController } from "../controllers";

export const userRoutes = express.Router({
    strict: true
});

userRoutes.get("/api/user/",
    JWT.checkJwt,
    JWT.JWTErrorHandler,
    userController.getAll
    );

userRoutes.get("/api/users/:id", userController.getOne);

userRoutes.post("/api/users/new", userController.createNew);
