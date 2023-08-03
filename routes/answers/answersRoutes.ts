import express from 'express';
import { getAnswer, postAnswer } from './answersControllers';

class AnswersRouter {
  public router = express.Router();

  constructor() {
    this.router.post('/', postAnswer);

    this.router.get('/:answersID', getAnswer);
  }
}

export default new AnswersRouter().router;
