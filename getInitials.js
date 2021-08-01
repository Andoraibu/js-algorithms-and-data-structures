//принимает имя и фамилию строкой и возвращает инициалы с точками
//пример: 'elon musk' -> E.M.

function getInitials(str){
    
    return str.split(' ').map(el => `${el[0].toUpperCase()}.` ).join('');

}

console.log(getInitials('elon musk junior'));