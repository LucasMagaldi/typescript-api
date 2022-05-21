import User from "../model/User";
import bcrypt from 'bcrypt';

class authService {
   async register(
       email: string,
       name: string,
       last:string,
       pw: string
       ) {
       try {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(pw, salt);
            const date = new Date();

            const user = await User
                .create({
                    email, 
                    name,
                    last_name: last,
                    password: hash, 
                    createdAt:date
                 });
            console.log(11)
            return user;
       } catch (error) {
            console.log(error);
            console.log("Final Errooo")
            return error
       }
   }

   async findByEmail(email:string) {
        try {
             const emailAlreadyUsed = await User.findOne({email});
             if(emailAlreadyUsed === null) return true
             return emailAlreadyUsed
        } catch (error) {
             return error
        }
   }
}


export default new authService();