import { quizLogger as log } from '../../server/winstonLog';
import { SEQUILIZE_NEW } from '../../server/config';
import {
  initModels, questionsAnswerAttributes, quizAttributes, quizQuestionAttributes,
} from '../../models-view/init-models';
import createErrorMessage from '../../server/createErrorMessage';

const { quiz, quizQuestion, questionsAnswer } = initModels(SEQUILIZE_NEW);

const getQuizNames = async (): Promise<quizAttributes[] | Error> => {
  try {
    const wordTypes = await quiz.findAll({
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

const getQuizQuestionsCount = async (
  quizid: number,
): Promise<number | Error> => {
  try {
    const count = await quizQuestion.count({
      where: {
        quiz_id: quizid,
      },
    }).catch((err: Error) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });

    return count!;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

const getQuizQuestions = async (
  quizid: number,
  questionid: number,
): Promise<quizQuestionAttributes | Error> => {
  try {
    const questions = await quizQuestion.findOne({
      where: {
        quiz_id: quizid,
        question_id: questionid,
      },
      raw: true,
    }).catch((err: Error) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });

    return questions!;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

const getQuestionAnswer = async (
  quizid: number,
  questionid: number,
): Promise<questionsAnswerAttributes[] | Error> => {
  try {
    const answers = await questionsAnswer.findAll({
      where: {
        quiz_id: quizid,
        question_id: questionid,
      },
      raw: true,
    }).catch((err: Error) => {
      log.log('error', `Error in getting wordTypes, error: ${err}`);
      throw new Error('Error in getting wordTypes');
    });

    return answers!;
  } catch (err: any) {
    const { fileName, line } = createErrorMessage(err!);
    log.log('error', `Error in File: ${fileName} on line: ${line}, error: ${err}`);
    return err as Error;
  }
};

export {
  getQuizNames,
  getQuizQuestionsCount,
  getQuizQuestions,
  getQuestionAnswer,
};
