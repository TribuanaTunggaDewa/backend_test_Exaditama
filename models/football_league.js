'use strict';

const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  const football_league = sequelize.define('football_league', {
    clubname: DataTypes.STRING,
    points: DataTypes.INTEGER,
    win: DataTypes.INTEGER,
    lose: DataTypes.INTEGER,
    draw: DataTypes.INTEGER,
    match: DataTypes.INTEGER,
    createdAt:  {
      type : DataTypes.DATE,
      get(){
        const rawValue = this.getDataValue('createdAt')
        return moment(rawValue).format()
      }},
    updatedAt:  {
      type : DataTypes.DATE,
      get(){
        const rawValue = this.getDataValue('updatedAt')
        return moment(rawValue).format()
      }},
  }, {
    timestamps: false
  });
  football_league.associate = function(models) {
    // associations can be defined here
  };
  return football_league;
};