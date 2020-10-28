import { Router } from 'express';
import { GetStatistics, GetCsv } from '../controllers';

const router = Router();

router.get('/statistics', GetStatistics);

router.get('/csv', GetCsv);

export const CloudinaryRoutes = { path: '/cloudinary', router };
