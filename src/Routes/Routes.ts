import { Router } from 'express';
import CategoryController from '../Controllers/CategoryController';

const routes = Router();

routes.get('/category', (req, res, next) => new CategoryController(req, res, next).findAll());


export default routes;