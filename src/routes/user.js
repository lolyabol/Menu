<<<<<<< HEAD
//src/routes/user.js
=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const User = sequelize.define('User', {
    login: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default User;
