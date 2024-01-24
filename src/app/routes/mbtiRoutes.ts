import express, { Router } from 'express';
import {getMBTIs, getMBTI_ID } from '../../controllers/mbtiController';
// import { handleAuthentication } from '../middleware/verifyHeader';

const router: Router = express.Router();

// router.use(handleAuthentication);
router.get('/', getMBTIs);
router.get('/:id', getMBTI_ID);

export default router;