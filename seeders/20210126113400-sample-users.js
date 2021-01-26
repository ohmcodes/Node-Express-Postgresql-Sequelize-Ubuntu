'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return await queryInterface.bulkInsert(
    "Users",
    [
      {
        firstName: "Kobe",
        lastName: "Bryant",
        email: "kobe@blackmamba.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Steve",
        lastName: "Jobs",
        email: "steve@apple.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Elon",
        lastName: "Musk",
        email: "tesla@nicolai.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ],
    {}
   );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {});
  }
};
