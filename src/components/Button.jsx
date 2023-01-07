import React, {Component} from 'react'
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer'

const Button = ({text, onClickEvent}) => {
  
  return (
    <button onClick={onClickEvent}
    className='btn' style={{backgroundColor : 'orange'}}
    >{text}</button>
  )
}

export default Button