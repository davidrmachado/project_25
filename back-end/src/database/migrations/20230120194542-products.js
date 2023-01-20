'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('products', {
    id:{
      autoIncrement: true, 
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    name: Sequelize.STRING,
    price: Sequelize.DECIMAL(4,2),
    url_image: Sequelize.STRING
   }, {timestamps: false})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('products');
  }
};
