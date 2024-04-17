# 🧀 Cheesus

Welcome! Cheesus is simple CRUD app for showing available cheeses that we have in our physical store. Who knows - maybe we'll accept and extend to payments.


## 📋 Still Todo before we can consider production ready
- Authentication
- Set up TypeORM migrations for team friendliness/safety 
- Metrics capture (Cloudwatch logs could do for now if we deploy via AWS)
- Actual deployment and code (terraform/pulumi/CloudFormation) - we have a healthcheck we can use to check. 
- CDN setup/Load Balancing/Route53 domain setup

## 📁 Project Structure

## 📦 Packages
- [@cheesus/api](packages/api/README.md) - The API for the Cheesus project. It is built using the NestJS framework. Simply reads the types from contracts and services appropriately.
- [@cheesus/frontend](packages/frontend/README.md) - The frontend for the Cheesus project. It is built using Angular.
- `@cheesus/contracts` - The contracts for the Cheesus project. It is built using TypeScript and Zod for validation. Contains all the shared DTOs and validation for the API and Frontend.

## 🤝 Cross Repo communication
- `@cheesus/contracts` - contains all the shared DTOs and validation for the API and Frontend
- ts-rest/core is used as the client library in the frontend and gives us a type safe client between API and client.
  - It allows us to make direct changes to the api - and gain immediate typesafety/feedback in the frontend.

## 🏃 How to run the project
- Clone the project (TODO: thegithuburl when we get this)

### Locally
- Ensure you have installed:
  - [nvm](https://github.com/nvm-sh/nvm) to ensure you have the correct node version
  - [yarn](https://classic.yarnpkg.com/en/docs/install) to manage the packages
  - [Docker](https://docs.docker.com/get-docker/) to have a DB running.

- Start the DB
- Start the API
  - Available at http://localhost:3000
- Start the Frontend
  - Available at http://localhost:4200

### docker-compose
- Ensure you have [Docker](https://docs.docker.com/get-docker/) installed.
- Run `docker-compose -f docker-compose.yml up`
- API available at http://localhost:3000
- Frontend available at http://localhost:4200


## ⛙ CI/CD
- Github actions is used for CI (not yet CD)
- We have a workflow that runs on every push for the following steps for api, frontend and contracts
  - build
  - typecheck
  - test

## Port Reservations

### Production
- DB: 5432
- API: 3000
- Frontend: 4200

### Test
- DB: 5433

# Troubleshooting

## It's not detecting @cheesus/contract import changes
- Ensure the repo is built with `yarn build:contracts` 

## No Database available when running api locally.
- Ensure the DB is running and the connection string is correct in the `.env` file

## 👋 Questions?
- Leave me a Github issue and i'll answer when i can.