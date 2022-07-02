import { Request, Response, NextFunction } from 'express';
import UserService from '../service/userService'


class UserController {

    async GetAllProfessionals(req: Request, res:Response) {
        try {
             const allProfessionals = await UserService.getAll();
             return res.status(200).json({professionals: allProfessionals});
        } catch (error) {
            console.log(error);
            return error
        }
    }

}


export default new UserController();