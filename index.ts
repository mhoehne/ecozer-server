import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import fileUpload from 'express-fileupload';
import mongoose from 'mongoose';

import {
    createAccount, deleteAccount, GetOneAccount, GetOneAccountByID, listAccount, updateAccount
} from './controllers/accountController';
import { checkAuthentication } from './controllers/authenticationController';
import { getFile, postFile } from './controllers/fileController';
import {
    deleteNotification, listNotifications, markAsReadNotification
} from './controllers/notificationController';
import {
    assignProduct, createProduct, deleteProduct, getProduct, incrementNewCount, listProduct,
    publishProduct, rejectProduct, unpublishProduct, updateProduct
} from './controllers/productController';
import {
    createReportingEntry, deleteReportingEntry, getReport, listReportings
} from './controllers/reportingController';
import {
    createSurveyEntry, deleteSurveyEntry, getSurveyEntry, listSurveyEntries
} from './controllers/surveyController';
import accountMigration from './migrations/accountMigration';
import productMigration from './migrations/productMigration';

// rest of the code remains same
const app = express();
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://141.45.204.38:3000', 'http://buis.f2.htw-berlin.de'],
    credentials: true,
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

// NOTIFICATION
app.get('/notifications', listNotifications);
app.post('/notifications/:id', markAsReadNotification);
app.delete('/notifications/:id', deleteNotification);

// PRODUCT
app.get('/products', listProduct);
app.post('/products', createProduct);
app.post('/products/assign', assignProduct);
app.put('/products', updateProduct);
app.delete('/products', deleteProduct);
app.get('/products/:id', getProduct);
app.post('/products/:_id/view', incrementNewCount);
// PRODUCT STATES
app.post('/products/:id/reject', rejectProduct);
app.post('/products/:id/publish', publishProduct);
app.post('/products/:id/unpublish', unpublishProduct);

// REPORTING
app.get('/reportings', listReportings);
app.get('/reportings/:id', getReport);
app.post('/reportings', createReportingEntry);
app.delete('/reportings', deleteReportingEntry);

// SURVEY
app.get('/user-survey', listSurveyEntries);
app.get('/user-survey/:id', getSurveyEntry);
app.post('/user-survey', createSurveyEntry);
app.delete('/user-survey', deleteSurveyEntry);

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
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  console.log(`${process.env.JWTSECRET}`)
});
