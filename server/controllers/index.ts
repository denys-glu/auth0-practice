import { TicketController } from './ticket.controller';
import { ProjectController } from './project.controller';

const ticketController = new TicketController();
const projectController = new ProjectController();

export {
    ticketController,
    projectController
};