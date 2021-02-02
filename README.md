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
npx sequelize-cli db:seed:all
```

## Updating Model
```
npx sequelize-cli migration:generate --name addPassword
```


















