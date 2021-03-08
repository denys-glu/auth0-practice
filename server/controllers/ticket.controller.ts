import { Response, Request } from "express";
import { ITicket } from "../interfaces/interfaces";
import { CrudController } from "./CrudController";
import Ticket from "../models/ticket.model";
// const Ticket:ITicket = require("../models/ticket.model");

export class TicketController extends CrudController {

    public getAll = (req:Request, res:Response) => {
        Ticket.find({})
            .then(allTicket => res.json({ message: "Success", results: allTicket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    getOne = (req, res) => {
        Ticket.findOne({ _id: req.params.id })
            .then(allTicket => res.json({ message: "Success", results: allTicket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    createNew = (req, res) => {
        Ticket.create(req.body)
            .then(newlyCreatedTicket => res.json({ message: "Success", results: newlyCreatedTicket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    update = (req, res) => {
        Ticket.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(ticket => res.json({ message: "Success", results: ticket }))
            .catch(err => res.json({ message: "Error", error: err }));
    };

    delete = (req, res) => {
        Ticket.deleteOne({ _id: req.params.id })
            .then(result => res.json({ message: "Success", results: result }))
            .catch(err => res.json({ message: "Error", error: err }));
    };
}