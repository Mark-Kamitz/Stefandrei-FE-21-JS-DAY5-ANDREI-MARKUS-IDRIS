// Intermediate
class Car{
    brand;
    model;
    age;

    constructor(a, b, c) {

            this.brand = a;
            this.model = b;
            this.age = c;
    }

    printCar() {
        return `The vehicle is a ${this.brand} model ${this.model} it is only ${this.age} Year old`;
    }
}

// var car1 = new Car("BMW", 7, 4);
// console.log(car1.printCar());
// document.getElementById("output").innerHTML += car1.printCar() + "<br>"; 

class Motorbike extends Car{
    
    seat;

    constructor(brand, model, age, seat){
        super(brand, model, age);
        this.seat = seat;
    }

    printMotorbike() {
        return `${super.printCar()} and has a seat styled like a  ${this.seat}`;
    }
}

var motorbike = new Motorbike("Triumph", "Speed Twin 1200", 1, "Cafe Racer");
console.log(motorbike.printMotorbike());
document.getElementById("output").innerHTML += motorbike.printMotorbike() + "<br>"; 


// class Animal{
//     color;
//     gender;
//     age;

//     constructor(a, b, c) {

//             this.color = a;
//             this.gender = b;
//             this.age = c;
//     }

//     printAnimal() {
//         return `the animal is ${this.color} it's ${this.gender} with the age of ${this.age} `;

//     }
// }

// // var animal1 = new Animal("white", "male", 4);
// // console.log(animal1.printAnimal());
// // document.getElementById("output").innerHTML += animal1.printAnimal() + "<br>"; 

// class Fish extends Animal{
//     type;
//     watertype;

//     constructor( color, gender, age, watertype, type){
//         super(color, gender, age);
//         this.watertype = watertype;
//         this.type = type;
//     }

//     printFish() {
//         return `${super.printAnimal()} and is a  ${this.watertype} ${this.type}`;
//     }
// }

// var fish1 = new Fish("yellow", "female", 2, "saltwater", "fish");
// console.log(fish1.printFish());
// document.getElementById("output").innerHTML += fish1.printFish() + "<br>"; 




// class Person{
//     profession;
//     gender;
//     age;

//     constructor(a, b, c) {

//             this.profession = a;
//             this.gender = b;
//             this.age = c;
//     }

//     printPerson() {
//         return `The person is a ${this.profession} he is  ${this.gender} with the age of ${this.age} `;
//     }
// }

// // var person1 = new Person("Scientist", "male", 34);
// // console.log(person1.printPerson());
// // document.getElementById("output").innerHTML += person1.printPerson() + "<br>"; 

// class RoyalPerson extends Person{
//     status;
    
//     constructor(profession,gender,age, status){
//         super(profession,gender,age);
//         this.status = status;
//     }

//     printPerson() {
//         return `${super.printPerson()} and he is a ${this.status}`;
//     }
// }

// var Royal = new RoyalPerson("Scientist", "male", 34, "King");
// console.log(Royal.printPerson());
// document.getElementById("output").innerHTML += Royal.printPerson() + "<br>"; 

