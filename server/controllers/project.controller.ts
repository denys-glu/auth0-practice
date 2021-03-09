import { Response, Request } from "express";
import { CrudController } from "./CrudController";
import Ticket from "../models/ticket.model";
import Project from "../models/project.model";

export class ProjectController extends CrudController {
    public getAll = (req, res) => {
        Project.find({})
            .then(allProjects => res.json({ message: "Success", results: allProjects }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public getOne = (req, res) => {
        Project.findById({ _id: req.params.id }).populate("tickets")
            .then(project => res.json({ message: "Success", results: project }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public createNew = (req, res) => {
        Project.create(req.body)
            .then(newlyCreatedProject => res.json({ message: "Success", results: newlyCreatedProject }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public update = (req, res) => {
        Project.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(ticket => res.json({ message: "Success", results: ticket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public addTicketToProject = (req, res) => {
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

    public delete = (req, res) => {
        Ticket.deleteOne({ _id: req.params.id })
            .then(result => res.json({ message: "Success", results: result }))
            .catch(err => res.json({ message: "Error", error: err }));
    };
}