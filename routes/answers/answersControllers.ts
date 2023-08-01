import { Request, Response, NextFunction } from 'express';
import { answerLogger as log } from '../../server/winstonLog';
import { getPlayersAnswers, postPlayersAnswers } from './answersUtils';

const postAnswer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const quesstion = await postPlayersAnswers(req.body);
    if (quesstion instanceof Error) {
      throw new Error('Error in get word types');
    }
    res.status(200).send(quesstion);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

const getAnswer = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { answerID } = req.params;
    const quesstion = await getPlayersAnswers([answerID]);
    if (quesstion instanceof Error) {
      throw new Error('Error in get word types');
    }
    res.status(200).send(quesstion);
  } catch (err) {
    log.log('error', `URL ${req.baseUrl}, error: ${err}`);
    next(err);
  }
};

export {
  postAnswer,
  getAnswer,
};
