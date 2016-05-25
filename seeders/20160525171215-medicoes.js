'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Medicoes', [{
        id: '1',
        name: 'Feijao',
        createdAt: new Date,
        updatedAt: new Date        
      },
      {
        id: '2',
        name: 'Arroz',
        createdAt: new Date,
        updatedAt: new Date        
      }], {});
  },

  down: function (queryInterface, Sequelize) {   
      return queryInterface.bulkDelete('Medicoes', null, {});
  }
};
