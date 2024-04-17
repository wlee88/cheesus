# Multistage Build
# Global arguments
ARG GIT_REV_ARG

## Prod-dependencies Definition: Install minimal dependencies for prod
FROM node:20-alpine as dependencies

RUN mkdir /app
WORKDIR /app

# Cache configuration files
COPY package.json yarn.lock tsconfig.json ./
COPY packages ./packages

RUN yarn global add @nestjs/cli @angular/cli
# TODO: improve this build generally - can't use --production flag because angular requires devDependencies. Need to rework a dist serve solution
RUN yarn install --frozen-lockfile

RUN yarn build:contracts


########################################################################################################################
FROM dependencies as api-dev

CMD ["yarn", "start:api:dev"]

########################################################################################################################
FROM dependencies as api

CMD ["yarn", "start:api"]


########################################################################################################################
FROM dependencies as frontend
CMD ["yarn", "start:frontend"]
