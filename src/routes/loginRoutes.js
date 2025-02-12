
import express from 'express';
import bcrypt from 'bcrypt';
import { body, validationResult } from 'express-validator';
import User from '../models/UsersModels.js'; 

const router = express.Router();

const loginValidationRules = [
    body('username').notEmpty().withMessage('Имя пользователя не должно быть пустым'),
    body('password').notEmpty().withMessage('Пароль не должен быть пустым'),
];

router.get('/login', (req, res) => {
    res.render('login', { title: 'Вход' }); 
});

router.post('/login', loginValidationRules, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).send('Неверное имя пользователя или пароль');
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).send('Неверное имя пользователя или пароль');
        }

        res.send('Успешный вход в систему');

    } catch (error) {
        res.status(500).send('Ошибка авторизации');
    }
});

export default router;

