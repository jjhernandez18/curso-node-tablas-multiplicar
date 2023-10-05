## Instalación
1. Ejecutar el comando en la raiz del proyecto
```
    npm install
```

2. Ejecutar el comando para verificar que funcione correctamente
```
    npm run prueba
```

## Introducción

El objetivo de este proyecto es crear una aplicación haciendo uso de Nodejs para 
la creación de una tabla de multiplicar según la base introducida con la
bandera **--base** o **-b**, en donde si quiere mostrar el resultado en pantalla deberá
diligenciar la bandera **-l** o **--listar**. El limite de cantidad de veces que se hará
esta operación aritmetica se puede definir con la bandera **--hasta** o **-h**. 
Finalmente crear un archivo en el directorio **/salida** con el contenido de esa tabla de multiplicar.

### Options:
```
    --help     Show help                                            [boolean]
    --version  Show version number                                  [boolean]
    -b, --base     Indica la base de la tabla de multiplicar        [number] [required]
    -l, --listar   Indica si debe mostrar en consola el resultado   [boolean] [default: false]
    -h, --hasta    Indica hasta donde debe multiplicar              [number] [default: 10]
```

### Ejemplos
#### **Input**
```
    node app --base=4 --hasta=5 --listar
    ó
    node app -b 4 -h 5 -l 
```
#### **Output**
```
=========================
  TABLA DEL 4
=========================
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20

tabla-4.txt creado!
```