class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if(isNaN(id)){throw new Error('Не возможно идетифицировать будильник. Параметр id не передан.');}
        let err = this.alarmCollection.findIndex((item) => item.Oid == id);
        if(err !== -1){console.error('Будильник с таким id уже есть.'); return;} 
        this.alarmCollection.push({Oid: id, Otime: time, Ocallback: callback});
    }
    validateAddClock(time, callback, id) {
        try{this.addClock(time, callback, id);}
        catch(error) {return console.error(e);}
    }
    removeClock(id){
        let remoteId = this.alarmCollection.filter((item) => item.Oid == id);
        this.alarmCollection.splice(remoteId, 1);
    }
    getCurrentFormattedTime(){
        let date = new Date();
        let retHours = date.getHours() < 10? '0' + date.getHours(): date.getHours();
        let retMinutes = date.getMinutes() < 10? '0' + date.getMinutes(): date.getMinutes(); 
        return retHours + ':' + retMinutes;
    } 
    
     start() {
        function checkClock(tn, to, cb) {
            if(tn == to){cb();}
        }
        let timeNow = this.getCurrentFormattedTime(); 
        this.alarmCollection.forEach(item => checkClock(timeNow, item.Otime, item.Ocallback));
        if(!this.timerId) {
            let idI = setInterval(() => {
                this.alarmCollection.forEach(item => checkClock(timeNow, item.Otime, item.Ocallback));
            })
            this.timerId = idI;
        }
    }
    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log('Все будильники:');
        this.alarmCollection.forEach(item => console.log('№' + item.Oid + ' завел на: ' + item.Otime));  
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection.splice(0, this.alarmCollection.length);
    }
}