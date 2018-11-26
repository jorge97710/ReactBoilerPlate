const css = require('./app.scss');

//Declaramos que se importara del software instalado
import React from 'react'
import ReactDOM from 'react-dom'

//Definimos los monbres de los personajes cuyas cartas se usaran
var cartas = ['mario', 'mario', 'link', 'link', 'zelda', 'zelda', 'pikachu', 'pikachu', 'samus', 'samus', 'kirby', 'kirby', 'dk', 'dk', 'mr', 'mr'];
//Metodo para hacer que se tenga un orden random en los elemenstos
cartas = shuffle(cartas);
//Imprimimos para verificar que si se tiene bien 
console.log(cartas);

//Variables para guardar los turnos utilizados y los fallos
var turnos = 0;
var fallos = 0;


//Declaramos la clase "memoria." Esta manejara la logica del juego, teniendo dentro de ella las cartas
//Cuales se tienen elegidas y cuales ya se acertaron
class Memoria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cartas,
      elegidas: [],
      acertadas: []
    };
  }

  //Metodo para manejar que ocurre al ahcer click sobre alguna de las cartas

  ClickHandler(index) {
    //Por cada click se suma un turno
    turnos = turnos + 1;
    const { elegidas, cards, acertadas } = this.state;
    //Imprimimos para ver cuantos turnos llevamos
    console.log("TURNOS : " + turnos);
    //Imprimimos para verificar el indice de lac arta elegida
    console.log("INDEX: " + index)


    //switch para el manejo de cartas elegidas
    switch (elegidas.length) {

      // Si no se ha elegido una, se carta, es agrega la primera a la lista de cartas elegidas
      case 0:
        this.setState({ elegidas: [index] })
        break;

      //Si se tiene elegida una, se verifica si la carta es la misma.
      case 1:
        //Si es la misma, ambas se agregan a las cartas acertadas, y se deja en blanco el array de cartas elegidas
        if (cards[elegidas[0]] == cards[index]) {
          this.setState({
            acertadas: acertadas.concat([elegidas[0], index]),
            elegidas: []
          });
        }
        //Si la carta es diferente se suma un fallo a las mismas, y se voltea de regreso cada carta.
        else {
          fallos = fallos + 1;
          this.setState({ elegidas: [elegidas[0], index] });
          setTimeout(() => { this.setState({ elegidas: [] }) }, 2000);
        }
        break;
    }
  }

  //Metodo para mandar a "imprimir" la interfaz
  render() {
    const { acertadas, elegidas, cards } = this.state;
    //Se imprime cuales son las cartas que se tienen acertadas
    console.log("ACERTADAS TIENE: " + acertadas);
    //Si todas las cartas estan acertadas, se muestra una pantalla de que se gano el juego
    if (acertadas.length == 16) {
      //Div que muestra que se gano
      return (
        <div> <img src={require("./images/background.png")} height={"100%"} width={"100%"} alt={'Bacground'} />
        </div>
      );
    }
    //Si no se ha ganado se imprime la cantidad de movimientos, fallos y el board que incluye todas las cartas en su estado actual
    else {
      return (
        <div>
          <p align="center ">{'Movimientos: ' + turnos}</p>
          <p align="center ">{'Fallos: ' + fallos}</p>
          <div className="board"> {cards.map((image, index) => (<CartaPersonaje key={index} image={image} acertada={acertadas.includes(index)} elegida={elegidas.includes(index)} onSelect={() => this.ClickHandler(index)} />))}
          </div>
        </div>
      );
    }
  }
}

//Constante para definir cada carta, se indica el nombre, la imagen, y el estado de la misma
//Asi como se incluye tambie un metodo para deteccion de cuando esta carta es seleccionada
const CartaPersonaje = ({ image, elegida, acertada, onSelect }) => (<div className="card" onClick={() => { if (!acertada && !elegida) { onSelect(); } }}>
  <img style={{ visibility: (acertada || elegida) ? 'visible' : 'hidden' }} id={(acertada || elegida) ? 'visible' : 'hidden'} src={require("./images/" + image + ".jpg")} height={"100%"} width={"100%"} alt={image} />
</div>
);


//Metodo de ReactDom para poder agregar el contenido del render dentro de un div on id root en el html principal
ReactDOM.render(
  <Memoria />,
  document.getElementById('root')
)


//Funcion que toma como parametro un arreglo y que lo revuelve en un orden aleatorio
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}