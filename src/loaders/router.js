import * as routes from '../routes';

export const router = (app) => {
  Object.values(routes).forEach((router) =>
    app.use(router.path, router.router)
  );
};
