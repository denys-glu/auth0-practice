import mongoose, { Schema } from "mongoose";
import { IUser } from "../interfaces/interfaces";

const UserSchema: Schema = new Schema({
    userId: { type: String, required: true },
    name: {
        type: String,
        required: [true, "Name is required!"],
        minlength: [5, "Name should be longer than 5 characters!"],
        maxlength: [50, "Name should not be longer than 50 characters!"]
    },
    auth: { type: String },
    tickets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "TicketSchema"
    }],
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProjectSchema"
    }]
}, { timestamps: true });

const User = mongoose.model<IUser>("UserSchema", UserSchema);

module.exports = User;