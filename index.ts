import { NextFunction, Request, Response } from 'express';
import { sequelize } from './config/sequelize';
import { author_controller } from './controller/author';
import { books_controller } from './controller/book';
import { sale_items_controller } from './controller/sale_item';
import { author_router } from './routes/author';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = process.env.PORT || 3700;
// const HOST = process.env.HOST || 'localhost'

app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use((req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
        res.header('Access-Control-Allow-Methods', 'GET,POST');
        res.header('Allow', 'GET,POST');
        next();
    })
    .use('/api/authors', author_router);
app.use('/', (req: any, res: any) => { res.send('it works :v') });
app.listen(puerto, () => {
    console.log(`server running in PORT ${puerto}`);
    sequelize.sync({ force: false }).then((result: any) => {
        console.log('-------------');
        author_controller.seed((result:any) => {
            console.log("authors added");
            books_controller.seed((result:any)=>{
                console.log("books added");
                sale_items_controller.seed((result:any)=>{
                    console.log("sales added")
                })
            })
        });
        console.log('database created');
    }).catch((error: any) => {
        console.log(error);
        console.log('error creating database');
    })
})