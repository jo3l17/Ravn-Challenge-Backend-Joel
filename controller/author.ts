import { Request, Response } from 'express';
import { Author, Book, Sale_item } from './../config/sequelize';
export const author_controller = {
    bestSeller: (req: Request, res: Response) => {
        let limit: Number;
        console.log(req.params.limit);
        if (Number.isInteger(req.params.limit)) {
            limit = parseInt(req.params.limit) || 10;
        } else if(req.params.limit) {
            console.log("The parameters given are invalid, please check");
            return res.status(500).json({
                message: 'Error',
                content: 'Invalid parameters'
            });
        }
        Author.findAll({
            include: {
                model: Book,
                required: true,
                include: [{
                    model: Sale_item,
                    required: true
                }]
            },
        }).then((authors: any) => {
            authors = JSON.parse(JSON.stringify(authors));
            authors.forEach((author: any) => {
                author.sales = 0
                author.books.forEach((book: any) => {
                    book.sale_items.forEach(() => {
                        author.sales++;
                    });
                });
            });
            authors.sort((a: any, b: any) => b.sales - a.sales);
            authors = authors.slice(0, limit);
            return res.status(201).json({
                message: 'Ok',
                content: authors
            });
        }).catch((err: any) => {
            console.log("Error => " + err);
            return res.status(500).json({
                message: 'Error',
                content: 'Internal Server Error, check logs'
            });
        });
    }
}