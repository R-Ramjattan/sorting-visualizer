import React, {Component} from 'react'
import SortingVisualizer from '../SortingVisualizer/SortingVisualizer'

export default class UtilityBar extends Component{
  constructor(props){
    super(props);

    this.state = {
        animationSpeed : 50,

    }
  }

  render(){
    return (
      <div className='utility-bar'>
        <div className='title'>Sorting Algorithm Visualizer</div>
        <div className='util-btns'>
          <button className='btn' onClick={new SortingVisualizer().bubbleSort}>Generate New Array</button>
          <button className='btn' >Quick Sort</button>
          <button className='btn' >Bubble Sort</button>
          <button className='btn' >Merge Sort</button>
          <button className='btn' >Heap Sort</button>
          <button className='play-button'></button>
        </div>
        <div className='util-sliders'>
          <h4 className='anim-speed'>Animation Speed
            <div>
              <input className='slider' type={'range'} min={'10'} max={'300'}></input>
            </div>
            <div className='anim-speed-value'>
              Value
            </div>
          </h4>
          <h4 className='array-size'>Array Size
            <div>
              <input className='slider' type={'range'} min={'10'} max={'300'}></input>
            </div>
            <div className='array-size-value'>
              Value
            </div>
          </h4>
          
          
        </div>
      </div>
    )
    }
  }

  // utilBar = (props) => {
  // return (
  //   <div className='utility-bar'>
  //     <div className='title'>Sorting Algorithm Visualizer</div>
  //     <div className='util-btns'>
  //       <button className='btn' onClick={new SortingVisualizer().bubbleSort}>Generate New Array</button>
  //       <button className='btn' >Quick Sort</button>
  //       <button className='btn' >Bubble Sort</button>
  //       <button className='btn' >Merge Sort</button>
  //       <button className='btn' >Heap Sort</button>
  //     </div>
  //     <div className='util-sliders'>
        
  //       <div>
  //         <input type={'range'} min={'10'} max={'300'}></input>
  //       </div>
        
  //     </div>
  //   </div>
  // )
  // }
