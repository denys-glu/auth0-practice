import { Document } from 'mongoose';
export interface IProject extends Document {
    name: string;
    description: string;
    status: string;
    sortId: number;
    tickets: ITicket[];
    users: IUser[];
}

export interface ITicket extends Document {
    name: string;
    description: string;
    status: string;
    dueDate: Date;
    user: string;
}

export interface IUser extends Document {
    userId: string;
    name: string;
    auth: string;
    projects: IProject[];
    tickets: ITicket[];
}
