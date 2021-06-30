// Intermediate

class Person{
    profession;
    gender;
    age;

    constructor(a, b, c) {

            this.profession = a;
            this.gender = b;
            this.age = c;
    }

    printPerson() {
        return `The person is a ${this.profession} he is  ${this.gender} with the age of ${this.age} `;
    }
}

var person1 = new Person("Scientist", "male", 34);
console.log(person1.printPerson());
document.getElementById("output").innerHTML += person1.printPerson() + "<br>"; 

class RoyalPerson extends Person{
    status;
    
    constructor(profession,gender,age, status){
        super(profession,gender,age);
        this.status = status;
    }

    printPerson() {
        return `${super.printPerson()} and he is a ${this.status}`;
    }
}

var Royal = new RoyalPerson("Scientist", "male", 34, "king");
console.log(Royal.printPerson());
document.getElementById("output").innerHTML += Royal.printPerson() + "<br>"; 

