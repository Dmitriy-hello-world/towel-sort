module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  let resultArr = [];
  matrix.forEach( (arr,i) => {
    if (i % 2 == 0) {
      for(let j = 0; j < arr.length; j++) {
        resultArr.push(arr[j]);
      }
    } else {
      for(let k = arr.length -1 ; k >= 0; k--) {
        resultArr.push(arr[k]);
      }
    }
  });
  return resultArr;
};