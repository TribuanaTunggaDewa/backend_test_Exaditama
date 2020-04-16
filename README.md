# backend_test_Exaditama

## 1. example request :
```
http://localhost:8000/football/recordgame
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
```
will add the club to the club list if it was not previously in the club list, and will update the data if the club is already in the list
```

## 2. example request :
```
http://localhost:8000/football/leaguestanding
```

### example success response :
```
{
    {
    "code": 200,
    "status": "success",
    "message": [
        {
            "createdAt": "2020-04-16T19:45:02+07:00",
            "updatedAt": "2020-04-17T00:53:26+07:00",
            "clubname": "Man Utd",
            "points": 6,
            "win": 2,
            "lose": 0,
            "draw": 1
        },
        {
            "createdAt": "2020-04-17T00:53:08+07:00",
            "updatedAt": "2020-04-17T00:53:10+07:00",
            "clubname": "5",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1
        },
        {
            "createdAt": "2020-04-16T19:45:02+07:00",
            "updatedAt": "2020-04-17T00:53:26+07:00",
            "clubname": "Chelsea",
            "points": 0,
            "win": 0,
            "lose": 2,
            "draw": 1
        },
        {
            "createdAt": "2020-04-17T01:20:31+07:00",
            "updatedAt": "2020-04-17T01:20:31+07:00",
            "clubname": "Tottenham",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1
        },
        {
            "createdAt": "2020-04-17T01:20:31+07:00",
            "updatedAt": "2020-04-17T01:20:31+07:00",
            "clubname": "Man City",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1
        }
    ]
}
}
```
### Description :
```
show club list
```

## 3. example request : 
```
http://localhost:8000/football/rank
```

### example response : 
```
{
    "code": 200,
    "status": "success",
    "message": [
        {
            "createdAt": "2020-04-16T19:45:02+07:00",
            "updatedAt": "2020-04-17T00:53:26+07:00",
            "clubname": "Man Utd",
            "points": 6,
            "win": 2,
            "lose": 0,
            "draw": 1,
            "standing": 1
        },
        {
            "createdAt": "2020-04-17T00:53:08+07:00",
            "updatedAt": "2020-04-17T00:53:10+07:00",
            "clubname": "5",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1,
            "standing": 2
        },
        {
            "createdAt": "2020-04-16T19:45:02+07:00",
            "updatedAt": "2020-04-17T00:53:26+07:00",
            "clubname": "Chelsea",
            "points": 0,
            "win": 0,
            "lose": 2,
            "draw": 1,
            "standing": 3
        },
        {
            "createdAt": "2020-04-17T01:20:31+07:00",
            "updatedAt": "2020-04-17T01:20:31+07:00",
            "clubname": "Tottenham",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1,
            "standing": 4
        },
        {
            "createdAt": "2020-04-17T01:20:31+07:00",
            "updatedAt": "2020-04-17T01:20:31+07:00",
            "clubname": "Man City",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1,
            "standing": 5
        }
    ]
}
```
### example query string request :
```
http://localhost:8000/football/rank?clubname=Man 
```

### example query string response :
```
{
    "code": 200,
    "status": "success",
    "message": [
        {
            "createdAt": "2020-04-16T19:45:02+07:00",
            "updatedAt": "2020-04-17T00:53:26+07:00",
            "clubname": "Man Utd",
            "points": 6,
            "win": 2,
            "lose": 0,
            "draw": 1,
            "standing": 1
        },
        {
            "createdAt": "2020-04-17T01:20:31+07:00",
            "updatedAt": "2020-04-17T01:20:31+07:00",
            "clubname": "Man City",
            "points": 0,
            "win": 0,
            "lose": 0,
            "draw": 1,
            "standing": 5
        }
    ]
}
``` 
