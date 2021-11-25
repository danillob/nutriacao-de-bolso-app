'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('practice_categories', [
      {
        title: "Práticas Universais",
        subcategory_of: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Práticas Específicas",
        subcategory_of: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Fase do curso da vida",
        subcategory_of: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Gestante",
        subcategory_of: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Crianças menores de 2 anos",
        subcategory_of: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: "Adolescentes",
        subcategory_of: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('practice_categories', null, {});
  }
};
