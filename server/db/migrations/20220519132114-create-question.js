'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      topic_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Topics',
          key: 'id',
        },
      },
      zag: {
        type: Sequelize.TEXT
      },
      question: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      answer: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      questionValue: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Questions');
  }
};
