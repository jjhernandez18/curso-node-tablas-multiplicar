const fs = require('node:fs');
require('colors');

const crearArchivo = async ( base = 5, listar, hasta ) => {
    try {
        let salida = '';
        let consola = '';

        for (let x = 1; x <= hasta; x++) {
            salida += `${ base } x ${ x } = ${ base * x }\n`;
            consola += `${ base } ${ 'x'.blue } ${ x } ${ '='.blue } ${ base * x }\n`;
        }

        if( listar ) {
            console.log('========================='.green);
            console.log(`  TABLA DEL ${base}`.blue);
            console.log('========================='.green);
            console.log(consola);
        }

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );

        return `tabla-${ base }.txt creado!`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    crearArchivo
};