// pushFront([5,7,2,3], 8) 

function pushFront(arr,val) {
     for(let i = arr.length; i >= 0; i--){
        arr[i] = arr [i-1]
     }
     
     arr[0] = val
     return arr
    }
//console.log(pushFront([5,7,2,3],8))






//popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function

function popFront(arr) {
    let firstValue = arr[0]
    for ( let i = 0; i <arr.length; i++){
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)

    return firstValue

}
//console.log(popFront([0,5,10,15]))






//insertAt([100,200,5], 2, 311) => [100,200,311,5]
function insertAt(arr,index,value){
    for(let i = arr.length; i >= index; i--){
        arr[i] = arr[i-1]
    }
    arr[index] = value
    return arr
}
console.log(insertAt([100,200,5], 2, 311))