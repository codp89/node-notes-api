const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El título es obligatorio"],
      trim: true,
    },
    content: {
      type: String,
      required: [true, "El contenido es obligatorio"],
    },
    tags: {
      type: [String],
      default: [],
    },
    archived: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // createdAt y updatedAt automáticos
  }
);

module.exports = model("Note", noteSchema);
