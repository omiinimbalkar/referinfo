import React from 'react'
import './Title.css'
const Title = ({subTitle ,line, title,title2}) => {
  return (
    <div className='titles'>
        <h3>{subTitle}</h3>
        <h2>{line}</h2>
        <p>{title}</p>
        <p>{title2}</p>

    </div>
  )
}

export default Title