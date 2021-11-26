'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('documents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      link_site: {
        type: Sequelize.TEXT('long'),
        allowNull: true
      },
      description: {
        type: Sequelize.TEXT('long'),
        allowNull: true
      },
      link_download: {
        type: Sequelize.TEXT('long'),
        allowNull: true
      },
      title: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      document_category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'document_categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('documents');
  }
};
