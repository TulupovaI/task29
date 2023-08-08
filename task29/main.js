
  function Student(firstName, lastName, birthYear, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = grades || [];
    this.attendance = new Array(25).fill(null); 
  
    this.getAge = function() {
      const currentYear = new Date().getFullYear();
      return currentYear - this.birthYear;
    }
  
    this.getAverageGrade = function() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
  
    this.present = function() {
      const index = this.attendance.findIndex(item => item === null);
      if (index !== -1) {
        this.attendance[index] = true;
      }
    }
  
    this.absent = function() {
      const index = this.attendance.findIndex(item => item === null);
      if (index !== -1) {
        this.attendance[index] = false;
      }
    }
  
  
  this.summary = function() {
    const averageGrade = this.getAverageGrade();
    
    const attendancePercentage = this.attendance.filter(item => item === true).length / this.attendance.length;

    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }

}
const student1 = new Student('Anna', 'Dag', 2001, [90, 85, 95, 100, 98]);
const student2 = new Student('Max', 'Smith', 1999, [80, 75, 70]);

student1.present()*25;

student2.absent();


console.log(`Full name: ${student1.firstName} ${student1.lastName}:`);
console.log(`Age: ${student1.getAge()}`);
console.log(`Average Grade: ${student1.getAverageGrade()}`);
console.log(` ${student1.summary()}`);

console.log(`Full name: ${student2.firstName} ${student2.lastName}`);
console.log(`Age: ${student2.getAge()}`);
console.log(`Average Grade: ${student2.getAverageGrade()}`);
console.log(` ${student2.summary()}`);
  
