const list = document.querySelector('.list');
const listItem = list.getElementsByTagName('li');

if ( listItem.length > 2 ) {
    const newItem = document.createElement('li');
    newItem.textContent = 'Третий елемент (Новый)';

    const lastItem = listItem[listItem.length - 1];
    list.replaceChild(newItem, lastItem);
};