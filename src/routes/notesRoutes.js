import express from 'express';
import * as notesController from '../controllers/notesController.js';

const router = express.Router();

router.get('/', notesController.getAllNotes);

router.post('/', notesController.createNode);

router.put('/:id', notesController.updateNode);

router.delete('/:id', notesController.deleteNode);

export default router;