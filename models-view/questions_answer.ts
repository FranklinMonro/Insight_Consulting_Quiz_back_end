import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface questionsAnswerAttributes {
  answer_id: number;
  question_id: number;
  quiz_id: number;
  answer: string;
  is_correct: boolean;
}

export type questionsAnswerPk = "answer_id";
export type questionsAnswerId = questionsAnswer[questionsAnswerPk];
export type questionsAnswerCreationAttributes = questionsAnswerAttributes;

export class questionsAnswer extends Model<questionsAnswerAttributes, questionsAnswerCreationAttributes> implements questionsAnswerAttributes {
  answer_id!: number;
  question_id!: number;
  quiz_id!: number;
  answer!: string;
  is_correct!: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof questionsAnswer {
    return sequelize.define('questionsAnswer', {
    answer_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    quiz_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    answer: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    tableName: 'questions_answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "questions_answers_pkey",
        unique: true,
        fields: [
          { name: "answer_id" },
        ]
      },
    ]
  }) as typeof questionsAnswer;
  }
}
