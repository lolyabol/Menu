//src/routes/registrationRoutes.js
import express from 'express';
import { Op } from 'sequelize';
import bcrypt from 'bcrypt';
import UsersModels from '../models/UsersModels.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('registration'); 
});

router.post('/registration', async (req, res) => {
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

        const user = await UsersModels.create({
            login,
            email,
            password: hashedPassword,
        });

        res.status(201).send('Пользователь успешно зарегистрирован!');
    } catch (error) {
        console.error('Ошибка при регистрации:', error);
        res.status(500).send('Ошибка при регистрации. Попробуйте еще раз.');
    }
});

export default router;

