/* eslint-disable @typescript-eslint/naming-convention */
import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';

export interface quizAttributes {
  quiz_id: number;
  quiz_name: string;
}

export type quizPk = 'quiz_id';
export type quizId = quiz[quizPk];
export type quizCreationAttributes = quizAttributes;

export class quiz extends Model<quizAttributes, quizCreationAttributes> implements quizAttributes {
  quiz_id!: number;

  quiz_name!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof quiz {
    return sequelize.define('quiz', {
      quiz_id: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        primaryKey: true,
      },
      quiz_name: {
        type: DataTypes.CHAR(255),
        allowNull: false,
      },
    }, {
      tableName: 'quiz',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: 'quiz_pkey',
          unique: true,
          fields: [
            { name: 'quiz_id' },
          ],
        },
      ],
    }) as typeof quiz;
  }
}
