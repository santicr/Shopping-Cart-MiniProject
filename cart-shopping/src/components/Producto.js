import { Component } from "react";

class Producto extends Component {
    render() {
        const {producto} = this.props
        return(
            <div>
                <img alt = {producto.name} src = {producto.img } width = {producto.w} height = "100px"/>
            </div>
        )
    }
}

export default Producto;