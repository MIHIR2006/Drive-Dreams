import React from 'react'

const Hero = (props) => {
  return (
        <>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h1>{props.title}</h1>
                        <span>Pages / {props.title}</span>
                    </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Hero