// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;

  // Ваш код
  min = max = arr[0];
  sum = avg = 0;
  let i = 0;
  while(i < arr.length) {
    if(arr[i] > max) {max = arr[i];}
    if(arr[i] < min) {min = arr[i];}
    sum += arr[i];
    i +=1;
  }
  avg = (sum/arr.length).toFixed(2);
  return { min:min, max:max, avg:avg };
}
// Задание 2
function worker(arr) {
  let sum = 0;

  // Ваш код
  for(let i = 0; i < arr.length; i +=1) {
    sum += arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;

  // Ваш кода
  for(let i = 0; i < arrOfArr.length; i +=1) {
    let result = func(arrOfArr[i]);
    if(result > max) {max = result;}
  }
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let max, min, difference;
  max = min = arr[0];
  difference = 0;
  for(let i = 0; i < arr.length; i +=1) {
    if(arr[i] > max) {max = arr[i];}
    if(arr[i] < min) {min = arr[i];}
  }
  difference = max - min;
  return difference;
}
