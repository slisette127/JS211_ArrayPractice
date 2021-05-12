const cars = ['Ford', 'Chevy', 'Kia', 'Toyota'];
const moreCars = ['AMC', 'Cadillac', 'GMC', 'Honda'];


//length
console.log(cars.length)

//concat
let totalCars = cars.concat(moreCars)


console.log(totalCars.indexof('Honda'))

console.log()


let stringOfCars = totalCars.join();
console.log(stringOfCars)

let carsFromArray = stringOfCars.split(" ");


let carsInReverse = totalCars.reverse();

