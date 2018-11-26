# ReactBoilerPlate

Un Ambiente totalmente configurado para poder crear y correr una aplicacion de REACT desde 0. El proyecto actual contiene una aplicacion de react que puede ser utilizada como ejemplo para la creacion de nuevas aplicaciones. Se tienen comentarios detallados en cada una de las lineas del codigo. Tanto en el "app.js" que es la base de javascript que tenemos en el proyecto. como en el "test.html" que es donde se tiene la base de html para el proyecto.

Dentro de este Repositorio se incluyen estos directorios y sus respectivos archivos:
* ReactBoilerPlate
  * dist (este directorio contiene los archivos generados al correr el servidor en modo de produccion)
    * app.bundle.js (la union de todos los archivos de javascript utilizados en el src (esto dbee configurarse)
    * index.html (Documento html que se utiliza dentro del ambiente cuando este se ejecuta)
  * src  (este directorio contiene los archivos que son base para la generacion del proyecto)
    * images (este directorio contiene las imagenes utilizadas dentro del proyecto)
    * app.js (Javascript Base para el proyecto, dentro de este se incluye toda la logica de la aplicacion que se estara mostrando, asi como la creacion de los diferentes componentes
    * app.scss (Sass)(Dentro de este archivo se incluyen todos los estilos utilizados, tanto para las cartas como para las imagenes y textos.)
    * test.html (Plantilla base para el HTML del proyecto. este no incluye ningun contenido especifico, solo una estructura basica)
    
  * .babelrc (Archivo que indica las herramientas a utilizar para babel, el ambiente y loader)
  * package-lock.json
  * package.json (Este archivo incluye informacion del proyecto. Datos,versiones, descripcion. Incluye los comandos para poner a correr webpack. Informacion del autor. Informacion del Repositorio. Y por ultimo una lista de las dependencias utilizadas como desarrollador)
  * README.md (Documento con especificaciones del proyecto "este documento")
  * webpack.config.js (Archivo de configuracion de webpack. Dentro de este se detalla los archivos de entrada y salida para la generacion del javascipt que se agrega automaticamente al html. Incluye los modulos y reglas para utilizar los diferentes loaders que se tiene instalados. Se especifica informacion del web server para el developer. Por ultimo se especifica informacion de los plugins que se tiene instalados) Los diferentes plugins y loaders se listan a continuacion
      * sass loader, este loader se utiliza para hacer la compilacion de sass a css
      * css loader, este loader se utiliza para hacer una traduccion de css a JS. para que el mismo sea utilizado en la aplicacion
      * style loader, este loader se utiliza para poder generar estilos de css en base a string de JS. los cuales se crean con el loader anterior
      * babel loader, este loader se utiliza para hacer la transpliacion de archivos de JS o JSX
      * file loader, este loader se utiliza para poder cargar en la aplicacion diferentes archivos. En este caso se especifica que funcione con imagenes en formato gif,png,jpg,jpeg,svg
      * HTML webpack plugin, este plugin se utiliza para que tome de base el documento "test.html" y genere la version final para la aplicacion
 
## Que incluye
* (10 puntos) Si entregan su proyecto en github
* (5 puntos) Por implementar React
* (5 puntos) Por implementar Babel
* (5 puntos) Por implementar Webpack
* (5 puntos) Por implementar Sass
* (5 puntos) Por implementar loaders para imágenes
* (30 puntos) Por explicar a través de un README bien formateado 


## Como empezar

Estas instrucciones te permitiran conseguir una copia del proyecto y poder ejecutarlo en tu computadora. Esto para poder desarrollar y hacer tests. Ver las anotaciones de "como iniciarlo" para poder utilziar el proyecto.

### Prerequisitos

Se necesitara instalar NojeJS. Link de descarga: https://nodejs.org/es/


Para desarrollo y test, se necesitara un editor de texto. Te recomendamos VisualStudio code. Link: https://code.visualstudio.com/

Si se desea descargar el proyecto por medio de la consola, se debe instalar git.
Instrucciones para instalacion en ubuntu:
```
sudo apt-get update
sudo apt-get install git
```
El resto de software necesario se instalara en futuros pasos. Si se desea instalar ahora, se necesita tener npm activo e instalar los loaders indicados arriba

### Configuracion y descarga

Una guia de pasos para poder utilizar el proyecto.

Iniciamos por clonar el repositorio a la maquina local

```
git clone https://github.com/jorge97710/ReactBoilerPlate.git
```

Luego hay que acceder al folder del proyecto

```
cd ReactBoilerPlate
```

A continuacion instalamos el software necesario para la ejecucion del proyecto. Este es el que esta listado anteriormente dentro de loaders y dependencias (Se necesita tener instalado nodeJs/npm)

```
npm install
```

## Iniciando 

A continuacion indicamos los diferentes comandos para que se pueda utilizar la plataforma. 

Si se desea correr la plataforma en modo development (cargando la informacion sin que este necesariamente generada dentro de "dist")

```
npm run dev
```

Si se desea poner todos los archivos para ambiente de produccion. Esto significaria tener un codigo mas limpio, por ejemplo minimizando los archivos

```
npm run prod
```


## Desarrollado con

* [VisualStudio Code](https://code.visualstudio.com/) - Editor de texto
* [Node JS](https://nodejs.org/es/) - Entorno de tiempo de ejecucion para servidor
* [npm](https://www.npmjs.com/) - Manejo de paquetes de Node
* [React](https://reactjs.org/) - Libreria de Javascript para manejo y desarrollo de interfaz y logica

## Manejo de versiones

El manejo de versiones sera realizaso en esta plataforma. (GitHub)

## Autores

* **Jorge Azmitia** - *Initial work* - [jorge97710](https://github.com/jorge97710)

## Licencia

Este proyecto se encuentra bajo la licencia MIT - ver archivo [LICENSE.md](LICENSE.md) para mas detalles

