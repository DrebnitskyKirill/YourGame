'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Topic}) {
      Question.Topic = Question.belongsTo(Topic, {foreignKey: 'topic_id'})
    }
  }
  Question.init({
    topic_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Topics',
        key: 'id',
      },
    },
    zag: {
      type: DataTypes.TEXT
    },
    question: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    answer: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    questionValue: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
