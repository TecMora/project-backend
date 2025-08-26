import express from 'express';
import * as notesController from '../controllers/notesController.js';

const router = express.Router();

// Define routes and link to controller functions
// Get all notes
router.get('/', notesController.getAllNotes);

router.get('/:id', notesController.getNoteById);

// Create a new note
router.post('/', notesController.createNode);

// Update a note by ID
router.put('/:id', notesController.updateNode);

// Delete a note by ID
router.delete('/:id', notesController.deleteNode);

export default router;