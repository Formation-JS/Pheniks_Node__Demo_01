//! Import des modules
// - En CommonJS
//?  const fs = require('node:fs/promises');

// - ESM (Module)
import fs from 'node:fs/promises';


//! Exemple d'implementation d'un service
const exampleService = {

  readFile: async () => {
    // Utilisation du module "fs"
    const data = await fs.readFile('data/example.json', { encoding: 'utf-8' });
    const json = JSON.parse(data);
    return json.map(elem => ({ id: elem.id, name: elem.name }));
  }

};


//! Export du service
// - CommonJS
//?  module.exports = exampleService;

// - ESM
export default exampleService;