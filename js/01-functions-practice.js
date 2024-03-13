//STEP 1

function halfNumber(number) {
    const result = number / 2;
    console.log("Half of ${number} is ${result}.");
    return result;
}

halfNumber(5);

//STEP 2

function squareNumber(number) {
    const result = number * number;
    console.log("The result of squaring the number ${number} is ${result}");
    return result;
}
squareNumber(3);
//STEP 3

function percentOf(num1, num2) {
    const result = (num1 / num2) * 100;
    console.log(`${num1} is ${result}% of ${num2}.`);
    return result;
}

percentOf(2, 4);

//STEP 4

function findModulus(num1, num2) {
    const result = num1 % num2;
    console.log("${result} is the modulus of ${num1} and ${num2}.");
    return result;
}
findModulus(4, 10);

//STEP 5