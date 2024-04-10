import { Router } from 'express';
import queryRouter from './query.routes.ts';

const routes = Router();

routes.use('/query', queryRouter);
export default routes;