'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id:{
        autoIncrement: true, 
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      name:Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      role: Sequelize.STRING
    }, {timestamps: false})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('users');
  }
};
