import { Request, Response, NextFunction } from 'express';
import { answerLogger as log } from '../../server/winstonLog';
import { getPlayersAnswers, postPlayersAnswers } from './answersUtils';

const postAnswer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const answer = await postPlayersAnswers(req.body);
    if (answer instanceof Error) {
      throw new Error('Error in post player answer');
    }
    res.status(200).send(answer);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const getAnswer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { answersID } = req.params;
    const id = answersID.split(',');
    const allAnswers = await getPlayersAnswers(id);
    if (allAnswers instanceof Error) {
      throw new Error('Error in get word types');
    }
    res.status(200).send(allAnswers);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

export {
  postAnswer,
  getAnswer,
};
