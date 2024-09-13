import mongoose from "mongoose"; // Импортируем монгус (оболка монго ДБ)

const Post = new mongoose.Schema({ // Создаем переменнуб POST являющуеся схемой монгуса
  author: { type: String, required: true }, // Поле в котормо мы храним автора запроса
  title: { type: String, required: true }, // Поле в котормо мы храним описание запроса
  content: { type: String, required: true }, // Поле в котормо мы храним контент запроса
  pictures: { type: String } // Поле в котормо мы хрним изображение (название только ибо саму фотку дорого хранить по вместимости)
});

export default mongoose.model('Post', Post); // Экспортируем как дефолтное значение модель монгуса (при импорте не нужно будет указывать что именно мы хотим импортировать, т.к. при экспорте применяется значение дефолт)
