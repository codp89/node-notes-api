const Note = require("../models/Note");

// GET /api/notes?search=palabra
const getNotes = async (req, res) => {
  try {
    const { search } = req.query;
    let query = {};

    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { content: { $regex: search, $options: "i" } },
        ],
      };
    }

    const notes = await Note.find(query).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    console.error("Error al obtener notas:", error);
    res.status(500).json({ message: "Error al obtener notas" });
  }
};

// GET /api/notes/:id
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Nota no encontrada" });
    res.json(note);
  } catch (error) {
    console.error("Error al obtener nota:", error);
    res.status(500).json({ message: "Error al obtener nota" });
  }
};

// POST /api/notes
const createNote = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const newNote = new Note({
      title,
      content,
      tags,
    });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error al crear nota:", error);
    res.status(500).json({ message: "Error al crear nota" });
  }
};

// PUT /api/notes/:id
const updateNote = async (req, res) => {
  try {
    const { title, content, tags, archived } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content, tags, archived },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "Nota no encontrada" });

    res.json(updatedNote);
  } catch (error) {
    console.error("Error al actualizar nota:", error);
    res.status(500).json({ message: "Error al actualizar nota" });
  }
};

// DELETE /api/notes/:id
const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote)
      return res.status(404).json({ message: "Nota no encontrada" });

    res.json({ message: "Nota eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar nota:", error);
    res.status(500).json({ message: "Error al eliminar nota" });
  }
};

module.exports = {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
};
