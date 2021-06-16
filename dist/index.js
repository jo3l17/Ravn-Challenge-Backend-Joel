"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./config/sequelize");
const author_1 = require("./routes/author");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const puerto = process.env.PORT || 3700;
app.use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header('Allow', 'GET,POST');
    next();
})
    .use('/api/authors', author_1.author_router);
// .use('/', (req: any, res: any) => { res.send('it works :v') });
app.listen(puerto, () => {
    console.log(`server running in PORT ${puerto}`);
    sequelize_1.sequelize.sync({ force: false }).then(() => {
        console.log('database created');
    }).catch((error) => {
        console.log(error);
        console.log('error creating database');
    });
});
