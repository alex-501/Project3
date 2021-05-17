import React,{Component} from 'react'

class CartTotal extends Component {
    render() {
        return (
            <div className="w-size14 p-t-30 respon5">
                    <h5 className="m-text20 p-b-24">
                           Order Details
                        </h5>

                        <div className="flex-w flex-sb-m p-b-12">
                            <span className="s-text18 w-size19 w-full-sm">
                                Subtotal: 
                            </span>
                        </div>
                  
                        <div className="flex-w flex-sb bo10 p-t-15 p-b-20">
                            <span className="s-text18 w-size19 w-full-sm">
                                Sub Tax:
                            </span>                                                                   
                        </div>

                        
                        <div className="flex-w flex-sb-m p-t-26 p-b-30">
                            <span className="m-text22 w-size19 w-full-sm">
                               Grand  Total:
                            </span>

                         
                        </div>

                        <div className="size15 trans-0-4">
                        {/* <Link to="/DetailsPage" > */}
                            <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4">
                                Proceed to Payment
                            </button>
                            {/* </Link> */}
                        </div>
                  
            </div>

        )
    }
}

export default CartTotal