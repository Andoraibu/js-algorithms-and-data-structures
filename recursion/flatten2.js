function flatten2(arr){
    let result = [];
    for(let i = 0; i < arr.length; i += 1){
        if(Array.isArray(arr[i])){
            let flatList = flatten2(arr[i]);
            result = result.concat(flatList);
        }else{
            result.push(arr[i]);
        }
    }

    return result;
}

export default flatten2;