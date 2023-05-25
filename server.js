const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', false);

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

// const DB_HOSTS =
//   'mongodb+srv://Vitalij:e7oPBvy0KkIm9U8u@cluster0.jelze2k.mongodb.net/?retryWrites=true&w=majority';
