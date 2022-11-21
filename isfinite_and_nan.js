/*
Infinity, NaN
Эти числовые значения принадлежат типу number, но они не являются «обычными» числами, поэтому есть функции для их проверки:
isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
isNaN(NaN) ); // true
isNaN("str") ); // true
Можем ли мы просто сравнить === NaN? К сожалению, нет. Значение NaN уникально тем, что оно не является равным ни чему другому,
даже самому себе:
NaN === NaN ; // false

isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:

alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, потому что специальное значение: NaN
alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity
Иногда isFinite используется для проверки, содержится ли в строке число:

let num = +prompt("Enter a number", '');

// вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
alert( isFinite(num) );
Помните, что пустая строка интерпретируется как 0 во всех числовых функциях, включая isFinite.

Сравнение Object.is

Существует специальный метод Object.is, который сравнивает значения примерно как ===, но более надёжен в двух особых ситуациях:

Работает с NaN: Object.is(NaN, NaN) === true, здесь он хорош.
 */