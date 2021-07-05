function Student(name, gender, age) {
    // Ваш код
    this.name = name;
    this.gender = gender;
    this.age = age;
    //console.log(`name: ${this.name}` +'   ' +  `gender: ${this.gender}` + '   ' + `ade: ${this.age}`);
}
let kosty = new Student('Kosty', 'male', 45, 'Алгебра');
let masha = new Student('Masha', 'female', 43);

Student.prototype.setSubject = function(Name) {
  //ваш код
  this.subject = Name;
  return this.subject[Name];
}

// ваш код для остальных методов
Student.prototype.addMark = function(mark) {
  this.mark = mark;
  if(this.marks === undefined){this.marks = [this.mark];}else{this.marks.push(this.mark);}
  return this.marks;
}

Student.prototype.addMarks = function( ...points) {
  if(this.marks === undefined){this.marks = []; for(let i of points){this.marks.push(i);} 
    }else{
      for(let j of points) {this.marks.push(j)}
  }
  return this.marks;
}

Student.prototype.getAverage = function(addMarks) {
  let marks = this.addMarks();
  let averege, summ = 0;
  for(let item of marks) {summ += item;}
  averege = summ/marks.length;
  return averege;
}
Student.prototype.exclude = function(reason) {
  this.excluded = reason;
  delete this.subject;
  delete this.marks;
  return this.exclude[reason];
}