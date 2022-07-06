import { Component } from 'react'
import Productos from './components/Productos'

class App extends Component{
  state = {
    productos: [
      {name: 'Manzana', price: 2000, img: '/imagenes/manzana.png', w: '100px'},
      {name: 'Pera', price: 1000, img: '/imagenes/pera.jpg', w: '150px'},
      {name: 'Papaya', price: 1500, img: '/imagenes/papaya.jpg', w: '150px'},
      {name: 'Sandía', price: 3000, img: '/imagenes/sandia.jpg', w: '150px'}
    ]
  }
  render(){
    return(
      <div>
        <Productos 
          agregarCarro = {() => console.log("Agrega al carro (no hace nada)")}
          productos = {this.state.productos}
        />
      </div>
    )
  }
}

export default App;