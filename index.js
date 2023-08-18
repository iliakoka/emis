let age = prompt("Enter your age");

if (age < 18) {
  console.log("You're a minor");
} else if (age >= 18 && age <= 65) {
  console.log("You're an adult");
} else {
  console.log("You're a senior");
}

const movies = ["Inception", "Intestellar", "Batman", "Barbie"];
movies.push("Spiderman", "Star Wars");
movies.unshift("Godfather", "Scarface");
movies.shift(0);
movies.pop(7);
console.log(movies);

let student = {
  name: "Johnny",
  age: "20",
  grade: "F",
};

student.grade = "A";
console.log(student);

let car = {
  brand: "BMW",
  model: "5 series",
  year: "2023",
};

console.log(`this is ${car.year} ${car.brand} ${car.model}`)

car.isSportCar = false;

console.log(car);
