module.exports = (sequelize, DataTypes) => {
    const Sale = sequelize.define('Sale', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        userId: DataTypes.INTEGER,
        sellerId: DataTypes.INTEGER,
        totalPrice: DataTypes.DECIMAL(9,2),
        deliveryAddress: DataTypes.STRING,
        deliveryNumber: DataTypes.STRING,
        saleDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        underscored:true,
        timestamps: false,
    });

    Sale.associate = (models) => {
        Sale.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id',
        })

        Sale.belongsTo(models.User, {
            as: 'seller',
            foreignKey: 'seller_id',
        })
    }
    return Sale;
};