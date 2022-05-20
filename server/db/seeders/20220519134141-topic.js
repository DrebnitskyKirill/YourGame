"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Topics",
      [
        {
          topic: "География",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic: "Кино",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic: "Выдры",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          topic: "Обществознание",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
