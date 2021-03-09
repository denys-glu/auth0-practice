import { TicketController } from './ticket.controller';
import { ProjectController } from './project.controller';
import { UserController } from './user.controller';

const ticketController = new TicketController();
const projectController = new ProjectController();
const userController = new UserController();

export {
    ticketController,
    projectController,
    userController
};