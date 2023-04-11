import { Router } from 'express';
import CategoryController from '../Controllers/CategoryController';
import ProductController from '../Controllers/ProductController';
import AuthController from '../Controllers/AuthController';
import ValidateJWT from '../Middlewares/ValidateJWT';

const routes = Router();

routes.post('/auth/login', (req, res, next) => new AuthController(req, res, next).login());

routes.get('/category', 
(req, res, next) => new ValidateJWT(req, res, next).validate(), 
(req, res, next) => new CategoryController(req, res, next).findAll());

routes.get('/product/:id',
(req, res, next) => new ValidateJWT(req, res, next).validate(),
(req, res, next) => new ProductController(req, res, next).findById());

routes.get('/product', 
(req, res, next) => new ValidateJWT(req, res, next).validate(),
(req, res, next) => new ProductController(req, res, next).findAll());

routes.patch('/product/:id', 
(req, res, next) => new ValidateJWT(req, res, next).validate(),
(req, res, next) => new ProductController(req, res, next).update());

routes.post('/product',
(req, res, next) => new ValidateJWT(req, res, next).validate(),
(req, res, next) => new ProductController(req, res, next).create());

routes.delete('/product/:id',
(req, res, next) => new ValidateJWT(req, res, next).validate(),
(req, res, next) => new ProductController(req, res, next).delete());

export default routes;