const league = require('../repository/League')
const pointHelper = require('../helper/league/PointHelper')
const response = require('../helper/Response')

exports.recordGame = async (req, res) => {
    
    score = req.body.score.split(" ")
    score = score.filter((element) => {
        return element != ''
    })
    
    Home = {
        club : req.body.clubhomename,
        score : score[0]
    }
    Away = {
        club : req.body.clubawayname,
        score : score[2]
    } 
   
    pointHelper.Point(Home, Away)

    match = [Home, Away]

    try{
            
        response.success.message = await  Promise.all(match.map(async item => {
                                        findClub = await league.show(item.club)
                                        if(findClub){
                                            item.point = findClub.points + item.point
                                            item.win = findClub.win + item.win
                                            item.lose = findClub.lose + item.lose
                                            record = await league.update(item)
                                        }else{
                                            record = await league.store(item)
                                        }
                                        return item
                                    }))
        
        res.json(response.success)

    }catch(err){
        
        response.failed.message = err
        res.status(response.failed.code).json(response.failed)

    }
}