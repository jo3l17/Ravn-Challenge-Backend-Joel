const Sequelize = require('sequelize');
import { author_model } from "../model/author";
import { book_model } from "../model/book";
import { sale_item_model } from "../model/sale_item";
export const sequelize = new Sequelize('ravn_challenge', 'root', '953945798Yo@', {
    host: process.env.HOST,
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
export const Author = author_model(sequelize);
export const Book = book_model(sequelize);
export const Sale_item = sale_item_model(sequelize);

Book.belongsTo(Author, { foreignKey: 'author_id' });
Author.hasMany(Book, { foreignKey: 'author_id', onDelete: 'CASCADE' });

Sale_item.belongsTo(Book, { foreignKey: 'book_id' });
Book.hasMany(Sale_item, { foreignKey: 'book_id', onDelete: 'CASCADE' });
