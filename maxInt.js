function maxInt(arr){
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[0] < arr[i]){
            max = arr[i];
        }
    }

    console.log(max);
    return max;
}

maxInt([3,5,1,7,2,8]);