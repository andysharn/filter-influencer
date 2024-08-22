
# filter influencers

based on the query parameters it will filter the influencers.


## Initialize

To run the  project

```bash
  npm init
```
```bash
  npm i axios
```

```bash
  node index.js
```



## API Reference

#### Get all influencers

```http
  GET https://xxxxxxq2.execute-api.us-east-1.amazonaws.com/prod
```

#### Get filtered influencers

```http
 GET  https://xxxxxxq2.execute-api.us-east-1.amazonaws.com/prod?min_influence_score=80&min_followers=10000&min_avg_likes=1400000&country=united states
```

| Query Parameter | Type     | Description                       |
| :-------- | :-------     | :--------------------------------   |
|min_influence_score | `Number` | filter based on the  score |
|min_followers| `Number` | filter based on the     followers |
|min_avg_likes | `Number` | filter based on the  likes |
|country | `string` | filter based on the  country|



## code flow

A csv file of list of influencers and the filter logic lambda function is hosted on aws. 

with the help of aws api gateway we are triggering the lambda function with the help of api. 

then we have index.js file with  required query params and axios api  request for triggering the lambda function for fetching json of filtered influencers. 
