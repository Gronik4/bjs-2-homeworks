class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() { 
        this._state *= 1.5; 
        this.state = this._state;
        return this._state;
    }
    set state(mark) {    
       if(mark < 0) {this._state = 0;}
        else{if(mark > 100) {this._state = 100;} else {this._state = mark;}}
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book';
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}
class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}
class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}
//Задача 2
class Library {
    constructor(name, books) {
        this.name = name;
        this.books = books = [];
    }
    addBook(book) {
        if(book.state > 30) {this.books.push(book);}
    }
    findBookBy(type, value) {
        const exist = this.books.find(item => item[type] === value); 
        if(exist) {return exist;} else {return null;}
    }
    giveBookByName(bookName) {
        const giveBook = this.findBookBy('name', bookName);
        if(giveBook) {
            let position = this.books.indexOf(giveBook);
            this.books.splice(position, 1);
            return giveBook;
        } else {return null}
    }
}
//Задача №3
class Student {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.subjects = new Map();
        this.marks = [];
    }
    addMark(subject, mark){
        if(mark <=0 || mark >=6) {return 'Ошибка, оценка должна быть числом от 1 до 5';}
        if(this.subjects.has(subject)){
            let number = this.subjects.get(subject);
            this.marks[number].push(mark);
        } else {
            let numKey=this.subjects.size;
            this.subjects.set(subject, numKey);
            this.marks[numKey]=[mark];
        } 
    }
    getAverageBySubject(subject) {
        if(this.subjects.has(subject)){
            let number = this.subjects.get(subject);
            let summ = 0;
            for(let item of this.marks[number]) {
                summ += item;
            }
            let length = this.marks[number].length;
            return  (summ/length).toFixed(0)*1;
        } else {
            return 'Несуществующий предмет';
        }    
    }
    getAverage() {
        let allSumm = 0;
        let size = this.subjects.size;
        for(let item of this.subjects) { 
            let avarage = this.getAverageBySubject(item[0]);alert(item[0] + ' and ' + avarage);
            allSumm += avarage;
        }
        return (allSumm/size).toFixed(1)*1;
    }
    
}