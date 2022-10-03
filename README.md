<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.


## Stack

* [@nestjs 9.0.0](https://github.com/nestjs/nest)
* [Prisma 4.4.0](https://www.prisma.io/) - [from Nest website](https://docs.nestjs.com/recipes/prisma)
   
   Prisma is an open-source ORM for Node.js and TypeScript. It is used as an alternative to writing plain SQL, or using another database access tool such as SQL query builders (like knex.js) or ORMs (like TypeORM and Sequelize). Prisma currently supports PostgreSQL, MySQL, SQL Server, SQLite, MongoDB and CockroachDB.

   While Prisma can be used with plain JavaScript, it embraces TypeScript and provides a level to type-safety that goes beyond the guarantees other ORMs in the TypeScript ecosystem. You can find an in-depth comparison of the type-safety guarantees of Prisma and TypeORM

## Routes

This controller implements the following routes:

GET
* **/books**: Fetch all books
* **/books/:id**: Fetch a single book
* **/authors**: Fetch all authors
* **/authors/:id**: Fetch a single author
* **/post/:id**: Fetch a single post by its id
* **/feed**: Fetch all published posts
* **/filter-posts/:searchString**: Filter posts by title or content

POST
* **/books**: Create a new book
  * Body:
    * **title**: String (required): The title of the book
    * **authorId**: Number: The author id
* **/authors**: Create a new author
  * Body:
    * **name**: String (required): The name of the author
* **/post**: Create a new post
  * Body:
    * **title**: String (required): The title of the post
    * **content**: String (optional): The content of the post
    * **authorEmail**: String (required): The email of the user that creates the post
* **/user/signup**: Create a new user
  * Body:
    * **email**: String (required): The email address of the user
    * **name**: String (optional): The name of the user

PATCH
* **/books/:id**: Update a book
* **/authors/:id**: Update an author

PUT
* **/publish/:id**: Publish a post by its id

DELETE
* **/books/:id**: Delete a book by its id
* **/authors/:id**: Delete a author by its id
* **/post/:id**: Delete a post by its id


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Dev

To auto generated resources

```bash
$ nest generate resource

? What name would you like to use for this resource (plural, e.g., "users")? posts
? What transport layer do you use? REST API
? Would you like to generate CRUD entry points? Yes
CREATE src/posts/posts.controller.spec.ts (566 bytes)
CREATE src/posts/posts.controller.ts (894 bytes)
CREATE src/posts/posts.module.ts (247 bytes)
CREATE src/posts/posts.service.spec.ts (453 bytes)
CREATE src/posts/posts.service.ts (609 bytes)
CREATE src/posts/dto/create-post.dto.ts (30 bytes)
CREATE src/posts/dto/update-post.dto.ts (169 bytes)
CREATE src/posts/entities/post.entity.ts (21 bytes)
UPDATE src/app.module.ts (442 bytes)
```

To update db with the new schema changes

```bash
$ npx prisma migrate dev --name <name>
```

To generate db entities into prisma node module

```bash
npx prisma generate
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
