import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
         
          <div className="item item-1">
            <div className="img-fill">
                <div className="text-content">
                  <h6>DriveDreams</h6>
                  <h4>Welcome to DriveDreams</h4>
                  <p>Your Ultimate Car Buying and Selling Destination.</p>
                  <Link to="contact" className="filled-button">contact us</Link>
                </div>
            </div>
          </div>
         
          
          
        </div>
    </div>
  )
}

export default Banner