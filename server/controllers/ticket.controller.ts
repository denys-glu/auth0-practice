import { Response, Request } from "express";
import { CrudController } from "./CrudController";
import Ticket from "../models/ticket.model";
import Project from "../models/project.model";

export class TicketController extends CrudController {

    public getAll = (req:Request, res:Response) => {
        Ticket.find({})
            .then(allTicket => res.json({ message: "Success", results: allTicket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public getOne = (req:Request, res:Response) => {
        Ticket.findOne({ _id: req.params.id })
            .then(allTicket => res.json({ message: "Success", results: allTicket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public update = (req:Request, res:Response) => {
        Ticket.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(ticket => res.json({ message: "Success", results: ticket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };
    // Leaving this one for future cases;
    public createNew = (req:Request, res:Response) => {
        Ticket.create(req.body)
            .then(newTicket => {
                Project.findByIdAndUpdate(
                    req.params.id,
                    { $push: { tickets: newTicket._id } },
                    { new: true })
                    .then(project => res.json({
                        message: "Success",
                        results: `Ticket ${newTicket.name} successfuly added to ${project?.name}`
                    }))
                    .catch(err => {
                        Ticket.deleteOne({ _id: newTicket._id })
                            .then(result => res.json({ message: "Success", results: result }))
                            .catch(err => res.json({ message: "Error", error: err }));
                        res.json({ message: "Error", error: { err, message: "Looks like there is no such project in DB" } })
                    })
            })
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public delete = (req:Request, res:Response) => {
        Ticket.deleteOne({ _id: req.params.id })
            .then(result => res.json({ message: "Success", results: result }))
            .catch(err => res.json({ message: "Error", error: err }));
    };
}