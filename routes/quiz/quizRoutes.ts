import express from 'express';
import { getQuestions, getQuiz } from './quizControllers';

class QuizRouter {
  public router = express.Router();

  constructor() {
    this.router.get('/quiz', getQuiz);

    this.router.get('/questions/:quizid/:questionid', getQuestions);
  }
}

export default new QuizRouter().router;
