'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('medicoes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      }
      , value: {
        type: Sequelize.DECIMAL(10, 2)
      }
      , createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      , updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
      , fonte_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'fontes',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMEDIATE
        }
      }
      , medida_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'medidas',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMEDIATE
        }
      }
      , alimento_id: {
        type: Sequelize.INTEGER,
        references:{
          model: 'alimentos',
          key: 'id',
          deferrable: Sequelize.Deferrable.INITIALLY_IMEDIATE
        }
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('fontes');
  }
};
