import React from 'react'
import Navbar from './Compoents/Navbar/Navbar'
import Hero from './Compoents/Hero/Hero'
import Programs from './Compoents/Programs/Programs'
import Title from './Compoents/Title/Title'
import About from './Compoents/About/About'

import Contact from './Compoents/Contact/Contact'
import Footer from './Compoents/Footer/Footer'


const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
    <Title subTitle="Expand and grow your business." line='_____'title = "We create, develop, and maintain websites and apps for clients globally."
    title2="We help your business shine."/>
      <Programs/>
      <About/>
      {/* <Title subTitle='Gallery' title = 'Chimniwale Photo'/> */}
      {/* <Campus/> */}
      <Title subTitle='Contact Us ' title = 'GEt in Touch'/>
      <Contact/>
      <Footer/>
    </div> 
    </div>
  )
}

export default App