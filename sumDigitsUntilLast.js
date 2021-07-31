//iterative solution

//345
//3+4+5 = 12
//1+2 = 3
//return 3

function iterSearch(num){

    let str = '' + num;
    if(str.length <= 1){
        return num;
    }
    let result;
    let count = str.length;
    while(count > 1){
        result = str.split('').reduce((acc, i) => {
            return acc += parseInt(i);
        }, 0);
        str = `${result}`;
        count = str.length;
    }

    return result;
}

console.log(iterSearch(87653));