import { Router } from "express";
import errorHandler from "./middleWare/errorHandler";
import notFound from './middleWare/notFound'

import authController from "./controller/authController";
import userController from "./controller/userController";


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
        //
        this.routes.get('/professionals/all', userController.GetAllProfessionals);
        this.routes.get('/professional/:id', userController.GetAllProfessionals);
        this.routes.use(notFound);
    }
}

export default new Routes().routes;