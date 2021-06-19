"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./config/sequelize");
const author_1 = require("./controller/author");
const book_1 = require("./controller/book");
const sale_item_1 = require("./controller/sale_item");
const author_2 = require("./routes/author");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = process.env.PORT || 3700;
// const HOST = process.env.HOST || 'localhost'
app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Allow', 'GET,POST');
    next();
})
    .use('/api/authors', author_2.author_router);
app.use('/', (req, res) => { res.send('it works :v'); });
app.listen(puerto, () => {
    console.log(`server running in PORT ${puerto}`);
    sequelize_1.sequelize.sync({ force: false }).then((result) => {
        console.log('-------------');
        author_1.author_controller.seed((result) => {
            console.log("authors added");
            book_1.books_controller.seed((result) => {
                console.log("books added");
                sale_item_1.sale_items_controller.seed((result) => {
                    console.log("sales added");
                });
            });
        });
        console.log('database created');
    }).catch((error) => {
        console.log(error);
        console.log('error creating database');
    });
});
