const league = require('../usecase/RecordGame')
const standing = require('../usecase/Standing')
const rank = require('../usecase/Rank')

exports.record = (req, res) => {
    return league.recordGame(req, res)
}

exports.allStand = (req, res) => {
    return standing.standing(req, res)
}

exports.rankDetail = (req, res) => {
    return rank.rank(req, res)
}