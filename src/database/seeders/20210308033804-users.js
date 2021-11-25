'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkInsert('users', [
      {
        name: 'Igor Braga',
        email: 'igor@gmail.com',
        password: '$2a$10$03gBAtfGvAk9.rXm8cD99efwGsBCvcoR1KnOO6nNnNW84P9508K1y',
        telephone: "6798999999",
        cpf: "03933475509",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Admin nutriacao',
        email: 'nutriacao@gmail.com',
        telephone: "6798999999",
        cpf: "03933475509",
        password: '$2a$10$03gBAtfGvAk9.rXm8cD99efwGsBCvcoR1KnOO6nNnNW84P9508K1y',
        created_at: new Date(),
        updated_at: new Date()
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
