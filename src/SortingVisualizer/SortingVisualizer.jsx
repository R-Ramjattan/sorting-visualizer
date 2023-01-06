import React from 'react'

import * as sortingAlgorithms from '../sortingAlgorithms/sortingAlgorithms';



export default class SortingVisualizer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            array: [],
            intervalId: null,
            iteration: 0,
            arraySize: 74,
            animationSpeed: 0,
            inAnimation: false,

        }
    }
    componentDidMount(){
        this.generateArray();
    }

    //Create values for array upon mounting component
    generateArray(){
        const newArray = [];
        for(let i=0; i< this.state.arraySize; i++){
            
            newArray.push({value: randomNumberInRange(5,750), backgroundImage : 'linear-gradient(rgb(36, 117, 209), rgb(122, 37, 187))'});
        }
        this.setState({array : newArray, iteration: 0, animationSpeed : 100});
    }

    sortCompleteAnimation(){
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
                
            }, 2000);

        }
    quickSort(){
        
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
                let ar = bSort(this.state.array);
                this.setState({array:ar});
                this.sortCompleteAnimation();
                clearInterval(intervalId);
            }

            //6) increment iterator++
            let iter = this.state.iteration;
            iter++;
            
            this.setState({array: this.state.array, iteration : iter });

            }, this.state.animationSpeed);
      
        
    }
    
    bubbleSort(){
        

        const animation = sortingAlgorithms.bubbleSort(this.state.array.map(function(e){return e.value}));
        this.setState({iteration : 0});
        //Check if array is already sorted
        // let splitArray = this.state.array.map(function(e){return e.value});
        // const jsSortedArray = sort(splitArray);
        //
        
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

    mergeSort(){

    }

    heapSort(){

    }

    //Manually change sorting method to test
    testSortAlgorithm(){
        for(let i = 0; i<40; i++){
            const testedArray = [];
            for(let i=0; i< 55; i++){
                
                testedArray.push(randomNumberInRange(5,750));
            }
            //Sorting algorithm array
            const sortedArray = sortingAlgorithms.bubbleSort(testedArray);
            //JS sorted array
            const jsSortedArray = testedArray.sort();
            console.log(arrayEquals(sortedArray, jsSortedArray));
            
        }
    
        
    }

    // For each value in the array map it to a div-array-bar with a key id
    render(){
        const {array} = this.state;
        
        return(
            <>
            <div className='array-container'>
            {array.map((value, idx) => (
                
                <div className='array-bar' style={{height: `${value.value}px`, backgroundImage : `${value.backgroundImage}`}} key={idx}>
                    
                </div>
                
            ))}
            </div>
            <button onClick={() => this.generateArray()}>Generate New Array</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.generateArray()}>Merge Sort</button>
            <button onClick={() => this.generateArray()}>Heap Sort</button>
            <button onClick={() => this.testSortAlgorithm()}>Test Algorithm</button>
            </>
           
        );
       
    }
 
}
function randomNumberInRange(min, max) {
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function arrayEquals(arrayOne, arrayTwo){
    if(arrayOne.length !== arrayTwo.length){
        return false;
    }else {
        for(let i = 0; i<arrayOne.length; i++){
            if(arrayOne[i] !== arrayTwo[i]){
                return false;
            }
        }
    }
    return true;
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



