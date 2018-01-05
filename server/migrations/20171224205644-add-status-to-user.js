'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('Users', 'status', Sequelize.STRING)
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Users', 'status')
  }
};
