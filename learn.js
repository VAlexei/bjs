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
greeting1 = time < 7 ? "День!!" : "Вечер!!";
console.log(greeting1);

//Конкатенация строк
let Name = "Alex";

console.log(typeof `Привет, ${Name}!`);

//functions declaration - можем вызывать до обьявления
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

let res2 = (function (a, b) {
  return a + b;
})(10, 20);

console.log(res2);

//Стрелочная функция
function sayHey(name) {
  console.log(`Hey! ${name}`);
}
sayHey("Olaf");

//Не имеет своего контекста и ссылается на контекст области , в которой она была обьявлена
const arrSayHey = (name) => {
  console.log(`Hey! ${name}`);
};

const heiOne = (nameMe) => console.log(`Hei ${nameMe}!`);
//или если условия можно зап-ть в 1 строчку:
const arrSayHey2 = (name) => console.log(`Hey! ${name}`);

arrSayHey2("Olafel");

//или можно сократить return:
const sum2 = (a, b) => a + b;
console.log(sum2(10, 21));

//Массивы
const autoBrands = ["Tesla", "BMV", "Delorean", "Bugatty"];
console.log(autoBrands);
console.log(autoBrands[0]);
console.log(autoBrands.length);

//Методы массива
autoBrands.push("Nissan"); //Доб-м эл-т в конец массива
autoBrands.pop(); //Удаляем эл-т из конца массива
autoBrands.shift(); //Удаляем элемент из начала м
autoBrands.unshift("Volvo"); //Добавляем элемент в начало м
autoBrands.splice(1, 2); //Стартуя с элемента [1] удали 2 элемента
console.log(autoBrands);

//Циклы
for (i = 0; i < 10; i++) {
  console.log(i);
}
//Обход массива циклом for of
for (item of autoBrands) {
  console.log(item);
}
//forEach()
// autoBrands.forEach(function (brand, index) {
//   console.log(`${brand} => ${index}`);
// });
autoBrands.forEach(printBrand);
function printBrand(brand, index) {
  console.log(`${brand} => ${index}`);
}

autoBrands.forEach((brand, index) => console.log(`${brand} -> ${index}`));

//12. Обьекты
