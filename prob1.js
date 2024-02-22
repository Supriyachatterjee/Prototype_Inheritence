// let Car = {
//     company : "Tata",
//     noOfWheels : 4,
//     noOfSheets : 5,
//     engineType : "VS6"
// }
// function MyCar(color,musicSystem){
//     this.color = color;
//     this.musicSystem = musicSystem;
// }
// let car1 = new MyCar("blue",true);
// car1 = Object.create(Car);
// console.log(car1);

function Car(company,noOfWheels,noOfSheets,engineType){
    this.company = company;
    this.noOfWheels = noOfWheels;
    this.noOfSheets = noOfSheets;
    this.engineType = engineType;
}

let myCar = new Car("Tata",4,5,"VS6");
let car1 = Object.create(myCar);
car1.color = "black";
console.log(car1.noOfWheels);