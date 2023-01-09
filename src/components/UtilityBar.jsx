
import React, {Component} from 'react'


export default class UtilityBar extends Component{
  constructor(props){
    super(props);
    this.state = {
        animationSpeed : 50,
        arraySize : 74,
        inAnim : false,
    }
    this.handleAnimSpeedChange = this.handleAnimSpeedChange.bind(this);
    this.handleArraySizeChange = this.handleArraySizeChange.bind(this);
  }
  
  handleAnimSpeedChange(event){
    this.setState({animationSpeed : event.target.value});
    this.props.contextState.updateParentAnimationSpeed(event.target.value);
    
    
  }
  handleArraySizeChange(event){
    this.setState({arraySize : event.target.value});
    this.props.contextState.updateParentArraySize(event.target.value);
    
  }
  //Grouping of events for onClick
  onClickQuick(event){
    this.props.contextProp.quickSort();
    this.setState({inAnim : true});
  }
  onClickBubble(event){
    this.props.contextProp.bubbleSort();
    this.setState({inAnim : true});
  }
  onClickMerge(event){
    this.props.contextProp.mergeSort();
    this.setState({inAnim : true});
  }
  ////////////////////////////
 
  
 
  render(){
    const {generateArray} = this.props.contextProp;
    return (
      <div className='utility-bar'>
        <div className='title'>Sorting Algorithm Visualizer</div>
        <div className='util-btns'>
          <button className='btn' onClick={() => generateArray()} disabled={this.state.inAnim}>Generate New Array</button>
          <button className='btn' onClick={() => this.onClickQuick()} disabled={this.state.inAnim}>Quick Sort</button>
          <button className='btn' onClick={() => this.onClickBubble()} disabled={this.state.inAnim}>Bubble Sort</button>
          <button className='btn' onClick={() => this.onClickMerge()}disabled={this.state.inAnim} >Merge Sort</button>
          <button className='btn' disabled={true}>Heap Sort</button>
          <h5>{this.state.inAnim}</h5>
          {/* <button className='play-button'></button> */}
        </div>
        <div className='util-sliders'>
          <h4 className='anim-speed'>Animation Speed
            <div>
              <input className='slider' type={'range'} min={'10'} max={'300'} value={this.state.animationSpeed} onChange={this.handleAnimSpeedChange} disabled={this.state.inAnim}></input>
            </div>
            <div className='anim-speed-value'>
              {this.state.animationSpeed}ms/frame
            </div>
          </h4>
          <h4 className='array-size'>Array Size
            <div>
              <input className='slider' type={'range'} min={'10'} max={'250'} value={this.state.arraySize} onChange={this.handleArraySizeChange} disabled={this.state.inAnim}></input>
            </div>
            <div className='array-size-value'>
              {this.state.arraySize}
            </div>
          </h4>
          
          
        </div>
      </div>
    )
    }
  }
