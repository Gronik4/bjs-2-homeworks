// тут вы можете вызывать функции из task.js
let testCase = new AlarmClock();
testCase.addClock('18:36', () => console.log('Пора вставать!!'), 1);
testCase.addClock('18:37', () => {console.log('Ну!! Вставай уже!!!'); testCase.removeClock(2)}, 2);
//testCase.addClock('11:12', () => console.log('Хватит спать! Иди умываться!!'));
testCase.addClock('18:37', () =>{
    console.log('Хорош дрыхнуть!');
    testCase.clearAlarms();
    testCase.printAlarms();
}, 3);
testCase.addClock('11:15', () => console.log('А ну вставай! Немедленно!!'), 3);
testCase.printAlarms();
testCase.start();
