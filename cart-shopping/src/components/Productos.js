import { Component } from "react";
import Producto from './Producto'

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
}

class Productos extends Component {
    render() {
        const { productos, agregarCarro } = this.props
        return (
            <div style = {styles.productos}>
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