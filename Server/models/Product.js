module.exports = function (sequelize, DataTypes) {
    var Product = sequelize.define("Product", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false

        },
        Price: {
            type: DataTypes.FLOAT(12, 2),
            allowNull: false
        },
        Sold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        Picture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        InCart: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    },
    );

    return Product;
};
