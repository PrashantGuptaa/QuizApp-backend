const { Question } = require("../../models/question.model");

const getQuestions = (req, res) => {
  const category = req.params.category;
  Question.find({ category })
    .limit(10)
    .then((response) => {
      console.log(response);
      res.status(200).send(response);
    })
    .catch((err) => res.status(500).send(err));
};

module.exports = { getQuestions };