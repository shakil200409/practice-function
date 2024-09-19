function stringSize(str){
    const size = str.length;
    console.log(str, 'Length:', size);

    // Checking the length is even or odd
    if(size %2 ===0){
        console.log("The length is Even");
    }
    else{
        console.log('The length is not even');
    }
}

// stringSize(`Sylhet`);
// stringSize('Dhaka');


// For boolean
function doubleOrTriple(number, doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(10, false));

// function for object
function getAge(person){
    const age = person.age;
    return age;
}

const shakil ={
    fullName: "Shakil Ahmed",
    age: 20,
    education: 'Diploma',
    home: "Sylhet"
}
console.log(getAge(shakil));