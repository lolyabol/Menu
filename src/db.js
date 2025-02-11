
import { Sequelize } from 'sequelize';

const sequelizeDB = new Sequelize('database_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
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
