# Intellimenu Documentation WIP

## Description

IntelliMenu allows restaurant businesses to provide dynamic, smart menu solutions for their respective clients by using a cutting edge filtering system that abstracts menu items away from their clients based on dietary preferences and allergies.

## Core Libraries/Frameworks

- Nextjs (Fullstack React/Node framework)
- TypeScript (Typed Javascript)
- ChakraUI (UI Component Library)
- Prisma (Database ORM)

## Setup for Development

1. Clone this repository
2. Install npm packages using the terminal command $npm install
3. Connect your prisma ORM to your machine locally or a cloud platform (I am currently using Heroku)
4. It's recommended if you are using Prisma on VS Code to use their native plug in for syntax highlighting, formatting and autocomplete

### Heroku setup (Free Tier)

- Create a new app on heroku
- Once your app has been created youll go to the resources tab and find a search bar for add-ons, just type search for Heroku Postgres
- Add two free postgres databases
- We need two databases because heroku's free postgres database is on the free tier the user doest not have permission to create another database on that postgres instance. Prisma needs the ability to create a shadow database on the fly when it creates a migration. Because Heroku doesnt give us permission to do this based off our url, Prisma fails. The work around is two create two free databases, one to store data and another for the shadow databases used during migration.
- For each one of those databases you need to add them as environment variables in your .env file
- These variable names should reflect what you see in this data source db in your schema.prisma file:

```json
datasource db {
  provider          = "postgresql"
  url               = env("DATABASE_URL")
  shadowDatabaseUrl = env("SHADOW_DATABASE_URL")
}
```

- Your .env should now contain two environment variables DATABASE_URL + SHADOW_DATABASE_URL
- For each of your databases you should be able to find the .env information you need for these variables by clicking on your databases, going to settings, then view credentials...and copy the URI. Be sure to do this for each database and use one URL for your url, and the other one for your shadow database.
