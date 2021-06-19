"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author_controller = void 0;
const sequelize_1 = require("./../config/sequelize");
exports.author_controller = {
    bestSeller: (req, res) => {
        let limit;
        console.log(req.params.limit);
        if (Number.isInteger(req.params.limit)) {
            limit = parseInt(req.params.limit) || 10;
        }
        else if (req.params.limit) {
            console.log("The parameters given are invalid, please check");
            return res.status(500).json({
                message: 'Error',
                content: 'Invalid parameters'
            });
        }
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
                    book.sale_items.forEach(() => {
                        author.sales++;
                    });
                });
            });
            authors.sort((a, b) => b.sales - a.sales);
            authors = authors.slice(0, limit);
            return res.status(201).json({
                message: 'Ok',
                content: authors
            });
        }).catch((err) => {
            console.log("Error => " + err);
            return res.status(500).json({
                message: 'Error',
                content: 'Internal Server Error, check logs'
            });
        });
    },
    seed: (cb) => {
        const authors = [{
                id: 1,
                name: "Juan",
                date_of_birth: "1976-05-12"
            },
            {
                id: 2,
                name: "John",
                date_of_birth: "1980-01-01"
            },
            {
                id: 3,
                name: "Pepe",
                date_of_birth: "1970-05-04"
            },
            {
                id: 4,
                name: "Lorelai Gilmore",
                date_of_birth: "1990-04-05"
            }];
        sequelize_1.Author.bulkCreate(authors, { ignoreDuplicates: true })
            .then(result => {
            cb(result);
        }).catch((err) => {
            console.log("Error => " + err);
            cb(err);
        });
    }
};
