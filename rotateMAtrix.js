var rotateMatrix = arr => {

    //let out = new Array(arr[0].length).fill([]);
    //НЕЛЬЗЯ
    /*
    из документации
    Если аргумент value​​​​​ является объектом, то метод fill заполнит массив ссылками на этот объект.
    Поэтому на выходе у меня получалось [[1,4],[1,4],[1,4]]
    */
    //let out = [[], [], []]
    let out = Array.from(Array(arr[0].length), () => []);
  
    for(let y = 0; y < arr.length; y++){
       for(let x = 0; x < arr[0].length; x++){
         out[x][y] = arr[y][Math.abs(arr[0].length-1-x)]
         console.log(x, y)
         console.log(out)
       }
    }
    console.log(out)
  
   }
  
  rotateMatrix(
    [[1,2,3],
    [4,5,6]])
  //[[3,6],
  // [2,5],
  // [1,4]]
  
  /* 
  out[0][0] = in[0][2]
  out[0][1] = in[1][2]
  
  out[1][0] = in[0][1]
  out[1][1] = in[1][1]
  
  out[2][0] = in[0][0]
  out[2][1] = in[1][0]
  */
  /*
  first loop
  out[0][0] = in[0][2]
  out[1][0] = in[0][1]
  out[2][0] = in[0][0]
  
  second loop
  out[0][1] = in[1][2]
  out[1][1] = in[1][1]
  out[2][1] = in[1][0]
  
  out[x][y] = in[y][x]
  
  for(let y = 0; y < in.length; y++){
    for(let x = 0; x < in[0].length; x++){
      out[x][y] = in[y][Math.abs(in[0].length-1-x)]
    }
  }
  
   */
  /*
  y=0
  x=0
  out[0][0] = in[0][2]
  y=0
  x=1
  out[1][0] = in[0][1] //3-1-1
  y=0
  x=2
  out[2][0] = in[0][0] //3-1-2
  y=1
  x=0
  out[0][1] = in[1][2] //3-1-0
   */