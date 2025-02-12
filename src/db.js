<<<<<<< HEAD
//src/db.js
import { Sequelize } from 'sequelize';

const sequelizeDB = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db', 
=======

import { Sequelize } from 'sequelize';

const sequelizeDB = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
});

async function testConnection() {
    try {
        await sequelizeDB.authenticate();
        console.log('Соединение с базой данных успешно установлено.');
    } catch (error) {
        console.error('Не удалось подключиться к базе данных:', error);
    }
}

testConnection();

export default sequelizeDB;
<<<<<<< HEAD

=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
