// 1.

let numbers = [1, 3, 2, 4, 5, 6, 7];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('---------------------------------------')

// 2.

let randomNumbers = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];

for (let a = 0; a < randomNumbers.length; a++) {
    if (randomNumbers[a] > 8 && randomNumbers[a] < 20) {
        console.log(randomNumbers[a]);
    }
}

console.log('---------------------------------------')

// 3.

let minNumbers = [4, 2, 8, 6, 12, 5, 21, 24, 20, 22, 8, 7, 6, 9];

let min = minNumbers[0];

for(let i = 0; i < minNumbers.length; i++) {
    if(minNumbers[i] < min) {
        min = minNumbers[i]
    }
}

console.log(min);

console.log('---------------------------------------')

// 4.

let value = [1, 3, 2, 4, 5, 6, 7];

value[1] = 2;
value[2] = 3;

console.log(value);

console.log('---------------------------------------')

// 5.

let strings = ['apple', 'banana', 'watermelon', 'cherry', 'blueberry'];

let lenghtStrings = strings[0]; 

for (let i = 0; i < strings.length; i++) {
    if(strings[i].length > lenghtStrings.length) {
        lenghtStrings = strings[i]
    }
}

console.log(lenghtStrings);