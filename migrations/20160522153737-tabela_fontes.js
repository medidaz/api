'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('fontes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
      , texto_exibicao: {
        type: Sequelize.STRING
      }
      , descricao: {
        type: Sequelize.TEXT
      }
      , metodologia: {
        type: Sequelize.TEXT
      }
      , createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      , updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('fontes');
  }
};
