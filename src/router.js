import React from 'react';
import { Switch, Route } from 'react-router-dom'

//Component
import Home from './component/home/home'
import About from './component/about'
import Shop from './component/shop/shop'
import PDPPage from './component/pdp/pdpPage'
import CartPage from './component/cart/cartViewPage'
import DetailsPage from './component/cart/detailsPage'

const Router = () => {
    return (
        <div>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/shop/" exact component={Shop} />
                <Route path="/" exact component={Home} />
                <Route path="/Product/:id" exact component={PDPPage}/>
                <Route path = "/CartPage" exact component={CartPage}/>
                <Route path = "/DetailsPage" exact component={DetailsPage}/>
             </Switch>
        </div>
    )
}

export default Router