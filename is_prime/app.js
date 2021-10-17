//является ли число prime, т.е. не делится ни на два, ни на три, только на себя.
//1,3,5,7,9,11,13,17,22,29...
//solution 1 в лоб
function isPrime_1(n){
    if(n <= 1) return false;
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime_1(4));
