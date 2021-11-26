'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('document_categories', 'category', 'title');
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.renameColumn('document_categories', 'title', 'category');
  }
};
