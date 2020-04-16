# backend_test_Exaditama

## The endpoint below has been hosted on Heroku, so you can try it

## 1. example request :
```
https://backendtestexaditama.herokuapp.com/football/recordgame
```
### example body :
```
{
	"clubhomename" : "clubhomename",
	"clubawayname" : "clubawayname",
	"score" : "4  :   4"
}
```
### example success response :
```
{
    "code": 200,
    "status": "success",
    "message": [
        {
            "club": "Chelsea",
            "score": "4",
            "point": 0,
            "win": 0,
            "lose": 2,
            "draw": 1
        },
        {
            "club": "Man Utd",
            "score": "4",
            "point": 6,
            "win": 2,
            "lose": 0,
            "draw": 1
        }
    ]
}
```
### example failed response : 
```
{
    "code": 400,
    "status": "failed",
    "message": "every property in body must string !"
}
```
### Description :
#### will add the club to the club list if it was not previously in the club list, and will update the data if the club is already in the list


## 2. example request :
```
https://backendtestexaditama.herokuapp.com/football/leaguestanding
```

### example success response :
```
{
    {
    "code": 200,
    "status": "success",
    "message": [
        {
            "createdAt": "2020-04-16T20:38:56+00:00",
            "updatedAt": "2020-04-16T20:40:12+00:00",
            "clubname": "Man City",
            "points": 4,
            "win": 1,
            "lose": 0,
            "draw": 1,
            "match": 2
        },
        {
            "createdAt": "2020-04-16T20:39:33+00:00",
            "updatedAt": "2020-04-16T20:39:33+00:00",
            "clubname": "Brimingham",
            "points": 3,
            "win": 1,
            "lose": 0,
            "draw": 0,
            "match": 1
        },
        {
            "createdAt": "2020-04-16T20:38:56+00:00",
            "updatedAt": "2020-04-16T20:40:12+00:00",
            "clubname": "Man Utd",
            "points": 1,
            "win": 0,
            "lose": 1,
            "draw": 1,
            "match": 2
        },
        {
            "createdAt": "2020-04-16T20:39:33+00:00",
            "updatedAt": "2020-04-16T20:39:33+00:00",
            "clubname": "Tottenham",
            "points": 0,
            "win": 0,
            "lose": 1,
            "draw": 0,
            "match": 1
        }
    ]
}
```
## 3 example with query string request :
```
https://backendtestexaditama.herokuapp.com/football/rank?clubname=Man 
```
### example with query string response :
```
{
    "code": 200,
    "status": "success",
    "message": [
        {
            "createdAt": "2020-04-16T20:38:56+00:00",
            "updatedAt": "2020-04-16T20:40:12+00:00",
            "clubname": "Man City",
            "points": 4,
            "win": 1,
            "lose": 0,
            "draw": 1,
            "match": 2,
            "standing": 1
        },
        {
            "createdAt": "2020-04-16T20:38:56+00:00",
            "updatedAt": "2020-04-16T20:40:12+00:00",
            "clubname": "Man Utd",
            "points": 1,
            "win": 0,
            "lose": 1,
            "draw": 1,
            "match": 2,
            "standing": 3
        }
    ]
}
```
### example without query string request :
```
https://backendtestexaditama.herokuapp.com/football/rank
```

### example without query string response :
```
{
   {
    "code": 200,
    "status": "success",
    "message": [
        {
            "createdAt": "2020-04-16T20:38:56+00:00",
            "updatedAt": "2020-04-16T20:40:12+00:00",
            "clubname": "Man City",
            "points": 4,
            "win": 1,
            "lose": 0,
            "draw": 1,
            "match": 2,
            "standing": 1
        },
        {
            "createdAt": "2020-04-16T20:39:33+00:00",
            "updatedAt": "2020-04-16T20:39:33+00:00",
            "clubname": "Brimingham",
            "points": 3,
            "win": 1,
            "lose": 0,
            "draw": 0,
            "match": 1,
            "standing": 2
        },
        {
            "createdAt": "2020-04-16T20:38:56+00:00",
            "updatedAt": "2020-04-16T20:40:12+00:00",
            "clubname": "Man Utd",
            "points": 1,
            "win": 0,
            "lose": 1,
            "draw": 1,
            "match": 2,
            "standing": 3
        },
        {
            "createdAt": "2020-04-16T20:39:33+00:00",
            "updatedAt": "2020-04-16T20:39:33+00:00",
            "clubname": "Tottenham",
            "points": 0,
            "win": 0,
            "lose": 1,
            "draw": 0,
            "match": 1,
            "standing": 4
        }
    ]
}

``` 

### Description :
#### show club list with query string and standing

