import express from 'express';
import indexController from './controllers/indexController';
import accountController from './controllers/accountController';
import cors from 'cors';
// rest of the code remains same
const app = express();
app.use(cors({
  origin: '*',
}))
const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.get('/accounts', accountController);

const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/todo', {useNewUrlParser: true}).catch(function(){
  process.exit(1)
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});