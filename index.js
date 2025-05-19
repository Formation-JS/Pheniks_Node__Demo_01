import exampleService from './services/example.service.js';


console.log('Hello Phéniks !');

//! Mise en place pour le dev → Relancement automatique
//  - Package "nodemon" (Configurable - https://github.com/remy/nodemon?tab=readme-ov-file#config-files)
//  - Natif → Ajout à la command : --watch

//! Utilisation d'un fichier .env
//  - Package "dotenv"
//  - Package "dotenv-flow" (.env, .env.dev, .env.local, ...)
//  - Natif → Ajout à la command : --env-file=.env 

const NODE_ENV = process.env.NODE_ENV;
console.log(`Env : ${NODE_ENV}`);

//! Utilisation d'un module
exampleService.readFile().then(line => console.log(line));