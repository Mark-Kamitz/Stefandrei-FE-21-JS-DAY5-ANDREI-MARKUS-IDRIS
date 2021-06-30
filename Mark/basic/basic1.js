// Basic 1

// var car = {
//     brand: "Audi",
//     name: "A6",
//     color: "black",

//     printCar: function(){
//        return `The car is a ${this.brand} ${this.name} with the color ${this.color}`;
//     }
// }

// // console.log(car.name);
// // console.log(car.brand);
// // console.log(car.color);
// console.log(car.printCar());
// document.getElementById("output").innerHTML += car.printCar() + "<br>"; 


// var car1 = {
//     brand: "BMW",
//     name: "3",
//     color: "black",

//     printCar: function(){
//        return `The car is a ${this.brand} ${this.name} with the color ${this.color}`;
//     }
// }
// console.log(car1.printCar());
// document.getElementById("output").innerHTML += car1.printCar() + "<br>"; 

// var car2 = {
//     brand: "Porsche",
//     name: "Carera",
//     color: "black",

//     printCar: function(){
//        return `The car is a ${this.brand} ${this.name} with the color ${this.color}`;
//     }
// }
// console.log(car2.printCar());
// document.getElementById("output").innerHTML += car2.printCar(); 


// var animal = {
//     type: "Cat",
//     age: 5,
//     color: "black",

//     printAnimal: function(){
//        return `The animal is a ${this.type} ist is ${this.age} years old with the color ${this.color}`;
//     }
// }

// // console.log(car.name);
// // console.log(car.brand);
// // console.log(car.color);
// console.log(animal.printAnimal());
// document.getElementById("output").innerHTML += animal.printAnimal() + "<br>"; 

// var animal1 = {
//     type: "Dog",
//     age: 10,
//     color: "brown",

//     printAnimal: function(){
//        return `The animal is a ${this.type} ist is ${this.age} years old with the color ${this.color}`;
//     }
// }

// console.log(animal.printAnimal());
// document.getElementById("output").innerHTML += animal1.printAnimal() + "<br>"; 

// var animal2 = {
//     type: "Bird",
//     age: 30,
//     color: "white",

//     printAnimal: function(){
//        return `The animal is a ${this.type} ist is ${this.age} years old with the color ${this.color}`;
//     }
// }

// console.log(animal.printAnimal());
// document.getElementById("output").innerHTML += animal2.printAnimal() + "<br>"; 


var person = {
    name: "Peter",
    age: 30,
    profession: "Doctor",

    printPerson: function(){
       return `The person named ${this.name}  is ${this.age} years old with the profession of a  ${this.profession}`;
    }
}

console.log(person.printPerson());
document.getElementById("output").innerHTML += person.printPerson() + "<br>"; 

var person1 = {
    name: "Paul",
    age: 25,
    profession: "Farmer",

    printPerson: function(){
        return `The person named ${this.name}  is ${this.age} years old with the profession of a  ${this.profession}`;
    }
}

console.log(person.printPerson());
document.getElementById("output").innerHTML += person.printPerson() + "<br>"; 

var person2 = {
    name: "Peter",
    age: 30,
    profession: "Doctor",

    printPerson: function(){
        return `The person named ${this.name}  is ${this.age} years old with the profession of a  ${this.profession}`;
    }
}

console.log(person.printPerson());
document.getElementById("output").innerHTML += person.printPerson() + "<br>"; 