require('colors');

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


const { b: BASE, l: listar = false, h: hasta } = argv;
console.clear();


crearArchivo( BASE, listar, hasta )
    .then( (response) => console.log(response.rainbow) )
    .catch( (err) => console.log(err) );
