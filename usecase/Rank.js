const league = require('../repository/League')
const response = require('../helper/Response')

exports.rank = async (req, res) => {

    if(req.query.clubname != undefined){
        req.query.clubname = req.query.clubname.split(`"`)
        req.query.clubname = req.query.clubname.filter(element => {
            return element != ''
        })
        req.query.clubname = req.query.clubname.join()  
        clubname = req.query.clubname
    }else{
        clubname = ""
    }
    try{
        data = await league.index()
        i = 0
        data  = data.map(item => {
                    item = item.toJSON()
                    i++
                    item.standing = i
                    console.log(item)
                    return item
                })
                
        response.success.message = data.filter(element => {
            return element.clubname.toLowerCase().match(clubname.toLowerCase())
        })
        res.json(response.success)
    }catch(err){
        response.failed.message = err
        res.status(response.failed.code).json(response.failed.message)
    }
}
