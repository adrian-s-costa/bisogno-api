import { formPost, formGet } from '../controllers/form.controller.js';
import { Router } from 'express';

const router = Router();

router.post('/form/save', formPost);

router.get('/form', formGet);

export default router;