const football_league = require('../models').football_league
const moment = require('moment')

exports.show = (name) => {
    return football_league.findOne({
        where : {
            clubname : name
        }
    }).then(result => {
        return result
    }).catch(err => {
        return err
    })
}

exports.index = () => {
    return football_league.findAll({
            attributes :{
                exclude : ['id']
            },
            order : [['points','DESC']]
        }).then(result => {
               return result
           })
           .catch(err => {
               return err
           })
}

exports.store = (data, t) => {
    return football_league.create({
        clubname: data.club,
        points: data.point,
        win: data.win,
        lose: data.lose,
        draw: data.draw,
        match: 1,
        createdAt: moment().format(),
        updatedAt: moment().format()
    },{
        transaction: t
    }).then(() => {
        return {message : `success to record game ${data.club}`}
    }).catch(err => {
        return {message : `failed to record game ${data.club} cause ${err}`}
    })
}

exports.update = (data) => {
    return football_league.update({
        clubname: data.club,
        points: data.point,
        win: data.win,
        lose: data.lose,
        draw: data.draw,
        match: data.match,
        updatedAt: moment().format()
    },{
        where : {
            clubname : data.club
        }
    }).then(() => {
        return {message : `success to record game ${data.club}`}
    }).catch(err => {
        return {message : `failed to record game ${data.club} cause ${err}`}
    })
}


