const league = require('../repository/League')
const pointHelper = require('../helper/league/PointHelper')
const response = require('../helper/Response')

exports.recordGame = async (req, res) => {

  check= await  Promise.all(Object.keys(req.body).map((key, index) => {
                    if(typeof req.body[key] != "string"){
                        response.failed.message = 'every property in body must string !'
                        return false
                    }
                }))
    
    check = check.filter(element => {
        return element == false
    })

    if(check.length != 0){
        return res.status(response.failed.code).json(response.failed)
    }
    
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
                                            findClub = findClub.toJSON()
                                            item.point = findClub.points + item.point
                                            item.win = findClub.win + item.win
                                            item.draw = findClub.draw + item.draw
                                            item.lose = findClub.lose + item.lose
                                            item.match = findClub.match + 1
                                            record = await league.update(item)
                                            item = record
                                        }else{
                                            record = await league.store(item)
                                            item = record
                                        }
                                        return item
                                    }))
        
        res.json(response.success)

    }catch(err){
        
        response.failed.message = err
        res.status(response.failed.code).json(response.failed)

    }
    
}