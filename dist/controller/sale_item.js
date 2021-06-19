"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sale_items_controller = void 0;
const sequelize_1 = require("./../config/sequelize");
exports.sale_items_controller = {
    seed: (cb) => {
        const saleItems = [{
                id: 1,
                customer_name: "John Doe",
                item_price: 35.00,
                quantity: 2,
                book_id: 1
            },
            {
                id: 2,
                customer_name: "Carlos Suarez",
                item_price: 45.00,
                quantity: 4,
                book_id: 2
            },
            {
                id: 3,
                customer_name: "Jose",
                item_price: 35.00,
                quantity: 3,
                book_id: 1
            },
            {
                id: 4,
                customer_name: "Julian",
                item_price: 45.00,
                quantity: 2,
                book_id: 2
            },
            {
                id: 5,
                customer_name: "Lizeth",
                item_price: 45.00,
                quantity: 4,
                book_id: 2
            },
            {
                id: 6,
                customer_name: "Joel",
                item_price: 50.00,
                quantity: 2,
                book_id: 3
            },
            {
                id: 7,
                customer_name: "Juan Carlos",
                item_price: 40.00,
                quantity: 3,
                book_id: 4
            },
            {
                id: 8,
                customer_name: "Pedro",
                item_price: 5.00,
                quantity: 1,
                book_id: 2
            }];
        sequelize_1.Sale_item.bulkCreate(saleItems, { ignoreDuplicates: true })
            .then(result => {
            cb(result);
        }).catch((err) => {
            console.log("Error => " + err);
            cb(err);
        });
    }
};
