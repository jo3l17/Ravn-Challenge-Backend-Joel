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
            // authors.count.sort((a: any, b: any) => b.count - a.count);
            // authors.rows.sort((a: any, b: any) => {
            authors.sort((a, b) => {
                let countA = 0;
                let countB = 0;
                a.books.forEach((book) => {
                    book.sale_items.forEach(() => {
                        countA++;
                    });
                });
                b.books.forEach((book) => {
                    book.sale_items.forEach(() => {
                        countB++;
                    });
                });
                return countB - countA;
            });
            // for (let i = 0; i < authors.length; i++) {
            //     const element = authors[i];
            //     element.sales = 0;
            //     element.books.forEach((book: any) => {
            //         book.sale_items.forEach(() => {
            //             element.sales++;
            //         });
            //     });
            // }
            // authors.count.slice(limit);
            // authors.rows = authors.rows.slice(0,limit)
            authors = authors.slice(0, limit);
            // let result = [...authors];
            // result.map(obj=> ({ ...obj, count: 1 }))
            // for (var i = 0, len = result.length; i < len; i++) {
            //     result[i].global = true;
            // }
            // result.map(function (obj) {
            //     console.log(obj.id)
            // })
            // var result = authors.map(function (post:any) {
            //     var tmpPost = post.toObject();
            //     // Add properties...
            //     tmpPost.votetype = 1;
            //     return tmpPost;
            // });
            // result.forEach((author:any) => {
            //     author.count = 0;
            //     author.books.forEach((book: any) => {
            //         book.sale_items.forEach(() => {
            //             author.count++;
            //         });
            //     });
            //     console.log(author.count)
            // });
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
