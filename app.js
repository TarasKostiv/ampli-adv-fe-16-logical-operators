let vechicle1 = {
  name: 'Mersedes',
  model: 'W123',
  startOfRelease: 1972,
  endOfRelease: 1986,
  goToSting() {
    console.log(`Vechicle 1 values: ${vechicle1.name} + ${vechicle1.model} + ${vechicle1.startOfRelease} + ${vechicle1.endOfRelease}`)
  },
}

vechicle1.goToSting();

//! CompareToObject
let vechicle2 = {
  name: 'Mersedes',
  model: 'W123',
  startOfRelease: 1972,
  endOfRelease: 1986,
}

//* Method Object.is()
console.log('Method Object.is() :')
console.log(Object.is(vechicle1, vechicle2));

//* Method with logical operator ===
console.log('Method with logical operator === :')
console.log(vechicle1 === vechicle2);

//* Method with Object.keys()
let keys1 = Object.keys(vechicle1);
let keys2 = Object.keys(vechicle2);

console.log('Method with Object.keys() :')
console.log(vechicle1[keys1] === vechicle2[keys2]);

//! Creat new object
let newObject = Object();
newObject.key = 'value';
console.log(newObject);

let someObject = Object.assign(vechicle1, newObject);
console.log(someObject);