// Extra

class Hotel {
    hotelName;
    numberOfNights;
    adress;
    image;

    constructor(a, b, c, d) {

            this.hotelName = a;
            this.numberOfNights = b;
            this.adress = c;
            this.image = d;
    }

    showHotel() {
        return `The hotel  ${this.hotelName} <br> at the Adress: ${this.adress} <br>looks like this: <br> <img src="${this.image}" > `;
    }
   
    nights() {
        this.availableNights = Math.floor(Math.random() * 10 ) + 1;

        if(this.availableNights > this.numberOfNights){
            document.getElementById("button").innerHTML = "I'll reserve";
        }
        else
        {
            document.getElementById("button").innerHTML = `Sorry, no available nights for ${this.hotelName}`;
        }
         return ;
    }
  
}

var hotel1 = new Hotel("Kings Royale", 5, "royal Place London", "https://cdn.pixabay.com/photo/2016/06/28/00/13/castle-1483681_960_720.jpg");
// console.log(hotel1.showHotel());
console.log(hotel1.nights());
document.getElementById("output").innerHTML += hotel1.showHotel() + "<br>"; 
// document.getElementById("button").addEventListener("click", hotel1.numberOfNights);

