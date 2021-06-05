const Router = require('express').Router();

const { userSignIn } = require('../controllers/Auth/userSignInController');
const { userSignup } = require('../controllers/Auth/userSignupController');
const { verifyUser } = require('../controllers/Auth/verifyUserController');
const { defaultResponse } = require('../controllers/Default/defaultResponseController');
const { addQuestions } = require('../controllers/question/addQuestionsController');
const { getQuestions } = require('../controllers/question/getQuestionsController');

Router.get('/', defaultResponse);
Router.post('/signup', userSignup);
Router.post('/signin', userSignIn);
Router.get('/verifyuser', verifyUser);
Router.post('/addquestion', addQuestions);
Router.get('/getquestions/:category', getQuestions);

module.exports = Router;

  