'use strict';
module.exports = (sequelize, DataTypes) => {
  const football_league = sequelize.define('football_league', {
    clubname: DataTypes.STRING,
    points: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    draw: DataTypes.INTEGER
  }, {});
  football_league.associate = function(models) {
    // associations can be defined here
  };
  return football_league;
};