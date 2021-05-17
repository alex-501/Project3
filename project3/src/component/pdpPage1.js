import React, { Component, PureComponent } from 'react'
import {connect, Provider} from 'react-redux'
import { createStore, combineReducers } from 'redux';
import * as actions from './../actions'
import {
	Cart,
	Product,
	CheckoutButton,
	cartLocalization,
	cartReducer,
	setCartCurrency,
  } from 'react-shopping-cart';
//import Button from 'react-button'
import Header from './header';
import { Link } from 'react-router-dom'
import './main.css'
import './util.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';

const { getDefaultLocalization } = cartLocalization;
const iPadCaseLocalization = {
	color: 'Color',
	iPadCase: 'iPad case',
	red: 'Red',
	green: 'Green',
	yellow: 'Yellow',
	GBP: '£',
	EUR: '€',
	USD: '$',
  };
   
  const iPadPropertiesWithAdditionalCostLocalization = {
	//yellow: 'Yellow (+{cost}{localizedCurrency})',
  };

const store = createStore(
	combineReducers(
	  {
		cart: cartReducer,
	
	  }
	)
  );

class PDPPage extends Component { 

    componentWillMount(){
        this.props.productList()
    }
	state = {
		product: {
		  name: 'iPadCase',
		  id: 'ipad-case',
		  path: '/shop/ipad-case/',
		  properties: {
			color: ['red', 'green', {
			  additionalCost: {
				GBP: 1,
				EUR: 2,
				USD: 3.50,
			  },
			  value: 'yellow',
			}],
		  },
		  propertiesToShowInCart: ['color'],
		  prices: { GBP: 70, EUR: 80, USD: 90 },
		  currency: 'GBP',
		  imageSrc: '1-483x321.jpeg',
		},
		getProductLocalization:
		  getDefaultLocalization(
			'product',
			'en',
			{
			  ...iPadCaseLocalization,
			  ...iPadPropertiesWithAdditionalCostLocalization
			}
		  ),
		getCheckoutButtonLocalization:
		  getDefaultLocalization(
			'checkoutButton',
			'en',
			iPadCaseLocalization,
		  ),
		getCartLocalization:
		  getDefaultLocalization(
			'cart',
			'en',
			iPadCaseLocalization
          )
          
	  };
    
    render () {
        

		// const  chngeValue = (e)=> {
		// 	this.setState({value: e.target.value});
		// 	console.log(this.state.value);
		//  }
		 
        // let product = this.props.data;
        localStorage.setItem('state', 'off');
	
		// console.log(product);
        const cachedHits = localStorage.getItem('state');
        if (cachedHits) {
         console.log(localStorage.getItem('state'));
        }
		const {
			product,
			getCheckoutButtonLocalization,
			getProductLocalization,
			getCartLocalization,
		  } = this.state;

		  const checkoutButtonElement =
      <CheckoutButton
        getLocalization={
          getCheckoutButtonLocalization
        }
        checkoutURL="/to/my/checkout"
      />;
        return (
            product ?
            <div>
                <Header/>
             
            <Provider store={store}>
			<div className="container">
			<Product
            {...product}
            checkoutButton={checkoutButtonElement}
            getLocalization={
              getProductLocalization
            }
 
          />
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={
              getCartLocalization
            }
          />
		  </div>
		  </Provider>
            </div> : null
        )
    }

}

const mapStateToProps = (state) => {
    return {
        data : state.products.productData
    }
}

export default connect(mapStateToProps,actions)(PDPPage)