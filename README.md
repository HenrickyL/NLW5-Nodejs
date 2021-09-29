# NLW5 - Node.js


## Dependencias:

* Express
```shell
yarn add express
yarn add @types/express -D
```
* Typescript
```shell
yarn add typescript -D
yarn tsc --init
yarn ad ts-node-dev -D
```

* TypeORM
```shell
 yarn add typeorm reflect-metadata sqlite3 --save
# create ormcinfig.json
# config & create migrations
yarn typeorm migration:create -n CreateSettings
#run migrations
yarn typeorm migration:run
```
* UUID
```shell
yarn add uuid --save
yarn add @types/uuid -D
``` 