import { Request, Response, NextFunction } from 'express';

import { quizLogger as log } from '../../server/winstonLog';
import { getQuestionAnswer, getQuizNames, getQuizQuestions } from './quizUtils';

const getQuiz = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const quiz = await getQuizNames();
    if (quiz instanceof Error) {
      throw new Error('Error in get quiz');
    }
    res.status(200).send(quiz);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const getQuestions = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { quizid, questionid } = req.params;
    const quesstion = await getQuizQuestions(Number(quizid), Number(questionid));
    if (quesstion instanceof Error) {
      throw new Error('Error in get questions');
    }
    res.status(200).send(quesstion);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const getAnswer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { quizid, questionid } = req.params;
    const answers = await getQuestionAnswer(Number(quizid), Number(questionid));
    if (answers instanceof Error) {
      throw new Error('Error in get answers for question');
    }
    res.status(200).send(answers);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

export {
  getQuiz,
  getQuestions,
  getAnswer,
};
