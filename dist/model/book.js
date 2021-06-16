"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book_model = void 0;
const sequelize_1 = require("sequelize");
exports.book_model = (sequelize) => {
    var book_model = sequelize.define('book', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        isbn: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        timestamps: false,
        tableName: 'books'
    });
    return book_model;
};
