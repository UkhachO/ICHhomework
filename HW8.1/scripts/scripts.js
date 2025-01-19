// Задание 1

//Создайте функцию, которая принимает массив чисел в качестве параметра и возвращает произведение всех элементов массива. Затем вызовите функцию и выведите результат в консоль.

function calc (arr) {
    let firstNum = 1;
    for (let i = 0; i < arr.length; i++) {
        firstNum *= arr[i];
    }
    return firstNum;
}

const numMass = [25, 15, 8];

const result = calc(numMass);

console.log(`Result: ${result}`);

// Задание 2

// Сумма элементов массива: Создайте массив чисел. Напишите код, который использует цикл while для подсчета суммы всех элементов массива.

const numbers = [35, 87, 14, 52];

let sum = 0;
let i = 0;

while(i < numbers.length) {
    sum += numbers[i];
    i++
}

console.log (`Сумма: ${sum}`);

