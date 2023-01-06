import React from 'react'

const Button = ({text, onClickEvent}) => {
  return (
    <button onClick={onClickEvent}
    className='btn' style={{backgroundColor : 'orange'}}
    >{text}</button>
  )
}

export default Button