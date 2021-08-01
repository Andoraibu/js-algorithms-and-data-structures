//-32 = 5
// 99 = 18

function getSumOfDigits(n){
    return Math.abs(n)
            .toString()
            .split('')
            .reduce((acc, i) => {
                return acc += +i;
            }, 0)
}

let x = getSumOfDigits(-32);
console.log(x);