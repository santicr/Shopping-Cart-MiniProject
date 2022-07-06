import { Component } from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component{
  state = {
    productos: [
      {name: 'Manzana', price: 2000, img: '/imagenes/manzana.png'},
      {name: 'Pera', price: 1000, img: '/imagenes/pera.jpg'},
      {name: 'Papaya', price: 1500, img: '/imagenes/papaya.jpg'},
      {name: 'Sandía', price: 3000, img: '/imagenes/sandia.jpg'}
    ],
    carro: [],
    esCarroVisible: false,
  }

  mostrarCarro = () => {
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  agregarCarro = (producto) => {
    const { carro } = this.state

    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name ? ({
        ...x,
        cantidad: x.cantidad + 1
      })
      : x)
      return this.setState({ carro : newCarro})
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  render(){
    const {esCarroVisible} = this.state
    return(
      <div>
        <Navbar
          carro = {this.state.carro}
          esCarroVisible = {esCarroVisible}
          mostrarCarro = {this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos 
            agregarCarro = {this.agregarCarro}
            productos = {this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;