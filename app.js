function bubbleSort(array)
{
    for(let i = array.length; i > 0; i -= 1)
    {
        let noSwaps = true; //optimization, to not check all numbers that has already been checked

        for(let j = 0; j < i - 1; j += 1)
        {

            if(array[j] > array[j+1])
            {
                //SWAP
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                noSwaps = false;
            }

            
        }

        if(noSwaps) break;

    }

    return array;
}

let x = bubbleSort([23, 54, 65, -12, 0, 5, 87, 331, 6]);
console.log(x);