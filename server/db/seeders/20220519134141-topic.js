"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Topics",
      [
        {
          title: "География",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Кино",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Выдры",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Обществознание",
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
