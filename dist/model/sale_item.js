"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sale_item_model = void 0;
const sequelize_1 = require("sequelize");
exports.sale_item_model = (sequelize) => {
    var sale_item_model = sequelize.define('sale_item', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        customer_name: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        item_price: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'sale_items'
    });
    return sale_item_model;
};
