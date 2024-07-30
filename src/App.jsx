import React from 'react'
import Navbar from './Compoents/Navbar/Navbar'
import Hero from './Compoents/Hero/Hero'
import Programs from './Compoents/Programs/Programs'
import Title from './Compoents/Title/Title'
import About from './Compoents/About/About'
import Campus from './Compoents/Campus/Campus'
import Contact from './Compoents/Contact/Contact'
import Footer from './Compoents/Footer/Footer'


const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div className='container'>
    <Title subTitle='Our PROGRAM' title = 'What we Offer'/>
      <Programs/>
      <About/>
      <Title subTitle='Gallery' title = 'Chimniwale Photo'/>
      <Campus/>
      <Title subTitle='Contact Us ' title = 'GEt in Touch'/>
      <Contact/>
      <Footer/>
    </div> 
    </div>
  )
}

export default App