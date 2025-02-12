import sequelizeDB from "../db.js";
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
}, {
    tableName: 'users', 
    timestamps: true,
});

export default UsersModels;

