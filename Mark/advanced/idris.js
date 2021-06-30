var arr = [];
class Student {
    name;
    age;
    image;
    constructor(a, b, c) {
        this.name = a;
        this.age = b;
        this.image = c;
        arr.push(this);
    }
    printStudent() {
        return `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${this.image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${this.name}</h5>
          <p class="card-text">Hey, i am ${this.age} years old</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
    }
}

new Student("Lejla", 28, "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998__340.jpg");
new Student("test 2", 28, "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998__340.jpg");
new Student("test 3", 28, "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998__340.jpg");
new Student("test 4", 28, "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998__340.jpg");
new Student("test 5", 28, "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998__340.jpg");
new Student("test 6", 28, "https://cdn.pixabay.com/photo/2021/06/26/00/26/fashion-6364998__340.jpg");
for (let val of arr) {
    document.getElementById("demo").innerHTML += val.printStudent();
}

