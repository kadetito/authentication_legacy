# Next.js Telo Shop
Para correr localmente, se necesita la base de datos.
```
docker-compose up -d
```

* El -d, significa __detached__



## Configurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__
* MongoDB URL Local:
```
MONGO_URL=mongodb://localhost:27017/teslodb
```

* Switch de la versión adecuada de node para el proyecto, existe un archivo .nvmrc
```
nvm use
nvm install
nvm exec
nvm run
nvm which

```

* Reconstruir los módulos de node y levantar Next
```
yarn install
yarn dev
```


## Llenar la base de datos con información de pruebas con la app levantada (use Postman)

Llamar a:
```
http://localhost:3000/api/seed

```
Se adjunta JSON con la query de Postman dentro del proyecto as "NextJS Authentication Module federated.postman_collection.json"