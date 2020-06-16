// Add your functions here
// array = array of numbers
// func is a function 
// we want the array to be negative

function map(array, callback) {

    let newArray = []

    array.forEach(element => {
        newArray.push(callback(element))
    })
    
    return newArray;
   
}

// function reduce(array, func, startingPoint) {

//     //let start = (!!startingPoint) ? startingpoint :0
//     // if (array.includes(true)) {
//     //     return true
//     // } else if (array.includes(false)) {
//     //     return false
//     // } 

// //    let total = (!!startingPoint) ? startingPoint : array[0]

// //    array.forEach(element => {
// //        total = func(element, total)
// //    })
// // return total

// }

function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }

