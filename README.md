# example-mongo-express-crud-api
An example CRUD (Create, Read, Update, Delete) API built using MongoDB &amp; ExpressJS

[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=ncloc)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=bugs)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=reliability_rating)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=security_rating)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=sqale_index)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=dewhurstwill_example-mongo-express-crud-api&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=dewhurstwill_example-mongo-express-crud-api)

Includes API Server utilities:

* [morgan](https://www.npmjs.com/package/morgan)
  * HTTP request logger middleware for node.js
* [helmet](https://www.npmjs.com/package/helmet)
  * Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [@hapi/joi](https://www.npmjs.com/package/@hapi/joi)
  * Joi is a powerful schema description language and data validator for JavaScript
* [monk](https://www.npmjs.com/package/monk)
  * Monk is middleware used for consuming MongoDB within Node.JS


Development utilities:

* [dotenv](https://www.npmjs.com/package/dotenv)
  * Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
* [nodemon](https://www.npmjs.com/package/nodemon)
  * nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
* [eslint](https://www.npmjs.com/package/eslint)
  * ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
* [mocha](https://www.npmjs.com/package/mocha)
  * ☕️ Simple, flexible, fun JavaScript test framework for Node.js & The Browser ☕️
* [supertest](https://www.npmjs.com/package/supertest)
  * HTTP assertions made easy via superagent.

## Setup

```
npm install
```

## Lint

```
npm run lint
```

## Development

```
npm run dev
```

Based-on create-express-api (https://www.npmjs.com/package/create-express-api) by CJ R. <cj@null.computer> (https://w3cj.now.sh)
