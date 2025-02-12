<<<<<<< HEAD
//app.js
=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
import express from 'express';
import bodyParser from 'body-parser';
import User from './src/models/UsersModels.js';
import sequelize from './src/db.js';
<<<<<<< HEAD
import registrationRoutes from './src/routes/registrationRoutes.js';
import hbs from 'hbs';  
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import loginRoutes from './src/routes/loginRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
=======
import bcrypt from 'bcrypt';
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f

const app = express();
const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
app.set('views', './src/views');
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/routes'); 

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', registrationRoutes);
app.use('/', loginRoutes);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.post('/registration', (req, res) => {

});

app.post('/login', (req, res) => {

});


const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Подключение к SQLite успешно!');

        await User.sync();
=======
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
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f

        app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Не удалось подключиться к базе данных:', error);
    }
};

startServer();
<<<<<<< HEAD

=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
