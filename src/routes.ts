import { Router } from "express";

import authController from "./controller/authController";


class Routes {
    routes

    constructor() {
        this.routes = Router();
        this.AppRoutes();
    }

    AppRoutes():any {
        this.routes.get('/test', (req,res) => {
            return res.status(200).json({Number:1000})
        });

        this.routes.post('/auth/register', authController.Register);
    }
}

export default new Routes().routes;