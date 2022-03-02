import express from 'express';
import indexController from './controllers/indexController';
import {listAccount, createAccount, updateAccount, deleteAccount } from './controllers/accountController';
import cors from 'cors';
import mongoose, { Mongoose } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { listProduct, createProduct, updateProduct, deleteProduct } from './controllers/productController';
import productMigration from './migrations/productMigration';
// rest of the code remains same
const app = express();
app.use(cors({
  origin: '*',
}))

app.use(express.json()) // for parsing application/json

const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/accounts', listAccount);
app.post('/accounts', createAccount);
app.put('/accounts', updateAccount);
app.delete('/accounts', deleteAccount);

app.get('/products', listProduct);
app.post('/products', createProduct);
app.put('/products', updateProduct);
app.delete('/products', deleteProduct);

//product migration
app.post('/migration/products', productMigration);

mongoose.connect('mongodb://mongo:27017/')
.catch(function(){
  process.exit(1);
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});