import React, { Component } from "react";
import Header from "./../header";
import { connect } from "react-redux";
import * as actions from "./../../actions";
import LeftSidebar from "./leftSidebar";
import RightSidebar from "./rightSidebar";
import "./../main.css";
import "./../util.css";

class PDPPage extends Component {
  state = {
    productData: {
      productId: null,
      quantity: 0
    }
  };
  productVariable = [];
  updateCartQuantity() {
    //need to create the checking
    // 1. Product id && quantity is not null || empty && quantity must be integer && more than 0
    // 2. Product Id is already exists (if exists then we increment the quantity by the number of quantity)
    // 3. Product Id is not exists simply update the quantity
    this.setState({
      productData: {
        productId: this.props.product.id,
        quantity: 1
      }
    });
  }

  componentWillMount() {
    this.props.productDetails(this.props.match.params.id);
  }

  render() {
    localStorage.setItem("data", JSON.stringify(this.state.productData));
    let cartItem = localStorage.getItem(
      "data",
      JSON.stringify(this.state.productData)
    );
    this.productVariable.push(this.state.productData);
   // console.log(this.productVariable);
    let product = this.props.product;
    return product ? (
      <div>
        {console.log(cartItem)}
        <Header cartItemCount={this.state.productData.quantity} />
        <div className="container bgwhite p-t-35 p-b-80">
          <div className="flex-w flex-sb">
            <LeftSidebar product={this.props.product} />
            <RightSidebar
              buttonClick={this.updateCartQuantity.bind(this)}
              product={this.props.product}
            />
          </div>
        </div>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.productData
  };
};
export default connect(mapStateToProps, actions)(PDPPage);