import { Request, Response } from 'express';

export abstract class CrudController {
    public abstract getAll(req: Request, res: Response): void;
    public abstract getOne(req: Request, res: Response): void;
    public abstract update(req: Request, res: Response): void;
    public abstract delete(req: Request, res: Response): void;
    public abstract createNew(req: Request, res: Response): void;
}