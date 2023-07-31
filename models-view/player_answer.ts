import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface playerAnswerAttributes {
  id: string;
  answer: string;
  is_correct: boolean;
  date: string;
}

export type playerAnswerPk = "id";
export type playerAnswerId = playerAnswer[playerAnswerPk];
export type playerAnswerCreationAttributes = playerAnswerAttributes;

export class playerAnswer extends Model<playerAnswerAttributes, playerAnswerCreationAttributes> implements playerAnswerAttributes {
  id!: string;
  answer!: string;
  is_correct!: boolean;
  date!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof playerAnswer {
    return sequelize.define('playerAnswer', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    answer: {
      type: DataTypes.CHAR(255),
      allowNull: false
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'player_answers',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "player_answers_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof playerAnswer;
  }
}
