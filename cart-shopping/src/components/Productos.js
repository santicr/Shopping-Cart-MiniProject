import { Component } from "react";
import Producto from './Producto'

class Productos extends Component {
    render() {
        const { productos, agregarCarro } = this.props
        return (
            <div>
                {productos.map(p =>
                <Producto
                    agregarCarro = {agregarCarro}
                    producto = {p}
                    key = {p.name}
                />)}
            </div>
        )
    }
}

export default Productos;