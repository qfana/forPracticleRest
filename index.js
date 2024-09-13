import express from 'express';

const PORT = 7788;

const app = express();

app.use(express.json()); // Парсинг передаваемой информации, преобразовывает в JSON формат

app.post('/', (req, res) => {
  console.log(req.body); // Выводит GET запрос человека (postman) предварительно запрос проходит через парсер (7 строка)
  res.status(200).json('Сервер работает'); // 200 = выполнено (для гет запроса, в данном случае не нужно, оставил что бы не забыть)
});

app.listen(PORT, () => { console.log(`Server started, port: ${PORT}`); }); // В случае если сервер запустился, без ошибки, выдает данный калбекк