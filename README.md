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