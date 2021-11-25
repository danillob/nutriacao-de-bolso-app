'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('users', 'telephone', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 0
    });
    queryInterface.addColumn('users', 'cpf', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 0
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('users', 'telephone');
    queryInterface.removeColumn('users', 'cpf');
  }
};
