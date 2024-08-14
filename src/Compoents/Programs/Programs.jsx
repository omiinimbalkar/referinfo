import React from 'react'
import './Programs.css'
import brain from '../../assets/plann.jpg'
import plan from '../../assets/planning.png'
import producto from '../../assets/launchh.png'
import productin from '../../assets/product.png'
import deve from '../../assets/devlop.png'
import fast from '../../assets/fast.png'

const Programs = () => {
  return (
    <div className='programs'>
          <div className='info'><img src={brain} alt="Stragery"/>
          <div className="caption">
            <img src={plan} alt="inner one plan" />
            <p>Strategy & planning,We ideate and help our clients to choose the best solutions for their product.</p>
          </div>
          </div>
          <div className='info'><img src={deve} alt="devlop" />
          <div className="caption">
            <img src={fast} alt="inner one devlop" />
            <p>Fast development,Our goal is to bring out new things in the market with each line of code that contributes.</p>
          </div>
          </div>
          <div className='info'><img src={producto} alt="product"/>
          <div className="caption">
            <img src={productin} alt="inner one launch" />
            <p>Product launch,The organised efforts are translated into market ready product</p>
          </div>
          </div>
          </div>
  
  )
}

export default Programs