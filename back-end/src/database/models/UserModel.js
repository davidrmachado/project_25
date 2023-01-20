module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
    }, {
        underscored:true,
        timestamps: false,
    });

    User.associate = (models) => {
        User.hasMany(models.Sale, {
            foreignKey: 'user_id',
            as: 'user',
        })
    }

    User.associate = (models) => {
        User.hasMany(models.Sale, {
            foreignKey: 'seller_id',
            as: 'seller',
        })
    }

    return User;
};