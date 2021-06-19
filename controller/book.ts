import { Request, Response } from 'express';
import { Book } from './../config/sequelize';
export const books_controller = {
    seed: (cb:Function) => {
        const books = [{
            id:1,
            isbn: "4679815649",
            author_id: 4
        },
        {
            id:2,
            isbn: "1654798462",
            author_id: 2
        },
        {
            id:3,
            isbn: "1345798456",
            author_id: 4
        },
        {
            id:4,
            isbn: "1234569513",
            author_id: 1
        },
        {
            id:5,
            isbn: "4562958794",
            author_id: 4
        }]
        Book.bulkCreate(books, { ignoreDuplicates: true })
            .then(result => {
                cb(result);
            }).catch((err: Error) => {
            console.log("Error => " + err);
            cb(err);
        })
    }
}