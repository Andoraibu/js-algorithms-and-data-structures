let calculator = {
    a : undefined,
    b : undefined,
    read: function(x, y){
        this.a = x;
        this.b = y;
    },

    sum(){
        if (this.a !== undefined || this.b !== undefined){
            return this.a + this.b;
        }else{
            console.log("Provide two values");
        }
    }
}

calculator.read(10, 12);
console.log(calculator.sum());