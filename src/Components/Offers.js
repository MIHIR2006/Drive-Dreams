import React from 'react'
import { Link } from 'react-router-dom'

const Offers = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our <em>Offers</em></h2>
              <span>Aliquam id urna imperdiet libero mollis hendrerit</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/offer-1-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Lorem ipsum dolor sit amet</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim. Nunc ornare leo tortor.</p>
                <Link to="/" className="filled-button">Book Now</Link>
              </div>
            </div>
            
            <br/>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/offer-2-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Odio libero vel autem atque consequuntur</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim.</p>
                <Link to="offers.html" className="filled-button">Book Now</Link>
              </div>
            </div>
            <br/>
          </div>
          <div className="col-md-4">
            <div className="service-item">
              <img src={require("../images/offer-3-720x480.jpg")} alt=""/>
              <div className="down-content">
                <h4>Libero eveniet sint nemo beatae</h4>
                <div style={{ marginBottom:"10px" }}>
                  <span>from <sup>$</sup>120 per weekend</span>
                </div>
                <p>Sed tincidunt dictum lobortis. Aenean tempus diam vel augue luctus dignissim.</p>
                <Link to="offers.html" className="filled-button">Book Now</Link>
              </div>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers