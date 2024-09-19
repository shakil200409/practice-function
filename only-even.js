function onlyEvenNumbers(numbers) {
  let sum = 0;
  const evens = [];
  for (num of numbers) {
    if(num % 2 ==0){
        console.log(num);
        evens.push(num);
    }
}
return evens;
}

const numbers = [5, 7, 9, 8, 6];
onlyEvenNumbers(numbers);

const evens = onlyEvenNumbers(numbers);
console.log(evens);


// Sum of even numbers
function sumOfEvens(numbers){
    let sum = 0;
    for(number of numbers){
        if(number % 2 === 0){
            sum = sum + number;
        }
    }
    return sum;
}

const numArray = [10, 15, 20, 21, 38];
const sum = sumOfEvens(numArray);
console.log(sum);