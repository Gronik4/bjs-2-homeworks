function cachingDecoratorNew(func) {
  // Ваш код
  let cash = [];
  return function wrupper(...args) {
    const hash = args.join(',');
    let idx = cash.findIndex((item) => item.hash == hash); 
    if(idx !== -1){
      console.log('Из кэша: ' + cash[idx].value);
      return 'Из кэша: ' + cash[idx].value;
    } else {
      let resalt = func(...args);
      cash.push({hash: [hash], value: resalt}); 
      if(cash.length > 5) {cash.shift();} 
      console.log('Вычисляем: ' + resalt);
      return 'Вычисляем: ' + resalt;
    }
  }
  return wrupper;
}


function debounceDecoratorNew(func, ms) {
  // Ваш код
  let isThrottled = false, savedArgs, savedThis;
  return function(...args){
    savedArgs = args;
    savedThis = this;

    if(isThrottled){return;}
    func.apply(this, savedArgs);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      func.apply(savedThis, savedArgs);
    }, ms)
  }  
}

function debounceDecorator2(func, ms) {
  // Ваш код
  let isThrottled = false, savedArgs, savedThis, count = 0;
  function wrapper(...args){
    
    savedArgs = args;
    savedThis = this;
    count += 1; 
    save = [count];

    if(isThrottled){return;}
    func.apply(this, savedArgs);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
      func.apply(savedThis, savedArgs);
      console.log('Количество вызовов: ' + save);
    }, ms);  
  }
  return wrapper;
}