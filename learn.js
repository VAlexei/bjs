console.log("let's rock!");

const years = 1986;
console.log(years);
var userName = "Alex121";

function names() {
  console.log(userName);
}
names();
console.log(typeof years);

let time = 5;

if (time < 7) {
  console.log("День!");
} else {
  console.log("Вечер!");
}
console.log(time);

//тернарный оператор
greeting = time < 7 ? "День!" : "Вечер!";

//Конкатенация строк

let Name = "Alex";

console.log(typeof `Привет, ${Name}!`);

//functions declaration
function sayHi() {
  console.log(`Привет, ${Name}!`);
}
sayHi();

//function expretion
let sayBuy = function () {
  console.log(`Goodbuy!`);
};
sayBuy();

//параметры
function sayNumber(num) {
  console.log(`It is ${num} `);
}
//аргументы
sayNumber(34);

//return
function sum(a, b) {
  const result = a + b;
  return result;
}
let res = sum(10, 15);
