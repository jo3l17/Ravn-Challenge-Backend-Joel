import { Request, Response } from 'express';
import { Author, Book, Sale_item } from './../config/sequelize';
export const author_controller = {
    bestSeller: (req: Request, res: Response) => {
        const limit = parseInt(req.params.limit) || 10;
        Author.findAll({
            include: {
                model: Book,
                required: true,
                include: [{
                    model: Sale_item,
                    required: true
                }]
            },
            // group:'name'
        }).then((authors: any) => {
            // authors.count.sort((a: any, b: any) => b.count - a.count);
            // authors.rows.sort((a: any, b: any) => {
            authors.sort((a: any, b: any) => {
                let countA = 0;
                let countB = 0;
                a.books.forEach((book: any) => {
                    book.sale_items.forEach(() => {
                        countA++;
                    });
                });
                b.books.forEach((book: any) => {
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
            authors = authors.slice(0, limit)
            
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
            })
        }).catch((err: any) => {
            console.log("Error => " + err);
            res.status(500).json({
                message: 'Error',
                content: 'Internal Server Error, check logs'
            })
        })
    }
}