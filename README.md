# Player Swap Club

A platform for likeminded players to swap games with each other through an automated matching via wishlists and by user location / current market pricings.

## About the Project

I will be discovering the world of serverless on this project through AWS services (Lambdas, DynamoDb etc), consume APIs (RAWG for games data, CheapSark API pricing, shipping tbc), and deliver the front end via React.



## Cheatsheet

### Serverless:


- Run and test a function:
```serverless invoke local --function get --path tests/mocks/list-event.json```

- Deploy 1 function:
```serverless deploy function -f list```

