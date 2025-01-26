const predefinedLogin = 'admin';
const predefinedPassword = '123456';

function validateLogin() {
    const loginInput = document.getElementById('login').value;
    const passwordInput = document.getElementById('password').value;
    const message = document.getElementById('message');

    if (loginInput === predefinedLogin && passwordInput === predefinedPassword) {
        message.style.color = 'green';
        message.textContent = 'Вы успешно войшли!'
    }else {
        message.style.color = 'red';
        message.textContent = 'Ошибка. Неправильный логин или пароль!'
    }
}
