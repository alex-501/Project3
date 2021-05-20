import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {

    state= {
        quantity:0,
    }

    render () {

        const imageClick = () => {
            console.log('Click');

          } 

        console.log(this.state);
       let noOfItem = this.handleLanguage;
        return (
            <header className="header1">
                <div className="container-menu-header">
                
                <div className="topbar">
                <div className="topbar-social">
					<Link to="/" className="topbar-social-item fa fa-facebook"></Link>
					<Link to="/" className="topbar-social-item fa fa-instagram"></Link>
					<Link to="/" className="topbar-social-item fa fa-pinterest-p"></Link>
					<Link to="/" className="topbar-social-item fa fa-snapchat-ghost"></Link>
					<Link to="/" className="topbar-social-item fa fa-youtube-play"></Link>
				</div>
                <span className="topbar-child1">
					Free shipping for standard order over $100
				</span>
                <div className="topbar-child2">
					<span className="topbar-email">
						fashe@example.com
					</span>
                </div>

                </div>

                <div className="wrap_header">
				
                    <Link to="/" className="logo">
                        <img src="images/icons/logo.png" alt="IMG-LOGO" />
                    </Link>

                    <div className="wrap_menu">
					<nav className="menu">
						<ul className="main_menu">
                            <li><Link to="/" >Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/shop">Shop</Link></li>
						</ul>
					</nav>
				    </div>

                    <div className="header-icons">
                        <Link to="/"  className="header-wrapicon1 dis-block">
                            <img src="images/icons/icon-header-01.png" className="header-icon1" alt="ICON"/>
                        </Link>

                        <span className="linedivide1"></span>

                        <div className="header-wrapicon2">
                        <Link to="/CartPage">
                            <img src="images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" onClick={() => imageClick()} />
                            <span className="header-icons-noti">{noOfItem}</span>
                        </Link>
                        </div>
                    </div>


                </div>



                
            
            </div>
            </header>
        )
    }
}

export default Header