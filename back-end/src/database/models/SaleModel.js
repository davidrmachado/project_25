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
        salesDate: DataTypes.DATE,
        status: DataTypes.STRING,
    }, {
        underscored:true,
        timestamps: false,
    });

    Sale.associate = (models) => {
        Sale.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        })
    }

    Sale.associate = (models) => {
        Sale.belongsTo(models.User, {
            foreignKey: 'seller_id',
            as: 'seller',
        })
    }
    return Sale;
};