import { author_controller } from '../controller/author';
import { Router } from 'express';
export const author_router = Router();
author_router.get('/best/:limit?', author_controller.bestSeller);