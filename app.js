//app.js
import express from 'express';
import bodyParser from 'body-parser';
import User from './src/models/UsersModels.js';
import sequelize from './src/db.js';
import registrationRoutes from './src/routes/registrationRoutes.js';
import hbs from 'hbs';  
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import loginRoutes from './src/routes/loginRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

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

        app.listen(PORT, () => {
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Не удалось подключиться к базе данных:', error);
    }
};

startServer();

