import React from 'react'
import Hero from '../Components/Hero'
import { Link } from 'react-router-dom'

const TeamPage = () => {
  return (
    <div>
        <Hero title="Team"/>
        <div className="team" style={{ margin: "0" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <h2>Our team <em>members</em></h2>
              <span>Suspendisse a ante in neque iaculis lacinia</span>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-item">
              <img src={require("../images/team-image-1-646x680.jpg")} alt=""/>
              <div className="down-content">
                <h4>William Smith</h4>
                <span>Co-Founder</span>
                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>

                <p>
                  <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-item">
              <img src={require("../images/team-image-2-646x680.jpg")} alt=""/>
              <div className="down-content">
                <h4>Mary Houston</h4>
                <span>Chief Marketing Officer</span>
                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                <p>
                  <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="team-item">
              <img src={require("../images/team-image-3-646x680.jpg")} alt=""/>
              <div className="down-content">
                <h4>John Doe</h4>
                <span>Financial Analyst</span>
                <p>In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis.</p>
                <p>
                  <Link to="#"><span><i className="fa fa-linkedin"></i></span></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default TeamPage