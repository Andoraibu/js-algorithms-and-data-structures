
/*
Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.
 */

let arrayLike = { // есть индексы и свойство length => псевдомассив
    0: "Hello",
    1: "World",
    length: 2
};

// Ошибка (отсутствует Symbol.iterator)
//for (let item of arrayLike) {}

let arr = Array.from(arrayLike);
console.log(arr.pop());