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
        total_price: DataTypes.DECIMAL(9,2),
        delivery_address: DataTypes.STRING,
        delivery_number: DataTypes.STRING,
        sales_date: DataTypes.DATE,
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