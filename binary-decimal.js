//recursive solution

function decToBinary(num){
    //123 //23 //3
    let pwr = `${num}`.length - 1; //2 //1 //0

    //base case
    if(Math.floor(num/10) <= 0){ //12 > 0 //2 > 0 //0 == 0
        return num*2**pwr; //3*2**0=3
    }
    let numArr = `${num}`.split(''); 
    let result = numArr[0]*2**pwr; //1*2**2 = 4 //2*2**1 = 4
    numArr.shift(); //[2,3] //[3]
    let r = parseInt(numArr.join('')); //23 //3

    return result + decToBinary(r); //4 + func(23) -> 4 + func(3) -> 3 
}

console.log(decToBinary(123));
