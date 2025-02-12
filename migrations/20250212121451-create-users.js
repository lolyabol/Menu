
'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  /*
   * Вставьте команды для изменения здесь.
   */
  
  await queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true // если вы хотите, чтобы логины были уникальными
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true // если вы хотите, чтобы email были уникальными
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
}

export async function down(queryInterface, Sequelize) {
  /*
   * Вставьте команды для отмены изменений здесь.
   */
  await queryInterface.dropTable('Users');
}

