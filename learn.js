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
//завершает работу функции
function sum(a, b) {
  return a + b;
}
let res = sum(10, 15);
console.log(res);

//функция как аргумент
console.log(sum(12, 34));

//колбэки функция принимающая др ф-ю как аргумент
function doIt(fun, a, b) {
  let result = fun(a, b);
  console.log(result);
}

doIt(sum, 10, 110);

//IIFE анонимная самовызывающаяся ф-я
(function () {
  console.log("Мгновенно!");
})();

(function (a, b) {
  console.log(a + b);
})(10, 20);
