'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('sales', {
    id:{
      autoIncrement: true, 
      primaryKey: true,
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    user_id: {type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    seller_id: {type: Sequelize.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    total_price: Sequelize.DECIMAL(9,2),
    delivery_address: Sequelize.STRING,
    delivery_number: Sequelize.STRING,
    sales_date: Sequelize.DATE,
    status: Sequelize.STRING,
  }, {timestamps: false})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
