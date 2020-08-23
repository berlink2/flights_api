# A restful api written in Typescript for accessing flight data



## Instructions for running application
1. Install dependencies with yarn or npm with current directory set to project root folder (where package.json is). Make sure typescript version is <4.0.0 and > 3.8.0
> yarn

or

> npm install

2. Create a .env file for environment variables for your mongodb uri and test mongodb uri

example .env:

<img width="526" alt="Screenshot 2020-08-23 at 21 31 05" src="https://user-images.githubusercontent.com/46464571/90980885-2d818f80-e588-11ea-98bb-43f8d0ade195.png">

3. Make sure you have mongodb running locally on your computer. You can find instructions for installing mongodb at [https://docs.mongodb.com/manual/installation/](url)

4. To start the server, in the root folder execute in the terminal

> yarn dev

or

> npm run dev

5. In order to run the tests, in the root folder execute in the terminal

> yarn test

or

> npm run test

## Answers to Extra questions

1. A high-level integration design explanation on how you would see your solution’s architecture
being implemented in a production environment (a few sentences or single diagram)

In order to implement this api into a production environment, numerous adjustments need to be made with respect to security, robustness, and useful funcitonality. For security  the api should implement authentication for accessing the api. This can be done by requiring api requests to have a token or api key so that the only one who can access the api are those with permission. Further, rate limiting should be implemented in the api to prevent the api from crumbling if requested too often. This can be done in the server or via a reverse proxy/load balancer such as nginx, the latter would be more ideal as it does not involve tampering with the api directly. Furthermore, more endpoints should be implemented to the api so that the flights database can be utilized more such as looking for flights that departed or arrived at certain dates or locations. The api could also serve to hold more relevant data such as flight cost, price per ticket, or how many of the seats of the flight were occupied, and so on. Lastly, the api should be implemented as a part of a serverless framework so that we can scale required insfrastructure for the api according to needs and how often the api is utilized.

