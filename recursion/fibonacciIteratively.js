function iterFib(n){
    let result = [0, 1];
    if(n <= 1) return n;
    if(n < 0) return "The number should be positive.";

    for(let i = 2; i <= n; i += 1){
        let prev1 = result[i - 1];
        let prev2 = result[i - 2];
        result.push(prev1 + prev2);
    }
    //return result[n]
    return result;
}

export default iterFib;