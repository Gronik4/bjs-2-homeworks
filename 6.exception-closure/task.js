function parseCount(anything) {
    if(isNaN(Number.parseInt(anything))) {
        throw new Error('Невалидное значение');
    } else {     
        return Number.parseInt(anything);
    }    
}
    
function validateCount(value) {
    try {return parseCount(value);}
    catch(error) {return  error;}
}

//Задача №2
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        this.array = [this.sideA, this.sideB, this.sideC];
        this.arr = this.array.sort((a, b) => b-a);
    }
    getPerimeter(){
        if(this.arr[0] > this.arr[1] + this.arr[2]) {
            throw new Error('Треугольник с такими сторонами не существует');
        } else {
            return this.arr[0] + this.arr[1] + this.arr[2];
        } 
    }
    getArea() {
        const half = this.getPerimeter()/2;
        const area = Math.sqrt(half*(half - this.sideA)*(half - this.sideB)*(half - this.sideC)).toFixed(3)*1;
        return area;
    }  
}
class Figure {
    getPerimeter() {return 'Ошибка! Треугольник не существует';}
    getArea() {return 'Ошибка! Треугольник не существует'}
}
function getTriangle(a, b, c) {
    try{
        return new Triangle(a, b, c);
    }
    catch(error) {
        return new Figure;
    }
}
