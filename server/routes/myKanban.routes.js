const TicketController = require("../controllers/ticket.controller");
const ProjectController = require("../controllers/project.controller");
const JWT = require("../JWT/JWT");


module.exports = app => {
    app.get("/api/tickets/", JWT.checkJwt, JWT.JWTErrorHandler, TicketController.getAllTickets);

    app.get("/api/tickets/:id", TicketController.getTicket);

    app.post("/api/tickets/new", TicketController.createNewTicket);

    app.patch("/api/tickets/update/:id", TicketController.updateExistingTicketStatus);

    app.delete("/api/tickets/delete/:id", TicketController.deleteAnExistingTicket);

    app.get("/api/projects/", JWT.checkJwt, JWT.JWTErrorHandler, ProjectController.getAllProjects)
    app.get("/api/projects/:id", ProjectController.getProject)

    app.post("/api/projects/new", ProjectController.createNewProject)

    app.post("/api/projects/add/ticket/:id", ProjectController.addTicketToProject)
};