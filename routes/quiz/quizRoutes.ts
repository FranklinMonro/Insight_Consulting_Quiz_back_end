import express from 'express';
import { getQuestions, getQuiz, getAnswer } from './quizControllers';

class QuizRouter {
  public router = express.Router();

  constructor() {
    this.router.get('/quiz', getQuiz);

    this.router.get('/questions/:quizid/:questionid', getQuestions);

    this.router.get('/questionanswer/:quizid/:questionid', getAnswer);
  }
}

export default new QuizRouter().router;
