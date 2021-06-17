"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author_controller = void 0;
const sequelize_1 = require("./../config/sequelize");
exports.author_controller = {
    bestSeller: (req, res) => {
        const limit = parseInt(req.params.limit) || 10;
        sequelize_1.Author.findAll({
            include: {
                model: sequelize_1.Book,
                required: true,
                include: [{
                        model: sequelize_1.Sale_item,
                        required: true
                    }]
            },
        }).then((authors) => {
            authors = JSON.parse(JSON.stringify(authors));
            authors.forEach((author) => {
                author.sales = 0;
                author.books.forEach((book) => {
                    book.sale_items.forEach((book) => {
                        author.sales++;
                    });
                });
            });
            authors.sort((a, b) => b.sales - a.sales);
            authors = authors.slice(0, limit);
            res.status(201).json({
                message: 'Ok',
                content: authors
            });
        }).catch((err) => {
            console.log("Error => " + err);
            res.status(500).json({
                message: 'Error',
                content: 'Internal Server Error, check logs'
            });
        });
    }
};
