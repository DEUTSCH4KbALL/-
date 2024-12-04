// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5500;

app.use(bodyParser.json());

// Обработчик для подписки
app.post('/subscribe', (req, res) => {
    const email = req.body.email;
    console.log(`Подписка на email: ${email}`);
    res.status(200).send('Подписка успешна!');
});

// Обработчик для отдачи index.html
app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/index-server.html'); // Убедитесь, что путь правильный
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://127.0.0.1:${PORT}`);
});