import React from 'react'
import Hero from '../Components/Hero'
import Contact from '../Components/Contact'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <div>
        <Hero title="Contact"/>
        <div className="contact-information">
            <div className="container">
                <div className="row">
                <div className="col-md-4">
                    <div className="contact-item">
                    <i className="fa fa-phone"></i>
                    <h4>Phone</h4>
                    <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                    <Link to="/">+1 333 4040 5566</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-item">
                    <i className="fa fa-envelope"></i>
                    <h4>Email</h4>
                    <p>Vivamus ut tellus mi. Nulla nec cursus elit, id vulputate nec cursus augue.</p>
                    <Link to="/">contact@company.com</Link>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="contact-item">
                    <i className="fa fa-map-marker"></i>
                    <h4>Location</h4>
                    <p>212 Barrington Court New York str <br/> USA</p>
                    <Link to="/">View on Google Maps</Link>
                    </div>
                </div>
                </div>
            </div>
    </div>
    <Contact/>
    </div>
  )
}

export default ContactPage