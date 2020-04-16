const league = require('../repository/League')
const response = require('../helper/Response')

exports.standing = async (req, res) => {
    
    try{
        response.success.message = await league.index()
        res.json(response.success)
    }catch(err){
        response.failed.message = err
        res.status(response.failed.code).json(response.failed)
    }

}

