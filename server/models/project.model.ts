import mongoose, { Schema } from "mongoose";
import { IProject } from "../interfaces/interfaces";
const AutoIncrement = require('mongoose-sequence')(mongoose);

const ProjectSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [3, "Name should be longer than 3 characters!"],
        maxlength: [50, "Name should not be longer than 50 characters!"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Description is required!lololol"],
        minlength: [10, "Description should be longer than 10 characters!"],
        maxlength: [1000, "Description should not be longer than 1000 characters!"]
    },
    status: { type: String, default: "0" },
    sortId: { type: Number, default: 0 },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TicketSchema"
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserSchema"
    }]
}, { timestamps: true });

const Project = mongoose.model<IProject>("ProjectSchema", ProjectSchema);

module.exports = Project;