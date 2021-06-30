// Basic2

// class Car{
//     brand;
//     model;
//     age;

//     constructor(a, b, c) {

//             this.brand = a;
//             this.model = b;
//             this.age = c;
//     }

//     printCar() {
//         return `the car is a ${this.brand} model ${this.model} with the age of ${this.age} `;

//     }
// }

// var car1 = new Car("BMW", 7, 4);
// console.log(car1.printCar());
// document.getElementById("output").innerHTML += car1.printCar() + "<br>"; 

// var car2 = new Car("Porsche", "Carrera", 2);
// console.log(car1.printCar());
// document.getElementById("output").innerHTML += car2.printCar() + "<br>"; 

// var car3 = new Car("Mercedes", "D200", 20);
// console.log(car1.printCar());
// document.getElementById("output").innerHTML += car3.printCar() + "<br>"; 

// class Animal{
//     type;
//     gender;
//     age;

//     constructor(a, b, c) {

//             this.type = a;
//             this.gender = b;
//             this.age = c;
//     }

//     printAnimal() {
//         return `the animal is a ${this.type} model ${this.gender} with the age of ${this.age} `;

//     }
// }

// var animal1 = new Animal("Cat", "male", 4);
// console.log(animal1.printAnimal());
// document.getElementById("output").innerHTML += animal1.printAnimal() + "<br>"; 

// var animal2 = new Animal("Dog", "mfemale", 8);
// console.log(animal1.printAnimal());
// document.getElementById("output").innerHTML += animal2.printAnimal() + "<br>"; 

// var animal3 = new Animal("Honeybatcher", "male", 2);
// console.log(animal3.printAnimal());
// document.getElementById("output").innerHTML += animal3.printAnimal() + "<br>"; 


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
        return `the person is a ${this.type} he is  ${this.gender} with the age of ${this.age} `;
    }
}

var person1 = new Person("Scientist", "male", 34);
console.log(person1.printPerson());
document.getElementById("output").innerHTML += person1.printPerson() + "<br>"; 

var person2 = new Person("SWorker", "female", 19);
console.log(person2.printPerson());
document.getElementById("output").innerHTML += person2.printPerson() + "<br>"; 

var person3= new Person("Teacher", "male", 55);
console.log(person3.printPerson());
document.getElementById("output").innerHTML += person3.printPerson() + "<br>"; 

