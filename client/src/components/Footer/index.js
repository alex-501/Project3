import React from "react";
import "./style.css";


function Footer() {
    return (
        <footer className="footer fixed-bottom">
            <div className="container text-center">
                <div className="row">
                    <span className="navbar-brand">
                        {/* <img src="../img/project3.png" style={{ width: "30px", height: "30px" }} className="d-inline-block " alt="Chore Hack" /> */}
                        </span>  <p style={{ margin: '10px', color: "GrayText" }} className="subtitle is-6"> 2021, All Rights Reserved </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
