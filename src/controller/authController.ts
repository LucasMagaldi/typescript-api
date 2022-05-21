import authService from "../service/authService";
import errorHandler from "../middleWare/errorHandler";

class authController {

    async Register(req: any,res: any, next:any) {
        try {
            const {email, name, last, pw } = req.body
            if(!email || !name || !last || !pw) {
                return res.status(400).json({msg:"Please, provide all values"})
            }

            const emailAlreadyUsed = await authService.findByEmail(email);


            if(!emailAlreadyUsed) return res.status(401).json({msg: `alredy being used`})
            const response = await authService.register(email,name,last,pw);
            console.log(response);
            if(!response._id) { 
                const x = await errorHandler(response)
                return res.status(400).json({msg: x})
            }   
            return res.status(200).json({response})
        } catch (error) {
            return res.status(500).json({error: 'Error'})
        }
    }

}

export default new authController();