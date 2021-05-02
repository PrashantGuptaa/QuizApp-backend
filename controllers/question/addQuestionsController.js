const { Question } = require("../../models/question.model");

const addQuestions = (req, res) => {
      const newQuestion = new Question(req.body);
      newQuestion.save().then((response) => {
            console.log(response);
            res.status(200).send(response);
      }).catch((err) => res.status(500).send(err));
}

module.exports = { addQuestions };