import React from 'react'
import Banner from '../Components/Banner'
import Request from '../Components/Request'
import Offers from '../Components/Offers'
import FunFacts from '../Components/FunFacts'
import Blog from '../Components/Blog'
import Contact from '../Components/Contact'

const HomePage = () => {
  return (
    <div> 
        <Banner/>
        <Request/>
        <Offers/>
        <FunFacts/>
        <Blog/>
        <Contact/>
    </div>
  )
}

export default HomePage