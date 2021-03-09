import { Response, Request } from "express";
import { CrudController } from "./CrudController";
import Ticket from "../models/ticket.model";
import Project from "../models/project.model";
import User from "../models/user.model";

export class UserController extends CrudController {
    public getAll = (req:Request, res:Response) => {
        User.find({})
            .then(allUsers => res.json({ message: "Success", results: allUsers }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public getOne = (req:Request, res:Response) => {
        User.findById({ _id: req.params.id }).populate("tickets").populate("projects")
            .then(user => res.json({ message: "Success", results: user }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public createNew = (req:Request, res:Response) => {
        User.create(req.body)
            .then(newlyCreatedUser => res.json({ message: "Success", results: newlyCreatedUser }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    public update = (req:Request, res:Response) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(user => res.json({ message: "Success", results: user }))
            .catch(err => res.json({ message: "Error", error: err }));
    };
    
    public delete = (req:Request, res:Response) => {
        User.deleteOne({ _id: req.params.id })
            .then(result => res.json({ message: "Success", results: result }))
            .catch(err => res.json({ message: "Error", error: err }));
    };
}