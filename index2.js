const readline = require("readline-sync");
var res = 0;
console.log(`Enter operator
    1 - add(+)
    2 - sub(-)
    3 - mul(*)
    4 - div(/)
    `)
do{
    var num =  Number(readline.question());
    var operator = Number(readline.question());
    end = false;
    switch(operator) {
        case 1:
             res += num;
            console.log(`${res}`);
            break;
    
        case 2:
             res -= num;
            console.log(`${res}`);
            break;
    
        case 3:
             res *= num;
            console.log(`${res} `);
            break;
    
        case 4:
             res /= num;
            console.log(`${res}`);
            break;
        case '=':
            end = true;
            break       
    
}

            if(end){
               break; 
            }
}while(true)

