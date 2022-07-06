import { Component } from "react"

const styles = {
    bubbleAlert: {
        backgroundColor : '#E9725A',
        borderRadius: '15px',
        color: 'white',
        padding: '2px 10px',
        fontSize: '0.9rem',
        width: '20px',
    }
}

class BubbleAlert extends Component {
    getNum (n) {
        if(!n) {
            return ' ';
        }
        return n > 9 ? '9+': n
    }
    render() {
        const {value} = this.props
        return(
            <span style = {styles.bubbleAlert}>
                {this.getNum(value)}
            </span>
        )
    }
}

export default BubbleAlert;