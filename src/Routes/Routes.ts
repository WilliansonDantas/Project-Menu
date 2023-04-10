import { Router } from 'express';
import CategoryController from '../Controllers/CategoryController';
import ProductController from '../Controllers/ProductController';

const routes = Router();

routes.get('/category', (req, res, next) => new CategoryController(req, res, next).findAll());

routes.get('/product/:id', (req, res, next) => new ProductController(req, res, next).findById());

routes.get('/product', (req, res, next) => new ProductController(req, res, next).findAll());

routes.patch('/product/:id', (req, res, next) => new ProductController(req, res, next).update());

routes.post('/product', (req, res, next) => new ProductController(req, res, next).create());

routes.delete('/product/:id', (req, res, next) => new ProductController(req, res, next).delete());

export default routes;