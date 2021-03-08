const JWT = require("../JWT/JWT");
import { ticketController } from '../controllers';
import ProjectController from '../controllers/project.controller';

module.exports = (app:any) => {
    app.get("/api/tickets/", JWT.checkJwt, JWT.JWTErrorHandler, ticketController.getAll);

    app.get("/api/tickets/:id", ticketController.getOne);

    app.post("/api/tickets/new", ticketController.createNew);

    app.patch("/api/tickets/update/:id", ticketController.update);

    app.delete("/api/tickets/delete/:id", ticketController.delete);

    app.get("/api/projects/", JWT.checkJwt, JWT.JWTErrorHandler, ProjectController.getAllProjects)
    app.get("/api/projects/:id", ProjectController.getProject)

    app.post("/api/projects/new", ProjectController.createNewProject)

    app.post("/api/projects/add/ticket/:id", ProjectController.addTicketToProject)
};