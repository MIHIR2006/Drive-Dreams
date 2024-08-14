import React from 'react'
import { Link } from 'react-router-dom'

const Request = () => {
  return (
    <div className="request-form">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4>Request a call back right now ?</h4>
            <span>Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.</span>
          </div>
          <div className="col-md-4">
            <Link to="/" className="border-button">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Request