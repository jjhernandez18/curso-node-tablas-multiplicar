const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Indica la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Indica si debe mostrar en consola el resultado'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Indica hasta donde debe multiplicar'
    })
    .check((argv, options) => {

        if( isNaN( argv.b )) {
            throw 'La base tiene que ser un número!';
        }
        if( isNaN( argv.h )) {
            throw 'El valor de hasta debe ser un número!';
        }

        return true;
    })
    .argv;

module.exports = argv;