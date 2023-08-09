import express from 'express';
import { getAllUsers, login, sighup } from '../controllers/user-controller';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/sighup', sighup);
router.post('/login', login);

export default router;
