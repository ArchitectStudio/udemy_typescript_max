import { Router } from 'express';

import { createTodo } from '../controllers/todos';

const router = Router();

router.get('/', (req, res) => {});

router.post('/', createTodo);

router.patch('/:id');

router.delete('/:id');

export default router;
