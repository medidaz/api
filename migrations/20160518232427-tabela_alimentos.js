'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('alimentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
      , descricao: {
        type: Sequelize.STRING
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
  }
  , down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('alimentos');
  }
};
