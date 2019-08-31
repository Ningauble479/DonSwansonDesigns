module.exports = function (sequelize, DataTypes) {
    var Carts = sequelize.define("Carts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        product1Id: {
            type: DataTypes.INTEGER,
        },
        product2Id: {
            type: DataTypes.INTEGER,
        },
        product3Id: {
            type: DataTypes.INTEGER,
        },
        product4Id: {
            type: DataTypes.INTEGER,
        },
        product5Id: {
            type: DataTypes.INTEGER,
        },
    });

    return Carts;
};
