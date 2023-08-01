import type { Sequelize } from "sequelize";
import { playerAnswer as _playerAnswer } from "./player_answer";
import type { playerAnswerAttributes, playerAnswerCreationAttributes } from "./player_answer";
import { questionsAnswer as _questionsAnswer } from "./questions_answer";
import type { questionsAnswerAttributes, questionsAnswerCreationAttributes } from "./questions_answer";
import { quiz as _quiz } from "./quiz";
import type { quizAttributes, quizCreationAttributes } from "./quiz";
import { quizQuestion as _quizQuestion } from "./quiz_question";
import type { quizQuestionAttributes, quizQuestionCreationAttributes } from "./quiz_question";

export {
  _playerAnswer as playerAnswer,
  _questionsAnswer as questionsAnswer,
  _quiz as quiz,
  _quizQuestion as quizQuestion,
};

export type {
  playerAnswerAttributes,
  playerAnswerCreationAttributes,
  questionsAnswerAttributes,
  questionsAnswerCreationAttributes,
  quizAttributes,
  quizCreationAttributes,
  quizQuestionAttributes,
  quizQuestionCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const playerAnswer = _playerAnswer.initModel(sequelize);
  const questionsAnswer = _questionsAnswer.initModel(sequelize);
  const quiz = _quiz.initModel(sequelize);
  const quizQuestion = _quizQuestion.initModel(sequelize);


  return {
    playerAnswer: playerAnswer,
    questionsAnswer: questionsAnswer,
    quiz: quiz,
    quizQuestion: quizQuestion,
  };
}
