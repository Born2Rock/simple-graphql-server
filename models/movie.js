const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  name: String,
  genre: String,
  directorId: Schema.Types.ObjectId,
  rate: Number,
  watched: Boolean,
});

module.exports = mongoose.model('Movie', movieSchema);
