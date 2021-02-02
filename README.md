# NodeJS-ExpressJS-PostgreSQL-Sequelize-Ubuntu-RestAPI-ORM


## Requirements
  - Ubuntu20
  - NodeJS
  - ExpressJS
  - Sequelize
  - Virtualenv
  
## Ubuntu Update and Upgrade
```
sudo apt update
sudp apt upgrade
```

## Creating Virtual Environment
Note Change <env_name> to your desired environment name
```
virtualenv -p python3 <env_name>
cd <env_name>

ACTIVATE ENVIRONMENT
source bin/activate
```

## Clone repo
Note Change repo name <desired_foldername>
```
git clone https://github.com/ohmcodes/NodeJS-ExpressJS-PostgreSQL-Sequelize-Ubuntu-RestAPI-ORM.git <desired_foldername>
```

## Install NPM
```
sudo apt install npm

npm init
```

## Install ExpressJS,Node-Postgres, Nodemon, dotenv, Sequelize
```
npm i express pg pg-hstore dotenv sequelize --save
npm i nodemon -D --save
npm i sequelize-cli -D --save


Add in package.json scripts
"dev": "nodemon -r dotenv/config app.js",
"db:create": "sequelize-cli db:create",
"db:migrate": "sequelize-cli db:migrate",
"db:g:migration": "sequelize-cli migration:generate --name",
"db:g:seed": "sequelize-cli seed:generate --name",
"db:seeds": "sequelize-cli db:seed:all"
```


## Sample .env
```
PORT=3000
DB_HOST='127.0.0.1'
DB_USERNAME='postgres'
DB_PASSWORD='postgres'
```

## Run Server
```
npm run dev
```

## Sequelize Init
```
npx sequelize-cli init
npx sequelize-cli db:create
```

## Create Model
```
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```

## Migrate Database
```
npx sequelize-cli db:migrate
```

## Running seed, Insert Data
```
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
    "Users",
      [
        {
          firstName: "Bob",
          lastName: "Marley",
          email: "bobmarley@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Users", null, {});
  }
};


INIT INSERT
npx sequelize-cli db:seed:all
```

## Updating Model
```
INIT UPDATE MODEL
npx sequelize-cli migration:generate --name addPassword

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      "Users",
      "password",
      {
        type: Sequelize.DataTypes.STRING
      }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "password");
  }
};

RUN MIGRATE
npx sequelize-cli db:migrate
```


## Source
```
https://blog.echobind.com/a-guide-for-restful-apis-with-node-sequelize-postgres-63636d026d5d
```

















