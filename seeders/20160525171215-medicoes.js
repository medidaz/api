'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Medicoes', [{
        id: '1',
        
      }], {});
  },

  down: function (queryInterface, Sequelize) {   
      return queryInterface.bulkDelete('Medicoes', null, {});
  }
};
