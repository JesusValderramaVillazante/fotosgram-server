import { Router, Request, Response } from "express";

const userRoutes = Router();

userRoutes.get('/prueba', (req: Request, res: Response) => {
    return res.json({ok: true, mensaje: "todo ok"});
});

export default userRoutes;