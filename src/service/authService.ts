import User from "../model/User";
import AdminUser from "../model/AdminUser";
import bcrypt from 'bcrypt';
import Error from "../model/Error";

class authService {
   async register(
       email: string,
       name: string,
       last:string,
       pw: string,
       type_user: string,
       admin: boolean
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
                    type_user,
                    createdAt:date
                 });
            const id = JSON.stringify(user._id);
            if(admin) await this.registerAsAdmin(email, name, id);
            
            return user;
       } catch (error) {
            const date = new Date();
            await Error.create({
                 error,
                 method: "Register Services",
                 createdAt: date
            })
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


   async registerAsAdmin(email: string, name: string, id: string) {
     try {
          const date = new Date();
          const user = await AdminUser
               .create({
                    email, 
                    name, 
                    id_user: id, 
                    createdAt:date
               });
          return user;
     } catch (err) {
          console.log(err)
          return err
     }
   }
}


export default new authService();