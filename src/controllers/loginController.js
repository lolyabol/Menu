
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
import UsersModels from '../models/UsersModels.js';

export const showRegistrationForm = (req, res) => {
    res.render('registration'); 
};

export const registerUser = async (req, res) => {
    const { login, email, password } = req.body;

    try {
        const existingUser = await UsersModels.findOne({
            where: {
                [Op.or]: [{ login }, { email }],
            },
        });

        if (existingUser) {
            return res.status(400).send('Пользователь с таким логином или email уже существует.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UsersModels.create({
            login,
            email,
            password: hashedPassword,
        });

        res.render('login', { message: 'Пользователь успешно зарегистрирован! Теперь вы можете войти.' });
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        res.status(500).send('Ошибка при регистрации. Попробуйте еще раз.');
    }
};

