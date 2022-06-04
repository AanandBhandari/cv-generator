import { Router } from 'express';
import CVRoute from './cv';

const router = Router();

router.use('/cv', CVRoute);

export default router;
