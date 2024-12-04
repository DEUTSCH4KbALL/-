function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Отримуємо поточний кошик
    if (cart[product]) {
        cart[product]++; // Якщо продукт уже в кошику, збільшуємо його кількість
    } else {
        cart[product] = 1; // Якщо продукт новий, додаємо його з кількістю 1
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Оновлюємо локальне сховище
    alert(product + ' додано до кошика!');
    updateCartCount(); // Оновлюємо кількість товарів у кошику після додавання
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || {}; // Отримуємо кошик
    let count = 0; // Початкова кількість товарів
    for (let product in cart) {
        count += cart[product]; // Підраховуємо кількість усіх товарів
    }
    document.getElementById('cart-count').textContent = count; // Встановлюємо кількість у полі Кошик (0)
}
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // Знімаємо клас 'active' з усіх посилань
            links.forEach(link => link.classList.remove("active"));
            // Додаємо клас 'active' до вибраного посилання
            this.classList.add("active");
        });
    });
});
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        // Видаляємо клас "active" з усіх пунктів
        document.querySelectorAll('nav ul li a').forEach(item => {
            item.classList.remove('active');
        });

        // Додаємо клас "active" до поточного пункту
        this.classList.add('active');

        // Отримуємо напрямок анімації з data-direction
        const direction = this.getAttribute('data-direction');

        // Змінюємо transform-origin залежно від напрямку
        if (direction === 'right') {
            this.querySelector('::after').style.transformOrigin = 'left';
        } else {
            this.querySelector('::after').style.transformOrigin = 'right';
        }
    });
});
//
const toggleSwitch = document.getElementById('toggle-switch');
const languageSwitch = document.getElementById('language-switch');

// Перевірка збереження теми та мови при перезавантаженні
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedLanguage = localStorage.getItem('language');

    if (savedTheme) {
        document.body.classList.add(savedTheme);
        if (savedTheme === 'theme-dark') {
            toggleSwitch.checked = true;
        }
    }

    toggleSwitch.addEventListener('change', () => {
        if (toggleSwitch.checked) {
            document.body.classList.add('theme-dark');
            localStorage.setItem('theme', 'theme-dark');
        } else {
            document.body.classList.remove('theme-dark');
            localStorage.setItem('theme', 'theme-light');
        }
    });


    if (savedLanguage) {
        document.documentElement.lang = savedLanguage;
        if (savedLanguage === 'uk') {
            languageSwitch.checked = true;
            translateToUkrainian();
        } else {
            translateToEnglish();
        }
    }
});

// Функція для перекладу на українську мову
function translateToUkrainian() {
    const element = document.querySelector('.box'); // Знайти елемент з класом 'box'
    if (element) {
        element.textContent = 'Ваш текст на українській мові'; // Встановити текст українською
    }
}

// Функція для перекладу на англійську мову
function translateToEnglish() {
    const element = document.querySelector('.box'); // Знайти елемент з класом 'box'
    if (element) {
        element.textContent = 'Ваш текст на англійській мові'; // Встановити текст англійською
    }
}

// Обробник зміни мови
languageSwitch.addEventListener('change', () => {
    if (languageSwitch.checked) {
        document.documentElement.lang = 'uk';
        localStorage.setItem('language', 'uk');
        translateToUkrainian();
    } else {
        document.documentElement.lang = 'en';
        localStorage.setItem('language', 'en');
        translateToEnglish();
    }
});

// Функція для зміни мови сторінки
function translatePage(language) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);

    window.googleTranslateElementInit = function () {
        try {
            new google.translate.TranslateElement({
                pageLanguage: 'uk',
                includedLanguages: 'uk,en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        } catch (error) {
            console.error("Помилка ініціалізації Google Translate:", error);
        }
    };

    var translateElement = document.getElementById('google_translate_element');
    if (translateElement) {
        translateElement.remove();
    }

    var newTranslateElement = document.createElement('div');
    newTranslateElement.id = 'google_translate_element';
    newTranslateElement.style.textAlign = 'center'; // Центрування елемента
    document.body.insertBefore(newTranslateElement, document.body.firstChild);
    newTranslateElement.style.textAlign = 'center';
}

// Додатковий обробник для зміни мови
document.getElementById('language-switch').addEventListener('change', function () {
    if (this.checked) {
        translatePage('en');
    } else {
        translatePage('uk');
    }
});