import express from 'express';
import bodyParser from 'body-parser';
import User from './src/models/UsersModels.js';
import sequelize from './src/db.js';
import bcrypt from 'bcrypt';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/registration', async (req, res) => {
    const { login, email, password } = req.body;

    try {

        const existingUser = await User.findOne({
            where: {
                [Op.or]: [{ login }, { email }],
            },
        });

        if (existingUser) {
            return res.status(400).send('Пользователь с таким логином или email уже существует.');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
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

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Подключение к MySQL успешно!');
        
        await User.sync(); 

        app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Не удалось подключиться к базе данных:', error);
    }
};

startServer();
