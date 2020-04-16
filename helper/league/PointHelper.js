exports.Point = (home, away) => {

    if(home.score > away.score){
        home.point = 3
        home.win = 1
        home.lose = 0
        away.point = 0
        away.win = 0
        away.lose = 1
        home.draw = 0
        away.draw = 0
    }else if(home.score == away.score){
        home.point = 0
        home.win = 0
        home.lose = 0
        away.point = 0
        away.win = 0
        away.lose = 0
        home.draw = 1
        away.draw = 1
    }else if(home.score < away.score){
        home.point = 0
        home.win = 0
        home.lose = 1
        away.point = 3
        away.win = 1
        away.lose = 0
        home.draw = 0
        away.draw = 0
    }
}