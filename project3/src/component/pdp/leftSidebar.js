import React, { Component } from 'react'

class leftSidebar extends Component {
    render() {
        return (
            <div className="w-size13 p-t-30 respon5">
                <div className="wrap-slick3 flex-sb flex-w">
                    <div className="wrap-slick3-dots"></div>

                    <div className="slick3">
                        <div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
                            <div className="wrap-pic-w">
                                <img src={this.props.product.images[0].src} alt="IMG-PRODUCT"/>
                            </div>
                        </div>

                        {/* <div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
                            <div className="wrap-pic-w">
                                <img src={product.images[0].src} alt="IMG-PRODUCT"/>
                            </div>
                        </div>

                        <div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
                            <div className="wrap-pic-w">
                                <img src={product.images[0].src} alt="IMG-PRODUCT"/>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default leftSidebar;