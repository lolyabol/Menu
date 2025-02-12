<<<<<<< HEAD
//src/services/UserService.js
=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
import UsersModels from "../models/UsersModels.js";

class UserServices {
    constructor() {
        this.users = UsersModels;
    }

    async getAllUsers() {
        try {
            return await this.users.findAll();
        } catch (e) {
            console.error('Ошибка при получении пользователей:', e);
            throw new Error('Не удалось получить пользователей');
        }
    }

    async addUser(userData) {
        try {

            return await this.users.create(userData);
        } catch (e) {
            console.error('Ошибка при создании пользователя:', e);
            throw new Error('Не удалось создать пользователя'); 
        }
    }
}

const UserService = new UserServices();
export default UserService;
