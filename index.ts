import express from 'express';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {
  listAccount,
  createAccount,
  updateAccount,
  deleteAccount,
  GetOneAccount,
  GetOneAccountByID,
} from './controllers/accountController';
import {
  listProduct,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  rejectProduct,
  publishProduct,
  unpublishProduct,
  pendProduct,
  incrementNewCount,
} from './controllers/productController';
import cors from 'cors';
import mongoose from 'mongoose';
import productMigration from './migrations/productMigration';
import accountMigration from './migrations/accountMigration';
import { checkAuthentication } from './controllers/authenticationController';
import { getFile, postFile } from './controllers/fileController';

// rest of the code remains same
const app = express();
app.use(
  cors({
    origin: '*',
  })
);

// for parsing application/json
app.use(express.json());

app.use(
  fileUpload({
    createParentPath: true,
  })
);

//add other middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = 8000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

//File
app.get('/files/:filename', getFile);
app.post('/files', postFile);

// ACCOUNT
app.get('/accounts', listAccount);
app.get('/accounts/:email', GetOneAccount);
app.get('/accounts/:id', GetOneAccountByID);
app.post('/accounts', createAccount);
app.put('/accounts', updateAccount);
app.delete('/accounts', deleteAccount);

// PRODUCT
app.get('/products', listProduct);
app.post('/products', createProduct);
app.put('/products', updateProduct);
app.delete('/products', deleteProduct);
app.get('/products/:id', getProduct);
app.post('/products/:_id/view', incrementNewCount);
// PRODUCT STATES
app.post('/products/:id/reject', rejectProduct);
app.post('/products/:id/publish', publishProduct);
app.post('/products/:id/unpublish', unpublishProduct);
app.post('/products/:id/pend', pendProduct);

//product migration
app.post('/migration/products', productMigration);

//account migration
app.post('/migration/accounts', accountMigration);

//authentication
app.post('/authentication', checkAuthentication);

mongoose
  .connect(`mongodb://${process.env.MONGODB_HOSTNAME}:27017/`)
  .catch(function () {
    process.exit(1);
  });

app.listen(PORT, () => {
  console.log(`??????[server]: Server is running at https://localhost:${PORT}`);
});
