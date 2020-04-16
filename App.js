require('dotenv').config()
require('express-group-routes')

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())
//controllers
const league = require('./controllers/League')

//routes
app.group('/football', (routes)=> {
    routes.post('/recordgame', league.record)
    routes.get('/leaguestanding', league.allStand)
    routes.get('/rank', league.rankDetail)
}) 

app.listen(process.env.PORT || 5000, () => console.log(`listening on port : ${process.env.APP_PORT}`))