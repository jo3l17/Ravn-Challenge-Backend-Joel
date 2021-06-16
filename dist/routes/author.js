"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.author_router = void 0;
const author_1 = require("../controller/author");
const express_1 = require("express");
exports.author_router = express_1.Router();
exports.author_router.get('/best/:limit?', author_1.author_controller.bestSeller);
