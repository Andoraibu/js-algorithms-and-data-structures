//сумма чисел -- рекурсивно

function sumToOne(n){
    //base case
    if(n == 1) return n;

    return n + sumToOne(n - 1);
}


export default sumToOne;