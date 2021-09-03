import React from 'react';
import './screentwo.css';
import img1 from './images/picturetop.jpg';
import img2 from './images/picturebottom.jpg';
export default function Mainscreen() {
    return (
        <div className="container">
            <div className="inner-container">
                <div className="top">
                    <div className="left-Items">
                      <h1>Lorem ipsum</h1>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, set diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad</p>
                      <input type="submit" name="submit_button" value="  " />
                    </div>
                    <img src={img1} width="60%" height="100%" />
                    

                </div>
                <div className="bottom">
                <img src={img2} width="60%" height="100%" />

                </div>


            </div>
        </div>
    )
}
