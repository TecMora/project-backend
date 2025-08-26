import {Note} from '../models/Note.js';

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error IN getAllNotes", error);
    res.status(500).json({ message: 'Internal Server Error', error:error.message } );
  }
}

export async function getNoteById(req, res) {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error IN getNoteById", error);
    res.status(500).json({ message: 'Internal Server Error', error:error.message } );
  }
}

export async function createNode(req, res) {
  try {
    const { title, content } = req.body;
    console.log(title, content);
    
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json({ message: 'Note created successfully', note: savedNote });
  } catch (error) {
    console.error("Error IN createNode", error);
    res.status(500).json({ message: 'Internal Server Error', error:error.message } );
  }
}

export async function updateNode(req, res) {
  try {
    const { title, content } = req.body;
    const { id } = req.params;
    const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
    res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
  } catch (error) {
    console.error("Error IN creaupdateNodeteNode", error);
    res.status(500).json({ message: 'Internal Server Error', error:error.message } );
  }
}

export async function deleteNode(req, res) {
  try {
    const { id } = req.params;
    const deletedNote = await Note.findByIdAndDelete(id);
      if (!deletedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error("Error IN deleteNode", error);
    res.status(500).json({ message: 'Internal Server Error', error:error.message } );
  }
}