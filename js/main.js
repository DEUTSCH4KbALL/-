
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // Додавання обробника події для кнопки реєстрації
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    // Додавання обробника події для кнопки входу
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });

    // Обробка форми реєстрації
    const registerForm = document.querySelector('.form-container.sign-up form');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Запобігаємо стандартній відправці форми

        const name = registerForm.querySelector('input[type="text"]').value; // Отримуємо ім'я
        const email = registerForm.querySelector('input[type="email"]').value; // Отримуємо email
        const password = registerForm.querySelector('input[type="password"]').value; // Отримуємо пароль

        // Зберігаємо дані в localStorage
        if (name && email && password) {
            localStorage.setItem('userName', name); // Зберігаємо ім'я
            localStorage.setItem('userEmail', email); // Зберігаємо email
            localStorage.setItem('userPassword', password); // Зберігаємо пароль
            console.log('Дані збережено:', name, email, password); // Лог для перевірки
            alert('Реєстрація успішна! Тепер ви можете увійти.'); // Повідомлення про успіх
            container.classList.remove("active"); // Показати форму входу
        } else {
            alert('Будь ласка, введіть коректні дані.'); // Повідомлення про помилку
        }
    });

    // Обробка форми входу
    // Обробка форми входу
    const signInForm = document.querySelector('.form-container.sign-in form');

    signInForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Запобігаємо стандартній відправці форми

        // Отримуємо значення полів вводу
        const email = signInForm.querySelector('input[type="email"]').value.trim(); // Отримуємо email
        const password = signInForm.querySelector('input[type="password"]').value.trim(); // Отримуємо пароль

        // Отримуємо збережені дані з localStorage
        const storedEmail = localStorage.getItem('userEmail'); // Отримуємо збережений email
        const storedPassword = localStorage.getItem('userPassword'); // Отримуємо збережений пароль

        // Перевіряємо, чи співпадають введені дані з збереженими
        if (email === storedEmail && password === storedPassword) {
            console.log('Дані співпадають, перенаправляємо на index2.html');
            window.location.href = 'index2.html'; // Перенаправлення на головну сторінку
        } else {
            alert('Неправильне ім\'я, email або пароль.'); // Повідомлення про помилку
        }
    });

    // Функція для відображення даних профілю на сторінці реєстрації
    displayProfileData();

    function displayProfileData() {
        const username = localStorage.getItem('userName'); // Виправлено на 'userName'
        const email = localStorage.getItem('userEmail'); // Виправлено на 'userEmail'

        const regUsernameElement = document.getElementById('regUsername');
        const regEmailElement = document.getElementById('regEmail');

        if (regUsernameElement && username) {
            regUsernameElement.textContent = username;
        }
        if (regEmailElement && email) {
            regEmailElement.textContent = email;
        }
    }
});