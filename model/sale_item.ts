import { Sequelize, DataTypes } from 'sequelize';
export var sale_item_model = (sequelize: Sequelize) => {
    var sale_item_model = sequelize.define('sale_item', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        customer_name : {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        item_price: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'sale_items'
    })
    return sale_item_model;
}