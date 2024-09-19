function sumOfNumbers(numbers){
    let sum = 0;
    for(num of numbers){
        console.log(num);
        sum = sum + num;
    }
    return sum;
}


const numbs = [1, 5, 9, 9, 3];
// sumOfNumbers(numbs);


const sum = (sumOfNumbers(numbs));
console.log(sum);

console.log('------------');

console.log(sumOfNumbers([5, 8, 9, 4, 2]));