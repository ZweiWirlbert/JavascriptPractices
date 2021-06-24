let x = 10;

let y = `abaaaaa 




c`;

console.log(y);
// var math = x < y ? "yes" : "no";

console.log(x + y);

let a = 1;

a = 2;

console.log(y.length);

ar1 = [8, 9, 6];

// Push: add an item to array at the end
ar1.push(7);
console.log("Push 7 \n" + ar1);

ar2 = [1, 2, 3];
// Unshift: add an item to the beginning of an array
ar2.unshift(2, 6);
console.log("Unshift 2 and 6 \n" + ar2);

// Join 2 array

// Concat fuction
let c = ar1.concat(ar2);
// Spread operator
let d = [...ar1, ...ar2];

console.log(c);

console.log(d);

let result = ar2.findIds((x) => x === 2);

console.log(result);

let getData = () => console.log("back");

let e = getData();

let carname;
const car = {
  info: {
    name: "Ford F4",
    color: "Red",
  },
  brand: "Ford",

  start: function (destination) {
    return console.log(`${this.info.name} Going to ${destination}!`);
  },
};
car.start("Rome");

// console.log(car.brand + car.info.color);

// console.log(car);
// delete car.info.name;
// console.log(car);

class Car {
  id;
  brand;
  name;
  color;
  start() {
    return console.log(" Going ");
  }
}

let c2 = new Car();

c2.brand = "Lamboghini";
c2.color = "yellow";
c2.id = "L01HY";
c2.name = "Hurricane";

let c3 = new Car();

c3.brand = "Bugatti";
c3.color = "red";
c3.id = "B02S";
c3.name = "Storm";
c2.start();
console.log(c2);

const getNewData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("alooo"), 2000);
  });
};


const doSomething = async () => {
  const data = await getNewData();
  console.log(data);
};

function doLoop() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

}

doLoop();
