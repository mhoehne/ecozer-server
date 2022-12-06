import { Request, Response } from 'express';

import { ProductModel, productSchema } from '../models/productModel';
import { AccountModel } from './accountController';
import { NotificationModel } from './notificationController';

/************************************************************************************************/
//GET / READ
export async function listProduct(req: Request, res: Response) {
  const sort: { [key: string]: number } = {};
  if (req.query.sortBy === 'createdAt') {
    sort.createdAt = req.query.sortOrder === 'asc' ? 1 : -1;
  }
  if (req.query.sortBy === 'viewCounter') {
    sort.viewCounter = req.query.sortOrder === 'asc' ? 1 : -1;
  }

  // START ### FILTER ON SEARCH PAGE ###
  const query: {
    [key: string]: boolean | number | string | RegExp;
  } = {};
  const productName = (req.query.productName as string) ?? '';
  const state = (req.query.state as string) ?? '';
  const account_id = (req.query.account_id as string) ?? '';
  const zielgruppe = (req.query.zielgruppe as string[]) ?? [];
  const anwendungsbereich = (req.query.anwendungsbereich as string[]) ?? [];
  const gradDerIntegrierung = (req.query.gradDerIntegrierung as string[]) ?? [];
  const objektAspekt = (req.query.objektAspekt as string[]) ?? [];
  const systemgrenzen = (req.query.systemgrenzen as string[]) ?? [];
  const betrachtungskonzept = (req.query.betrachtungskonzept as string[]) ?? [];

  if (productName !== '') {
    query['productName'] = new RegExp(productName, 'i');
  }

  if (state.length !== 0) {
    query['state'] = state;
  }

  if (account_id.length !== 0) {
    query['account_id'] = parseInt(account_id);
  }

  // ZIELGRUPPE
  if (zielgruppe.includes('Geschäftsführung')) {
    query['zielgruppe.Geschäftsführung'] = true;
  }

  if (zielgruppe.includes('Umweltbeauftragte')) {
    query['zielgruppe.Umweltbeauftragte'] = true;
  }

  if (zielgruppe.includes('Fachabteilung')) {
    query['zielgruppe.Fachabteilung'] = true;
  }

  if (zielgruppe.includes('Mitarbeiter')) {
    query['zielgruppe.Mitarbeiter'] = true;
  }

  if (zielgruppe.includes('externe Stakeholder')) {
    query['zielgruppe.externe Stakeholder'] = true;
  }

  if (zielgruppe.includes('Behörden')) {
    query['zielgruppe.Behörden'] = true;
  }

  // ANWENDUNGSBEREICH
  if (anwendungsbereich.includes('Gesetzeskonformität')) {
    query['anwendungsbereich.Gesetzeskonformität'] = true;
  }
  if (anwendungsbereich.includes('Zertifizierung')) {
    query['anwendungsbereich.Zertifizierung'] = true;
  }
  if (anwendungsbereich.includes('Ökobilanzierung')) {
    query['anwendungsbereich.Ökobilanzierung'] = true;
  }
  if (anwendungsbereich.includes('Lebenszyklus')) {
    query['anwendungsbereich.Lebenszyklus'] = true;
  }
  if (anwendungsbereich.includes('Berichterstattung')) {
    query['anwendungsbereich.Berichterstattung'] = true;
  }
  if (anwendungsbereich.includes('Entscheidungsunterstützung')) {
    query['anwendungsbereich.Entscheidungsunterstützung'] = true;
  }
  if (anwendungsbereich.includes('Arbeitsschutz')) {
    query['anwendungsbereich.Arbeitsschutz'] = true;
  }

  // GRAD DER INTEGRIERUNG / INTEGRIERUNGSGRAD
  if (gradDerIntegrierung.includes('integriert')) {
    query['gradDerIntegrierung.integriert'] = true;
  }
  if (gradDerIntegrierung.includes('Add-On')) {
    query['gradDerIntegrierung.Add-On'] = true;
  }
  if (gradDerIntegrierung.includes('Stand-Alone')) {
    query['gradDerIntegrierung.Stand-Alone'] = true;
  }
  if (gradDerIntegrierung.includes('SaaS-Lösung')) {
    query['gradDerIntegrierung.SaaS-Lösung'] = true;
  }

  // OBJEKTASPEKT
  if (objektAspekt.includes('Abfall')) {
    query['objektAspekt.Abfall'] = true;
  }
  if (objektAspekt.includes('Anlagen')) {
    query['objektAspekt.Anlagen'] = true;
  }
  if (objektAspekt.includes('Gefahrstoffe')) {
    query['objektAspekt.Gefahrstoffe'] = true;
  }
  if (objektAspekt.includes('Emissionen')) {
    query['objektAspekt.Emissionen'] = true;
  }
  if (objektAspekt.includes('Energie')) {
    query['objektAspekt.Energie'] = true;
  }
  if (objektAspekt.includes('Stoffe/Stoffströme')) {
    query['objektAspekt.Stoffe/Stoffströme'] = true;
  }
  if (objektAspekt.includes('Kosten')) {
    query['objektAspekt.Kosten'] = true;
  }

  // SYSTEMGRENZEN
  if (systemgrenzen.includes('Standort/Betrieb')) {
    query['systemgrenzen.Standort/Betrieb'] = true;
  }
  if (systemgrenzen.includes('Prozess')) {
    query['systemgrenzen.Prozess'] = true;
  }
  if (systemgrenzen.includes('Produkt')) {
    query['systemgrenzen.Produkt'] = true;
  }
  if (systemgrenzen.includes('Zwischenbetrieblich')) {
    query['systemgrenzen.Zwischenbetrieblich'] = true;
  }

  //BETRACHTUNGSKONZEPT
  if (betrachtungskonzept.includes('Verwaltungszentriert')) {
    query['betrachtungskonzept.Verwaltungszentriert'] = true;
  }
  if (betrachtungskonzept.includes('Bewertungszentriert')) {
    query['betrachtungskonzept.Verwaltungszentriert'] = true;
  }
  if (betrachtungskonzept.includes('Managementzentriert')) {
    query['betrachtungskonzept.Verwaltungszentriert'] = true;
  }

  // END ### FILTER ON SEARCH PAGE ###
  let limit = (req.query.limit as string) ?? '';
  //parseInt(' '.trim() ?0:1) weird error on production
  if (!limit.trim()) {
    limit = '100';
  }

  const products = await ProductModel.find(query)
    .sort(sort)
    .limit(parseInt(limit));

  res.send({ products });
}

export async function getProduct(req: Request, res: Response) {
  const product = await ProductModel.findOne({
    _id: parseInt(req.params.id),
  });

  if (product === null) {
    res.sendStatus(404);
    return;
  }

  res.send(product);
}

/************************************************************************************************/
//POST / CREATE
export async function createProduct(req: Request, res: Response) {
  const createNewProduct = new ProductModel(req.body);
  createNewProduct.state = 'pending';

  const createNewNotification = new NotificationModel({
    account_id: createNewProduct.account_id,
    productName: createNewProduct.productName,
    rejectReason: '',
    createdAt: Date.now(),
    isRead: false,
    messageType: 'pending',
  });

  productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });

  try {
    await createNewProduct.save();
    await createNewNotification.save();
  } catch (e) {
    res.status(500).send(e);
    return;
  }

  return res.status(201).send(createNewProduct);
}

export async function rejectProduct(req: Request, res: Response) {
  const account = await AccountModel.findOne({
    emailAddress: req.cookies.email,
  });
  if (account === undefined || account?.isAdmin === false) {
    res.status(401).send();
    return;
  }
  let product = await ProductModel.findOne({ _id: req.params.id });
  if (product === null || product === undefined) {
    res.status(404).send();
    return;
  }
  if (product?.state !== 'pending') {
    res.status(400).send(req.params.id);
    return;
  }
  product = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    // change the rejection reason to value xy
    { state: 'rejected' },

    { new: true }
  );
  if (product?.state === 'rejected') {
    //SEND NOTIFICATION
    res.status(200).send();
    return;
  }
  res.status(412).send();
}

export async function publishProduct(req: Request, res: Response) {
  const account = await AccountModel.findOne({
    emailAddress: req.cookies.email,
  });
  if (account === undefined || account?.isAdmin === false) {
    res.status(401).send();
    return;
  }
  let product = await ProductModel.findOne({ _id: req.params.id });
  if (product === null || product === undefined) {
    res.status(404).send();
    return;
  }
  if (product?.state !== 'pending') {
    res.status(400).send(req.params.id);
    return;
  }
  product = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    { state: 'published' },
    { new: true }
  );
  if (product?.state === 'published') {
    //SEND NOTIFICATION
    res.status(200).send();
    return;
  }
  res.status(412).send();
}

export async function unpublishProduct(req: Request, res: Response) {
  // in this case everyone (user & admin) can unpublish a product
  let product = await ProductModel.findOne({ _id: req.params.id });
  if (product === null || product === undefined) {
    res.status(404).send();
    return;
  }
  if (product?.state !== 'published') {
    res.status(400).send(req.params.id);
    return;
  }
  product = await ProductModel.findOneAndUpdate(
    { _id: req.params.id },
    { state: 'unpublished' },
    { new: true }
  );
  if (product?.state === 'unpublished') {
    //SEND NOTIFICATION
    res.status(200).send();
    return;
  }
  res.status(412).send();
}

// FEATURE USE CASE:
// if admin updates a product, product state should keep published if state is published
// export async function pendProduct(req: Request, res: Response) {
//   // currently not needed
// }

/************************************************************************************************/
//PUT / UPDATE
export async function updateProduct(req: Request, res: Response) {
  const productBody = { ...req.body, state: 'pending' };
  delete productBody._id;
  try {
    const product = await ProductModel.findOneAndUpdate(
      { _id: req.body._id },
      productBody,
      { new: true }
    ).exec();
    //SEND NOTIFICATION
    return res.status(202).send(product);
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}

export async function incrementNewCount(req: Request, res: Response) {
  try {
    const counter = await ProductModel.findOneAndUpdate(
      {
        _id: parseInt(req.params._id),
      },
      { $inc: { viewCounter: 1 } }
    );
    res.send({ counter, productID: req.params._id });
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}

/************************************************************************************************/
//DELETE
export async function deleteProduct(req: Request, res: Response) {
  try {
    await ProductModel.findOneAndDelete({
      _id: req.body._id,
    }).exec();
    return res.status(202).send('product successfully deleted');
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}
