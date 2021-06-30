function compareArrays(arr1, arr2) {
  let result;

  // Ваш код
  if(arr1.length !== arr2.length) {return result = false;} 
  result = arr1.every((item) => arr1[item] === arr2[item]);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код
  resultArr = arr.filter((positive) => positive >= 0).filter((item) => item % 3 === 0).map((multi) => multi * 10);
  return resultArr; // array
}
