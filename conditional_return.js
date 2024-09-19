function isEven(number){
    if(number % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(5));
console.log('----------------');
console.log(isEven(10));


// Other way

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(5));
console.log('-------------');
console.log(isOdd(12));