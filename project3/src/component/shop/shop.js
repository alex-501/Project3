import React, { Component } from 'react'
import './shop.css';

import Header from '../header'
import LeftPanel from '../left-panel'
import SubBanner from '../subpage-banner'
import ProductList from './product_list'
import {connect} from 'react-redux'
import * as actions from './../../actions'


class Shop extends Component {

    componentWillMount(){
        this.props.productList()
    }

    renderPost =(product) => (
        product ? 
        product.map(item => ( 
            <ProductList data={item} key={item.id}/>
        )) : null
    )
    render () {
        return (
            <div>  
                <Header />
                <SubBanner/>
                
                <div className="container margin-top35">
                    <div className="row">
                    <LeftPanel />

                    <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                        <div className="row">
                     
                          {this.renderPost(this.props.data)}

                        </div>    
                    </div>    

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data : state.products.productlistdata
    }
}

export default connect(mapStateToProps,actions)(Shop)
