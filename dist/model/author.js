"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author_model = void 0;
const sequelize_1 = require("sequelize");
exports.author_model = (sequelize) => {
    var author_model = sequelize.define('author', {
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        date_of_birth: {
            type: 'TIMESTAMP'
        }
    }, {
        timestamps: false,
        tableName: 'authors'
    });
    return author_model;
};
