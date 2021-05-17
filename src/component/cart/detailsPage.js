import React, { Component } from 'react'
import Header from '../header'
import AddressForm from './addressForm'
import CartTotal from './cartTotal'

class Detail extends Component {
    render () {
        return (
            <div>
            <Header />
            <div className="container bgwhite p-t-35 p-b-80">
            <div className="flex-w flex-sb">
            <AddressForm/>
            <CartTotal/>
            </div>
            </div>
          </div>
        )
    }
}
export default Detail