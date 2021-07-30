//деструк массивы и объекты
//массив

const [a,b] = [1,2]
// console.log(a,b);

//можно пропускать числа
const [,x,,y] = [1,2,3,4,5]
// console.log(x,y);

//rest оператор
const [num, ...rest] = [1,2,3,4,5];
// console.log(num, rest);

//rest мож быть только последним
const [num1,,num2, ,num3,...other] = [1,2,3,4,5,6,7,8]
// console.log(num1, num2, num3, other);

//объекты
const user = {
    name1: "John",
    city: "Toronto",
    age: 28,
}

const {name1, age} = user;
// console.log(name1, age);

//коллизия имен (если имя name1 уже есть)
const {name1: username, city} = user;
// console.log(username, city);

//можно передать в функцию 
function test({name1: username, city}){
    return `${username} lives in ${city}`;
};
// console.log(test(user));

//у функции значение по умолчанию
function test2({name1, age, country='Canada'}){
    return country;
}
console.log(test2(user));

//или объект 
function test3({city, age} = {}){
    
}
