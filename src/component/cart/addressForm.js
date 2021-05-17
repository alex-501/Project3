import React, { Component } from 'react'

class addressForm extends Component {
    render() {
        return (
            <div className="w-size13 p-t-30 respon5">
             <h5 className="m-text20 p-b-24">
                Delivery Details
             </h5>
              <form id="contact" action="" method="post">
              
                <div className="flex-w flex-sb-m p-b-12">
                    <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                        <label >First Name:</label>
                    </div>
                    <div className="size11 bo4 m-r-10">
                        <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="Fname" />
                    </div>                    
                </div>
                <div className="flex-w flex-sb-m p-b-12">
                    <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                        <label >Last Name:</label>
                    </div>
                    <div className="size11 bo4 m-r-10">
                        <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="Fname" />
                    </div>                    
                </div>
                <div className="flex-w flex-sb-m p-b-12">
                    <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                        <label >Phone Num:</label>
                    </div>
                    <div className="size11 bo4 m-r-10">
                        <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="Fname" />
                    </div>                    
                </div>
                <div className="flex-w flex-sb-m p-b-12">
                    <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                        <label >Email-Id:</label>
                    </div>
                    <div className="size11 bo4 m-r-10">
                        <input className="sizefull s-text7 p-l-22 p-r-22" type="text" name="Fname" />
                    </div>                    
                </div>
               
                <div className="flex-w flex-sb-m p-b-12">
                    <div className="size12 trans-0-4 m-t-10 m-b-10 m-r-10">
                        <label >Address:</label>
                    </div>
                    <div className="size11 bo4 m-r-10">
                        <textarea className="sizefull s-text7 p-l-22 p-r-22" rows="3" />
                    </div>                    
                </div>
              </form>
            </div>
        )
    }
}

export default addressForm;