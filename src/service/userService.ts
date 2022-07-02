import User from "../model/User";


class UserService {

    async getAll() {
        try {
            const users = await User.find().where('type_user').equals('Professional');
             console.log(users);
             return users
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async getUserById(id:string) {
        try {
            const user = await User.findOne().where('')
        } catch (error) {
            console.log(error);
            return error;
        }
    }

}



export default new UserService();
