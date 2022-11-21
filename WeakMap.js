let obj1 = {
}

let default_map = new Map();
default_map.set(obj1, "some value");

console.log(default_map.get(obj1))  // -> some value
// make obj1 null
obj1 = null
console.log(default_map.keys()); // undefined

//create WeakMap
let w_map = new WeakMap();
let obj2 = {};
w_map.set(obj2, "weak map");
console.log(w_map.get(obj2));
obj2 = null;
console.log(w_map.get(obj2)) //связанные данные тоже удалятся

/*
Короче, в мапе объект остается как ключ, но undefined,
в weak map удаляется, потому нет многих методов типа keys(), values(), так как неизвестно,
в какой момент удалят объект.
 */
