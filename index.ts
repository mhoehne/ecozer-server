import express from 'express';
import {
  listAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  GetOneAccount,
} from './controllers/accountController';
import {
  listProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from './controllers/productController';
import cors from 'cors';
import mongoose from 'mongoose';
import productMigration from './migrations/productMigration';
import accountMigration from './migrations/accountMigration';
import { checkAuthentication } from './controllers/authenticationController';

// rest of the code remains same
const app = express();
app.use(
  cors({
    origin: '*',
  })
);

// for parsing application/json
app.use(express.json());

const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

// ACCOUNT
app.get('/accounts', listAccount);
app.get('/accounts/:email', GetOneAccount);
app.post('/accounts', createAccount);
app.put('/accounts', updateAccount);
app.delete('/accounts', deleteAccount);

// PRODUCT
app.get('/products', listProduct);
app.post('/products', createProduct);
app.put('/products', updateProduct);
app.delete('/products', deleteProduct);

//product migration
app.post('/migration/products', productMigration);

//account migration
app.post('/migration/accounts', accountMigration);

//authentication
app.post('/authentication', checkAuthentication);

mongoose.connect('mongodb://mongo:27017/').catch(function () {
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
