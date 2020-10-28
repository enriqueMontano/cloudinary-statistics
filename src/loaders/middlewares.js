import * as allMiddlewares from '../middlewares';

export const middlewares = (app) => {
  Object.values(allMiddlewares).forEach((middleware) => app.use(middleware));
};
