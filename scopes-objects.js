let globalCount = 10;

function showLocalScope() {
  let localCount = 5; 
  return `Inside function: localCount = ${localCount}, globalCount = ${globalCount}`;
}
console.log(showLocalScope());

function modifyCounts() {
  let localCount = 2; 
  globalCount += 5;
  localCount += 3;
  return `Modified globalCount = ${globalCount}, modified localCount = ${localCount}`;
}
console.log(modifyCounts());

function Student(firstName, lastName, age, course) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.course = course;

  this.introduce = function() {
    return `Hi, I’m ${this.firstName} ${this.lastName}, studying ${this.course}.`;
  };
}
console.log(student1.introduce());
console.log(student2.introduce());
console.log(student3.introduce());

const student1 = new Student("Sibahle", "Tyantsi", 22, "Information Systems");
const student2 = new Student("Lethu", "Moyo", 21, "Computer Science");
const student3 = new Student("Anele", "Nkosi", 23, "Software Engineering");

const company = {
  name: "Tech Innovators",
  founded: 2015,
  address: {
    street: "123 Innovation Drive",
    city: "Cape Town",
    country: "South Africa"
  },
  departments: {
    development: {
      teamLead: "Thabo Mthembu",
      members: 10
    },
    design: {
      teamLead: "Naledi Dlamini",
      members: 5
    }
  }
};

console.log("Company details:", company);
