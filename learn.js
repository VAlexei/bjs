//Добавляем функцию для вывода результатов как в кансоль так и на странице
function print(msg) {
  let divOne = document.createElement("div");
  document.getElementById("myDiv").appendChild(divOne).innerHTML = msg;
  console.log(msg);
}

print("let's rock!");

const years = 1986;
print(years);
var userName = "Alex121";

function names() {
  print(userName);
}
names();
print(typeof years);

let time = 5;

if (time < 7) {
  print("День!");
} else {
  print("Вечер!");
}
print(time);

//тернарный оператор
greeting1 = time < 7 ? "День!!" : "Вечер!!";
print(greeting1);

//Конкатенация строк
let Name = "Alex";

print(typeof `Привет, ${Name}!`);

//functions declaration - можем вызывать до обьявления
function sayHi() {
  print(`Привет, ${Name}!`);
}
sayHi();

//function expretion
let sayBuy = function () {
  print(`Goodbuy!`);
};
sayBuy();

//параметры
function sayNumber(num) {
  print(`It is ${num} `);
}
//аргументы
sayNumber(34);

//return
//завершает работу функции
function sum(a, b) {
  return a + b;
}
let res = sum(10, 15);
print(res);

//функция как аргумент
print(sum(12, 34));

//колбэки функция принимающая др ф-ю как аргумент
function doIt(fun, a, b) {
  let result = fun(a, b);
  print(result);
}

doIt(sum, 10, 110);

//IIFE анонимная самовызывающаяся ф-я
(function () {
  print("Мгновенно!");
})();

(function (a, b) {
  print(a + b);
})(10, 20);

let res2 = (function (a, b) {
  return a + b;
})(10, 20);

print(res2);

//Стрелочная функция
function sayHey(name) {
  print(`Hey! ${name}`);
}
sayHey("Olaf");

//Не имеет своего контекста и ссылается на контекст области , в которой она была обьявлена
const arrSayHey = (name) => {
  print(`Hey! ${name}`);
};

const heiOne = (nameMe) => print(`Hei ${nameMe}!`);
//или если условия можно зап-ть в 1 строчку:
const arrSayHey2 = (name) => print(`Hey! ${name}`);

arrSayHey2("Olafel");

//или можно сократить return:
const sum2 = (a, b) => a + b;
print(sum2(10, 21));

//Массивы
const autoBrands = ["Tesla", "BMV", "Delorean", "Bugatty"];
print(autoBrands);
print(autoBrands[0]);
print(autoBrands.length);

//Методы массива
autoBrands.push("Nissan"); //Доб-м эл-т в конец массива
autoBrands.pop(); //Удаляем эл-т из конца массива
autoBrands.shift(); //Удаляем элемент из начала м
autoBrands.unshift("Volvo"); //Добавляем элемент в начало м
autoBrands.splice(1, 2); //Стартуя с элемента [1] удали 2 элемента
print(autoBrands);

//Циклы
for (i = 0; i < 4; i++) {
  print(i);
}
//Обход массива циклом for of
for (item of autoBrands) {
  print(item);
}
//forEach()
// autoBrands.forEach(function (brand, index) {
//   print(`${brand} => ${index}`);
// });
autoBrands.forEach(printBrand);
function printBrand(brand, index) {
  print(`${brand} => ${index}`);
}

autoBrands.forEach((brand, index) => print(`${brand} -> ${index}`));

//12. Обьекты
const person = {
  age: 36,
  userName: "Alex",
  married: false,
  sayHello: function (name) {
    print(`Привет, ${name}! Меня зовут ${person.userName}!`);
  },
};
//Вывод св-в
print(person);
print(person.userName);
print(person["age"]);
//добавление свойств
person.profession = "js creator";
print(person.profession);
//Удаление св-ва
delete person.married;
//Методы в объектах
person.sayHello("Jo");
//Обход свойств через for in
for (let key in person) {
  console.log(key, ":", person[key]);
}
