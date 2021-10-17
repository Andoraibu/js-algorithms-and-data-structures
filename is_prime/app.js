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

// console.log(isPrime_1(4));
// console.log(isPrime_1(5));

//ряд вверху кроме 2 и 3 паттерн считается как 6*k +- 1, т.е.
//6*1-1 = 5, 6*1+1 = 7, 6*2-1 = 11, 6*2+1=13 и тд.
function isPrime2(n){ //O(sqrt(n)) - much faster.
    if(n <= 1) return false;
    if(n <= 3) return true;
    //пропускаем следующие 5 номеров
    if(n % 2 == 0 || n % 3 == 0) return false;

    for(let i = 5; i*i < n; i+=6){
        if(n % i == 0 || n % (i + 2) == 0){
            return false;
        }

        return true;
    }

}