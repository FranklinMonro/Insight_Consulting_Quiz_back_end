import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface quizQuestionAttributes {
  question_id: number;
  quiz_id: number;
  questions: string;
}

export type quizQuestionPk = "question_id";
export type quizQuestionId = quizQuestion[quizQuestionPk];
export type quizQuestionCreationAttributes = quizQuestionAttributes;

export class quizQuestion extends Model<quizQuestionAttributes, quizQuestionCreationAttributes> implements quizQuestionAttributes {
  question_id!: number;
  quiz_id!: number;
  questions!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof quizQuestion {
    return sequelize.define('quizQuestion', {
    question_id: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    quiz_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    questions: {
      type: DataTypes.CHAR(255),
      allowNull: false
    }
  }, {
    tableName: 'quiz_questions',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "quiz_questions_pkey",
        unique: true,
        fields: [
          { name: "question_id" },
        ]
      },
    ]
  }) as typeof quizQuestion;
  }
}
