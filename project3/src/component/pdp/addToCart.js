import React, { Component } from 'react'

class addToCart extends Component {
    // state({
    //     productId : [],
    //     quantity  : []
    // });

    state= {
        productId :null,
        quantity:0,
    }

    handleLangChange = () => {
                  
    }

    addToCart = () => {
        console.log("hi")
        this.setState({
            productId: this.props.product,
            quantity:this.props.quantity
        })
        // localStorage.setItem('productId', this.props.product);
        // localStorage.setItem('quantity', this.props.quantity);
        

    }
    render() {
        
        console.log(this.state)
        return (
            <div onClick={this.addToCart}>     
                Add to Cart
            </div>
        )
    }
}

export default addToCart;