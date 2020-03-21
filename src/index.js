
exports.min = function min (array) {
  if(!Array.isArray(array) || array.length === 0){
    return 0;
  }
  else {
    let MIN = 9999999;
    for(let a of array){
      if(a < MIN){
        MIN = a;
      }
    }
    return MIN;
  }
}

exports.max = function max (array) {
  if(!Array.isArray(array) || array.length === 0){
    return 0;
  }
  else{
    let MAX = -9999999;
    for(let a of array){
      if(a > MAX){
        MAX = a;
      }
    }
    return MAX;
  }
}

exports.avg = function avg (array) {
  if(!Array.isArray(array) || array.length === 0){
    return 0;
  }
  else{
    let sum = 0, AVG = 0, i;
    for(i = 0; i < array.length; i++){
      sum += array[i];
    }
    return AVG = sum/i;
  }
}
