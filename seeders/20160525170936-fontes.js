'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Fonte', [{
        id: '1',
        name: 'Pessoal',
        createdAt: new Date,
        updatedAt: new Date        
      },
      {
        id: '2',
        name: 'Fonte 1',
        createdAt: new Date,
        updatedAt: new Date        
      }], {});
  },

  down: function (queryInterface, Sequelize) {   
      return queryInterface.bulkDelete('Fonte', null, {});
  }
};
