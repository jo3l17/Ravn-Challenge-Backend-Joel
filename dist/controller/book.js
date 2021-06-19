"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books_controller = void 0;
const sequelize_1 = require("./../config/sequelize");
exports.books_controller = {
    seed: (cb) => {
        const books = [{
                id: 1,
                isbn: "4679815649",
                author_id: 4
            },
            {
                id: 2,
                isbn: "1654798462",
                author_id: 2
            },
            {
                id: 3,
                isbn: "1345798456",
                author_id: 4
            },
            {
                id: 4,
                isbn: "1234569513",
                author_id: 1
            },
            {
                id: 5,
                isbn: "4562958794",
                author_id: 4
            }];
        sequelize_1.Book.bulkCreate(books, { ignoreDuplicates: true })
            .then(result => {
            cb(result);
        }).catch((err) => {
            console.log("Error => " + err);
            cb(err);
        });
    }
};
