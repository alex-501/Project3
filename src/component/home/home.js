import React, { Component } from 'react'
import Banner from './banner'
import {connect} from 'react-redux'
import * as actions from './../../actions'
import { Link } from 'react-router-dom';
import Header from './../header'

class Home extends Component {

    componentWillMount(){
        this.props.postList()
    }

     

     renderPost =(post)=> (
         post ?
         post.map(item => (          
           //  <div key={item.id} dangerouslySetInnerHTML={{__html:item.content.rendered}}> </div>
           <Link key={item.id} to={`/Product/${item.id}`}>
                <div>  {item.title.rendered} </div>
           </Link>
         )) : null
    )
    render () {
        console.log(this.props.data)
      
        return (
            <div>
                <Header />
                <Banner/>
                <br/>
               {this.renderPost(this.props.data)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        data : state.artists.postData
    }
}

export default connect(mapStateToProps,actions)(Home)