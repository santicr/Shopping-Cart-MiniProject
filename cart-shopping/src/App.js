import './App.css';
import { Component } from 'react'

class App extends Component{
  state = {
    productos: [
      {name: 'Manzana', price: 2000, img: '/imagenes/manzana.png'},
      {name: 'Pera', price: 1000, img: '/imagenes/pera.jpg'},
      {name: 'Papaya', price: 1500, img: '/imagenes/papaya.jpeg'},
      {name: 'Sandía', price: 3000, img: '/imagenes/sandia.jpeg'}
    ]
  }
  render(){
    return(
      <div>
        <p>Hola mundo!</p>
      </div>
    )
  }
}

export default App;