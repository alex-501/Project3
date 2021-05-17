import React, { Component } from "react";

class rightSidebar extends Component {
  render() {
    return (
      <div className="w-size14 p-t-30 respon5">
        <span className="m-text17" />

        <p className="s-text8 p-t-10">
          Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.
          Mauris consequat ornare feugiat.
        </p>

        <div className="p-t-33 p-b-60">
          <div className="flex-m flex-w p-b-10">
            <div className="s-text15 w-size15 t-center">Size</div>

            <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
              <select className="selection-2" name="size">
                <option>Choose an option</option>
                <option>Size S</option>
                <option>Size M</option>
                <option>Size L</option>
                <option>Size XL</option>
              </select>
            </div>
          </div>

          <div className="flex-m flex-w">
            <div className="s-text15 w-size15 t-center">Color</div>

            <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
              <select className="selection-2" name="color">
                <option>Choose an option</option>
                <option>Gray</option>
                <option>Red</option>
                <option>Black</option>
                <option>Blue</option>
              </select>
            </div>
          </div>

          <div className="flex-r-m flex-w p-t-10">
            <div className="w-size16 flex-m flex-w">
              {/* <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                                <button  className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" >
                                    <i className="fs-12 fa fa-minus" aria-hidden="true"></i>
                                </button >

                                <input className="size8 m-text18 t-center num-product" type="number" name="num-product" value="1" /> 

                                <button  className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" >
                                    <i className="fs-12 fa fa-plus" aria-hidden="true"></i>
                                </button >
                            </div> */}

              <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                <button
                  onClick={this.props.buttonClick}
                  className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-b-45">
          <span className="s-text8 m-r-35">SKU: {this.props.product.sku}</span>
          <span className="s-text8">Categories: Mug, Design</span>
        </div>

        <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
          <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            Description
            <i
              className="down-mark fs-12 color1 fa fa-minus dis-none"
              aria-hidden="true"
            />
            <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true" />
          </h5>

          <div className="dropdown-content dis-none p-t-15 p-b-23">
            <p className="s-text8">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
              ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a
              dignissim mauris placerat
            </p>
          </div>
        </div>

        <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
          <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            Additional information
            <i
              className="down-mark fs-12 color1 fa fa-minus dis-none"
              aria-hidden="true"
            />
            <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true" />
          </h5>

          <div className="dropdown-content dis-none p-t-15 p-b-23">
            <p className="s-text8">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
              ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a
              dignissim mauris placerat
            </p>
          </div>
        </div>

        <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
          <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            Reviews (0)
            <i
              className="down-mark fs-12 color1 fa fa-minus dis-none"
              aria-hidden="true"
            />
            <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true" />
          </h5>

          <div className="dropdown-content dis-none p-t-15 p-b-23">
            <p className="s-text8">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at
              ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a
              dignissim mauris placerat
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default rightSidebar;