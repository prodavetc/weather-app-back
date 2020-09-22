![alt text](https://pbs.twimg.com/media/EifPyGNVkAEhLEa?format=png&name=small)

# weather-app-back
Weather App backend

Weather backend NodeJS  aplication
```
├── README.md          // Main docs
├── routes             // Route
├── lib                // Used library
├── config             // Config app
├── services           // Service ffiles
├── node_modules            
├── package-lock.json       
├── package.json
└── app.js              // main app script
```

## Installation
```
#Require
config (3.3.1)
express(4.17.1)
ipapi.co(0.3.0)
node-fetch(2.6.1)
```

## Endpoints
| Method  | Endpoints |Description|
| ------- | ------------- |-------|
| GET     | /v1  |Base |
| GET     | /location  |Location and weather data for IP|
| GET     | /current  |Weather data for IP with ipapi|
| GET     | /current:id  |Weather data by ID city(Name) with ipapi|
| GET     | /forecast  |5 days weather data by IP with ipapi|
| GET     | /forecast:id  |5 days weather data by ID city(Name) with ipapi|
