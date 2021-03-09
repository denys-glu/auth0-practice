const JWT = require("../JWT/JWT");
import { ticketController, projectController } from '../controllers';

module.exports = (app:any) => {
    app.get("/api/tickets/", JWT.checkJwt, JWT.JWTErrorHandler, ticketController.getAll);

    app.get("/api/tickets/:id", ticketController.getOne);

    app.post("/api/tickets/new", ticketController.createNew);

    app.patch("/api/tickets/update/:id", ticketController.update);

    app.delete("/api/tickets/delete/:id", ticketController.delete);

    app.get("/api/projects/", JWT.checkJwt, JWT.JWTErrorHandler, projectController.getAll)
    app.get("/api/projects/:id", projectController.getOne)

    app.post("/api/projects/new", projectController.createNew)

    app.post("/api/projects/add/ticket/:id", projectController.addTicketToProject)
};