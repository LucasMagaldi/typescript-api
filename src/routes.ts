import { Router } from "express";


class Routes {
    routes

    constructor() {
        this.routes = Router();
        this.AppRoutes();
    }

    AppRoutes():any {
        this.routes.get('/test', (req,res) => {
            return res.status(200).json({Number:1000})
        })
    }
}

export default new Routes().routes;