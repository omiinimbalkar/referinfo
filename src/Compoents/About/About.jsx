import React from 'react'
import './About.css'
import plaan from '../../assets/group.png'
const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={plaan} alt="bandee" className='about-img' />
        <img src="" alt='' className='play-icon'/>
        </div>
        <div className='about-right'>
        <h2>"Your partner in software solutions."</h2>
<h3>`We're a fun team of designers, tech enthusiasts, and geeks, united by our passion for creating amazing things.`</h3>
{/* <h3> 
 ___________________________

</h3> */}
<h3> # DEVELOPMENT STATERGY</h3>

<p><h4> *We put you first.</h4>
Our business is built on trust. We care about our clients and seek to understand their needs so that we can help build a solution they can be proud of.
</p>
<p><h4> * Quality in results</h4>
We offer our clients nothing less than the best. Quality software solutions and robust products built with cutting edge technology help reap profits and build the brand.
</p>
<p><h4> *Right team at the right time</h4>
Get the best employees working on your project, with hands-on management by senior experts. We offer software outsourcing services & staff for augmentation as well.
</p>
</div>
    </div>
  )
}

export default About