"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sale_item = exports.Book = exports.Author = exports.sequelize = void 0;
const Sequelize = require('sequelize');
const author_1 = require("../model/author");
const book_1 = require("../model/book");
const sale_item_1 = require("../model/sale_item");
exports.sequelize = new Sequelize('ravn_challenge', 'root', '953945798Yo@', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
exports.Author = author_1.author_model(exports.sequelize);
exports.Book = book_1.book_model(exports.sequelize);
exports.Sale_item = sale_item_1.sale_item_model(exports.sequelize);
exports.Book.belongsTo(exports.Author, { foreignKey: 'author_id' });
exports.Author.hasMany(exports.Book, { foreignKey: 'author_id', onDelete: 'CASCADE' });
exports.Sale_item.belongsTo(exports.Book, { foreignKey: 'book_id' });
exports.Book.hasMany(exports.Sale_item, { foreignKey: 'book_id', onDelete: 'CASCADE' });
