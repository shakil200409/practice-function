function tenTimes(number){
    const result = number * 10;
    return result;
}

// cutHalf

function cutHalf(number){
    const result = number / 2;
    return result;
}


// call function

tenTimes(10);

console.log(tenTimes(50));

const output = cutHalf(884);
console.log(output);


// using return without defining any variable
function add(num1, num2){
    return num1 + num2;
}

const bill = add(10, 500);
console.log(bill);