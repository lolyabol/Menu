import sequelizeDB from "../db.js";
<<<<<<< HEAD
import { Sequelize, DataTypes } from "sequelize"; 

const UsersModels = sequelizeDB.define("Users", {
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
=======
import { Sequelize } from "sequelize";

const UsersModels = sequelizeDB.define("Users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    }
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
}, {
    tableName: 'users', 
    timestamps: true,
});

export default UsersModels;
<<<<<<< HEAD

=======
>>>>>>> 54fe37f57f112ca125845b2dee8ae9855630670f
