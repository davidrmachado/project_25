module.exports = (sequelize, DataTypes) => {
    const saleProduct = sequelize.define('SaleProduct', 
    {
        quantity: DataTypes.INTEGER
    }, {
        tableName: 'salesProducts',
        underscored: true,
        timestamps: false,
    });

    saleProduct.associate = (models) => {
        models.Sale.belongsToMany(models.Product, {
          as: 'products',
          foreignKey: 'product_id',
          otherKey: 'sale_id',
          through: saleProduct,
        });
    
        models.Product.belongsToMany(models.Sale, {
          as: 'sales',
          foreignKey: 'sale_id',
          otherKey: 'product_id',
          through: saleProduct,
        });
      }
    return saleProduct;
};