/* eslint-disable @typescript-eslint/naming-convention */
import { randomUUID } from 'crypto';

import { answerLogger as log } from '../../server/winstonLog';
import { SEQUILIZE_NEW } from '../../server/config';
import {
  initModels, playerAnswerAttributes,
} from '../../models-view/init-models';
import createErrorMessage from '../../server/createErrorMessage';

const { playerAnswer } = initModels(SEQUILIZE_NEW);

const postPlayersAnswers = async (
  answerPlayer: playerAnswerAttributes,
): Promise<playerAnswerAttributes | Error> => {
  try {
    const { answer, is_correct } = answerPlayer;
    const wordTypes = await playerAnswer.create({
      id: randomUUID(),
      answer,
      is_correct,
      date: new Date().toISOString(),
    }).catch((err: Error) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });

    return wordTypes!;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

const getPlayersAnswers = async (
  answersID: string[],
): Promise<playerAnswerAttributes[] | Error> => {
  try {
    const wordTypes = await playerAnswer.findAll({
      where: {
        id: answersID,
      },
      raw: true,
    }).catch((err: Error) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });

    return wordTypes!;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

export {
  postPlayersAnswers,
  getPlayersAnswers,
};
