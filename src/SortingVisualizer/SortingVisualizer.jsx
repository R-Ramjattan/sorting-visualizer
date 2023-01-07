import React from 'react'

import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';
import UtilityBar from '../components/UtilityBar';


export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);
        this.UtilityBar1 = React.createRef();
        this.state = {
            array: [],
            intervalId: null,
            iteration: 0,
            arraySize: 74,
            animationSpeed: 50,

        }
        this.updateParentArraySize.bind(this);
        this.updateParentAnimationSpeed.bind(this);
       
    }

    componentDidMount(){
        this.generateArray();
    }

    //Create values for array upon mounting component
    generateArray = () =>{
        const newArray = [];
        for(let i=0; i< this.state.arraySize; i++){
            
            newArray.push({value: randomNumberInRange(5,750), backgroundImage : 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))'});
        }
        this.setState({array : newArray, iteration: 0, animationSpeed : this.state.animationSpeed});
    }
   

    sortCompleteAnimation = () =>{
        let i = 0;

        const intervalTwo = window.setInterval(() =>{
            let copiedArray = this.state.array;
            
            if(i < this.state.array.length){
                
                copiedArray[i].backgroundImage = 'linear-gradient(rgb(239, 142, 44), rgb(232, 129, 39))';
                
            }else{
                clearInterval(intervalTwo);
            }
            this.setState({array: copiedArray});
            i++;

        },10 );
            setTimeout(()=>{
                let copiedArray = this.state.array;
                for(let i = 0; i < this.state.array.length; i++){
                    copiedArray[i].backgroundImage = 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))';
                }
                this.setState({array: copiedArray});
                //Set Child inAnim state to false
                const UtilityBar1 = this.UtilityBar1.current;
                UtilityBar1.setState({inAnim : false});
            }, 2000);

        }
    quickSort = () =>{
        
        let animation = [];
        let testArr = this.state.array.map(function(e){return e.value});
        sortingAlgorithms.quickSort(testArr, 0, this.state.array.length, animation);
        
        //console.log(testArr);
        this.setState({iteration : 0});
        const intervalId = window.setInterval(() =>{
            
            //1) Get two previous swaps from anim array
            //2) Reset style
            
            if(this.state.iteration > 0){
                let prevSwap = animation[this.state.iteration-1];
                let copiedArray = this.state.array;
                copiedArray[prevSwap.indexOne].backgroundImage = 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))';
                copiedArray[prevSwap.indexTwo].backgroundImage = 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))';
                this.setState({array : copiedArray});
            }
            
            //3) Get two current swaps
            //4) Set style
            let currentSwap = animation[this.state.iteration];
            
            if(currentSwap.isSwap === true){
                let copiedArray = this.state.array;
                let temp = this.state.array[currentSwap.indexOne].value;

                copiedArray[currentSwap.indexOne].value = this.state.array[currentSwap.indexTwo].value;
                copiedArray[currentSwap.indexTwo].value = temp;
                this.setState({array:copiedArray});
                
            }
            let copiedArray = this.state.array;
            copiedArray[currentSwap.indexOne].backgroundImage = 'linear-gradient(rgb(255, 0, 0), rgb(255, 0, 0))';
            copiedArray[currentSwap.indexTwo].backgroundImage = 'linear-gradient(rgb(55, 215, 101), rgb(55, 215, 101))';
            this.setState({array:copiedArray});
            
            //5) Check to see if last iteration then remove interval
            if(this.state.iteration >= animation.length-1){
                this.sortCompleteAnimation();
                clearInterval(intervalId);
            }

            //6) increment iterator++
            let iter = this.state.iteration;
            iter++;
            
            this.setState({array: this.state.array, iteration : iter });

            }, this.state.animationSpeed);
      
        
    }
    
    bubbleSort = () =>{
        

        const animation = sortingAlgorithms.bubbleSort(this.state.array.map(function(e){return e.value}));

        this.setState({iteration : 0});

        const intervalId = window.setInterval(() =>{
            
            //1) Get two previous swaps from anim array
            //2) Reset style
            
            if(this.state.iteration > 0){
                let prevSwap = animation[this.state.iteration-1];
                let copiedArray = this.state.array;
                copiedArray[prevSwap.indexOne].backgroundImage = 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))';
                copiedArray[prevSwap.indexTwo].backgroundImage = 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))';
                this.setState({array : copiedArray});
            }
            
            //3) Get two current swaps
            //4) Set style
            let currentSwap = animation[this.state.iteration];
            
            if(currentSwap.isSwap === true){
                let copiedArray = this.state.array;
                let temp = this.state.array[currentSwap.indexOne].value;
                copiedArray[currentSwap.indexOne].value = this.state.array[currentSwap.indexTwo].value;
                copiedArray[currentSwap.indexTwo].value = temp;
                this.setState({array:copiedArray});
                
            }
            let copiedArray = this.state.array;
            copiedArray[currentSwap.indexOne].backgroundImage = 'linear-gradient(rgb(255, 0, 0), rgb(255, 0, 0))';
            copiedArray[currentSwap.indexTwo].backgroundImage = 'linear-gradient(rgb(255, 0, 0), rgb(255, 0, 0))';
            this.setState({array:copiedArray});
            
            //5) Check to see if last iteration then remove interval
            if(this.state.iteration >= animation.length-1){
                this.sortCompleteAnimation();
                clearInterval(intervalId);
            }

            //6) increment iterator++
            let iter = this.state.iteration;
            iter++;
            
            this.setState({array: this.state.array, iteration : iter });

        
            }, this.state.animationSpeed);
            
              

        
    }

    mergeSort = () =>{

    }

    heapSort = () =>{

    }
  
    updateParentArraySize=(sliderArraySize)=>{
        this.setState({arraySize : sliderArraySize})
        this.generateArray();
    }
    updateParentAnimationSpeed=(sliderAnimationSpeed)=>{
        this.setState({animationSpeed : sliderAnimationSpeed});
    }

    contextProp = {
        generateArray : this.generateArray, 
        bubbleSort: this.bubbleSort,
        quickSort: this.quickSort,

    }
    contextState = {
        updateParentArraySize : this.updateParentArraySize,
        updateParentAnimationSpeed : this.updateParentAnimationSpeed,
    }
    
    
    // For each value in the array map it to a div-array-bar with a key id
    render(){
        const {array} = this.state;

        return(
            <>
            <UtilityBar 
                contextProp={this.contextProp}
                contextState={this.contextState}
                ref={this.UtilityBar1}
            ></UtilityBar>
            <div className='array-container'>
            {array.map((value, idx) => (
                
                <div className='array-bar' style={{height: `${value.value}px`, backgroundImage : `${value.backgroundImage}`}} key={idx}>
                    
                </div>
                
            ))}
            </div>
            
            </>
           
        );
       
    }
 
}
function randomNumberInRange(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bSort(array){
    let temp = 0;
    
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length-i-1; j++){

            if(array[j].value > array[j+1].value){

                temp = array[j].value;
                array[j].value = array[j+1].value;
                array[j+1].value = temp;
            }
        }
        
    }
    return array;
}
