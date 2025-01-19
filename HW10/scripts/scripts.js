// Задание 1

// У вас есть блок синего цвета. При наведении на блок меняйте его цвет на красный, а при уходе — возвращайтесь к исходному.

const blueBlock = document.querySelector('.block');

blueBlock.addEventListener('mouseover', (event) => {
    blueBlock.style.cssText = 'background-color: red';   
});

blueBlock.addEventListener('mouseleave', (event) => {
    blueBlock.style.backgroundColor = '';
});

// Задание 2

// У вас есть блок с id "colorBlock" и кнопка с id "colorButton". При клике на кнопку, измените цвет блока на случайный цвет. Используйте Math.random() для генерации RGB-компонент.

const colorBlock = document.getElementById('colorBlock');
const redButton = document.getElementById('colorButton');

function rgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

redButton.addEventListener('click', (event) => {
    const randomColor = rgbColor();

    colorBlock.style.backgroundColor = randomColor;
});

