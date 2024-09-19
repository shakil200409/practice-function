function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiply = sum * diff;
    const result = multiply / 2;
    return result;
}

const result = doMath(10, 0);
console.log(result);

console.log('---------------');

console.log(doMath(10, 20));