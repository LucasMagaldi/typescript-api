import authService from "../service/authService";
import errorHandler from "../middleWare/errorHandler";

class authController {


    async Test(x:string, y:string, z:string ) {
        const response = {
                statusCode: 500,
                body: 'Error, please wait a few minutes'
             }

        if(!x || !y || !z) {
            response.statusCode = 400;
            response.body =  'Provide all values'
            return  response
            //return res.status(400).json({msg:"Please, provide all values"})
        }
        response.statusCode = 200;
        response.body = 'success'

        return response
    }

    async Register(req: any,res: any, next:any) {
        try {
            const {email, name, last, pw, admin } = req.body
            if(!email || !name || !last || !pw || !admin) {
                return res.status(400).json({msg:"Please, provide all values"})
            }

            const emailAlreadyUsed = await authService.findByEmail(email);
            console.log(emailAlreadyUsed)


            if(!emailAlreadyUsed) return res.status(401).json({msg: `alredy being used`})
            const response = await authService.register(email,name,last,pw, admin);
            console.log(response);
            if(!response._id) { 
                const errorHandling = await errorHandler(response)
                return res.status(errorHandling.statusCode).json({msg: errorHandling.msg})
            }   
            return res.status(200).json({response})
        } catch (error) {
            return res.status(500).json({error: error})
        }
    }

}

export default new authController();