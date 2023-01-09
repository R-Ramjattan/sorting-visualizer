///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
                                                                         BUBBLE SORT BELOW                                                                               */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const bubbleSort = array => {

    let temp = 0;
    const animation = [];
    //const arrayBars = document.getElementsByClassName('array-bar');

    
    for(let i = 0; i<array.length; i++){
        for(let j = 0; j<array.length-i-1; j++){

            if(array[j] > array[j+1]){

                temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;

                animation.push({indexOne : j, indexTwo : j+1, isSwap : true});
      
            }else{
                animation.push({indexOne : j+1, indexTwo : j+1, isSwap : false});
            }
            
        }
        
        
    }
    
    return animation;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
                                                                         QUICK SORT BELOW                                                                                */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const quickSort = (array, start, end, animation) => {

    if(end - start < 2){
        
        return;
    }
    //pivot index (midpoint)
    let p = start + Math.trunc((end-start)/2);
    
    p = partition(array, p, start, end, animation);

    quickSort(array, start, p, animation);

    quickSort(array, p+1, end, animation);
    

}

function partition(array, p, start, end, animation){
    let l = start;
    let h = end-2;
    let pivot = array[p];

    swap(array, p, end-1, animation);
    while(l < h){
        if(array[l] < pivot){
            l++;
        } else if(array[h] >= pivot){
            h--;
        } else{
            
            swap(array, l, h, animation);
            
        }
    }
    let mid = h;
    if(array[h] < pivot){
        mid++;
        
    }

    swap(array, end-1, mid, animation);
    return mid;
}

function swap(array, l, h, animation){
    let temp = array[l];
    array[l] = array[h];
    array[h] = temp;
    animation.push({indexOne : l, indexTwo : h, isSwap : true});
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
                                                                            MERGE SORT BELOW                                                                             */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const mergeSort = (array, start, end, animation) => {
    if(start === end){
        return;
    }

    let mid = Math.floor((start+end) / 2);
    mergeSort(array, start, mid, animation);
    mergeSort(array, mid + 1, end, animation);
    partitionMerge(array, start, end, animation);
    
}
function nextoffset(offset){
    if(offset <= 1) return 0;
    return Math.ceil(offset/2);
}

function partitionMerge(array, start, end, animation){
    let offset = end - start + 1;
    for(offset = nextoffset(offset); offset > 0; offset = nextoffset(offset)){
        for(let i = start; i + offset <= end; i++){
            let j = i + offset;
            if(array[i] > array[j]){
                swap(array, i, j, animation);
            }
        }
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
                                                                            HEAP SORT BELOW                                                                              */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////