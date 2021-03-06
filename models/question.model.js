const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
      question: { type: String, required: true },
      category: { type: String, required: true },
      optionA: { type: String, required: true },
      optionB: { type: String, required: true },
      optionC: { type: String, required: true },
      optionD: { type: String, required: true },
      correctAnswer: { type: String, required: true },
});

const Question = mongoose.model('question', questionSchema);

module.exports = { Question };