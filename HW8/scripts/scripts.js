// Задание 1

// Создайте функцию, которая принимает два числа в качестве параметров и возвращает их сумму, для второго параметра определите значение по умолчанию. Затем вызовите функцию и выведите результат в консоль.

const addNum = (a, b=7) => {
    return a + b;
}

console.log(addNum (5) );

// Задача 2


// Создайте массив numbers с несколькими числами. Напишите функцию calculateSum, которая принимает массив и возвращает сумму всех его элементов, не используя методы массивов.

const numbers = [15, 23, 44, 8, 37, 55];

function calculateSum (arr) {
    let sumNumbers = 0; 
    for (let i = 0; i < arr.length; i++) {
        sumNumbers += arr[i];
    }    
    return sumNumbers;
}

console.log(calculateSum(numbers) );

// Задача 3 *


// Создайте массив students с объектами студентов (имя, возраст, курс). Напишите функцию displayStudentInfo, которая принимает студента и выводит его информацию в консоль.

const students = [
    {name: 'Aleksandr', age: 23, course: 1 },
    {name: 'Anna', age: 27, course: 5 },
    {name: 'Daniel', age: 25, course: 3 },
];

function studentInfo (student) {
    console.log(`Имя: ${student.name}, Возраст: ${student.age}, Курс: ${student.course}`);
}

students.forEach(student => {
    studentInfo(student);
});

