//принимает имя и фамилию строкой и возвращает инициалы с точками
//пример: 'elon musk' -> E.M.

function getInitials(str){
    let result = '';
    str.split(' ').map(el => {
        return result += `${el[0].toUpperCase()}.`;
    });

    return result;
}

console.log(getInitials('elon musk junior'));