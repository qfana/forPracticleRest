import express from 'express';
import mongoose from 'mongoose';
import router from './Router.js';

const PORT = 7788;
const DB_URL = 'mongodb+srv://qfana2123:TWiTwlbrrp8qgwZ3@cluster0.9eyu7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const app = express();

app.use(express.json()); // Парсинг передаваемой информации, преобразовывает в JSON формат
app.use('/api', router);


async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => { console.log(`Server started, port: ${PORT}`); }); // В случае если сервер запустился, без ошибки, выдает данный калбекк
  } catch (e) {
    console.log(e);

  }

}
// 1
startApp(); 