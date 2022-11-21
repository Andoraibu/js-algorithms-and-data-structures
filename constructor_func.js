function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Вася");

//alert(user.name); // Вася
//alert(user.isAdmin); // false

/*
Другими словами, вызов new User(...) делает примерно вот что:

function User(name) {
  // this = {};  (неявно)

  // добавляет свойства к this
  this.name = name;
  this.isAdmin = false;

  // return this;  (неявно)
}

------------
Используя специальное свойство new.target внутри функции, мы можем проверить, вызвана ли функция при помощи оператора new или без него.

В случае, если функция вызвана при помощи new, то в new.target будет сама функция, в противном случае undefined.

function User() {
  alert(new.target);
}

// без "new":
User(); // undefined

// с "new":
new User(); // function User { ... }
 */

// return в функции конструкторе возвращает THIS:
function SmallUser() {
    this.name = "Bob";
    return;
}

console.log(new SmallUser().name)