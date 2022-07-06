import { Component } from "react";
import Button from "./Button"

const style = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgba(0, 0, 0, 0.1)',
        width: '20%',
        padding: '10px 15px',
        borderRadius: '6px',
    },
    img: {
        width: "100%",
    }
}

class Producto extends Component {
    render() {
        const {producto, agregarCarro} = this.props
        return(
            <div style = {style.producto}>
                <img style = {style.img} alt = {producto.name} src = {producto.img}/>
                <h3> {producto.name} </h3>
                <p> {producto.price} </p>
                <Button onClick = {() => agregarCarro(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto;