function getShortest(str){
    return str.split(' ').sort((a,b) => a.length - b.length)[0];
}

console.log(getShortest("Just in time"));