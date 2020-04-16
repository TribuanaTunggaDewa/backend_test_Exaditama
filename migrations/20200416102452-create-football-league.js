'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('football_leagues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      point: {
        type: Sequelize.INTEGER
      },
      win: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      lose: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      draw: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      match: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('football_leagues');
  }
};