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
 



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
