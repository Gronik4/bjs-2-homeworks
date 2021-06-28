"use strict";
function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  let Dis = b*b - 4*a*c; 
  let D = +Dis.toFixed(2);
  let x, x1, x2;
  if(D === 0){x = -b/(2*a); arr = [x];} else {
    if(D < 0){x = 0; arr = [];} else {
      x1 = (-b + Math.sqrt(D) )/(2*a);
      x2 = (-b - Math.sqrt(D) )/(2*a);
      arr = [x1, x2]
    }
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
    // код для задачи №2 писать здесь
    let P, A, C;
    if(isNaN(Number(percent))) {totalAmount ='Параметр "Процентная ставка" содержит неправильное значение ' +'"' + percent + '"'; 
      return totalAmount;} else {P = percent/12/100;} 
    if(isNaN(Number(amount))) {totalAmount ='Параметр "Общая стоимость" содержит неправильное значение ' + '"' + amount + '"'; 
      return totalAmount;} else {A = Number(amount);}
    if(isNaN(Number(contribution))) {totalAmount = 'Параметр "Начальный взнос" содержит неправильное значение ' + '"' + contribution + '"'; 
      return totalAmount;} else {C = Number(contribution)}
    let Dat = new Date(date); 
    let termYears = Dat.getFullYear(); 
    let timenow = new Date();
    let nowYear = timenow.getFullYear();
    let deltaYea = termYears - nowYear;
    if(deltaYea < 0){
      totalAmount = 'Параметр "Срок ипотеки" содержит неправильное значение: ' + date; return totalAmount;
    } 
        else {
          if(deltaYea == 0 && ((Dat.getMonth() - timenow.getMonth()) <= 0)){
            totalAmount = 'Параметр "Срок ипотеки" содержит неправильное значение: ' + date; return totalAmount;
          }
        }
    let n = deltaYea == 0? Dat.getMonth() - timenow.getMonth(): (deltaYea - 1)*12 + (12-timenow.getMonth()) + Dat.getMonth();
    let S = A - C;
    let ManthP = S * (P + P / (Math.pow((1 + P), n) - 1))*n;
    totalAmount = ManthP.toFixed(2)*1;
    console.log('Ввод: ' + percent + ', ' + C + ', ' + A + ', ' + n + '. Вывод: ' + totalAmount)
    //alert('body: ' + S + ' * ' + 'Месяцев: ' + n + 'Ставка:' + P + 'ежемесячный платеж: ' + totalAmount + typeof(totalAmount));
    return totalAmount;
}
