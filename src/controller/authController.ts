import authService from "../service/authService";


class authController {

    async Register(req: any,res: any) {
        try {
            const {email, name, last, pw } = req.body
            const res = await authService.register(email,name,last,pw)
            return res.status(200).json({res})

        } catch (error) {
            return res.status(500).json({error: 'Error'})
        }
    }

}

export default new authController();