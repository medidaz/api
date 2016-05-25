'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Medida', [{
        id: '1',
        name: 'Copo',
        createdAt: new Date,
        updatedAt: new Date        
      },
      {
        id: '2',
        name: 'Colher',
        createdAt: new Date,
        updatedAt: new Date        
      }], {});
  },

  down: function (queryInterface, Sequelize) {   
      return queryInterface.bulkDelete('Medida', null, {});
  }
};
