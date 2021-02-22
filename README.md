# NodeJS + ExpressJS starter in TypeScript

## What it contains
- NodeJS + ExpressJS support with TypeScript
- Testing support using Jest, and [SuperTest](https://github.com/visionmedia/supertest#readme) (for APIs)
- Formatting support using Prettier
- ESLint support
- Ability to collect code coverage via Jest

## APIs
### Local
```shell
# index page
curl -v https://localhost:3000/

# newest customers
http://localhost:3000/customers/newest

# recent transactions
http://localhost:3000/transactions/recent

# transactions count
http://localhost:3000/transactions/count  
```


## Commands
```shell
# to start development
npm start

# to run tests
npm test 

# to run tests in watch mode
npm run test:watch

# to create production build
npm run build

# to run production build
npm run prod
```