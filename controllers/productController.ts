import { Request, Response } from 'express';
import { Schema, model } from 'mongoose';
import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

//Zielgruppe
interface Zielgruppe {
  Geschäftsführung: Boolean;
  Umweltbeauftragte: Boolean;
  Fachabteilung: Boolean;
  Mitarbeiter: Boolean;
  'externe Stakeholder': Boolean;
  Behörden: Boolean;
}

const zielgruppeSchema = new Schema<Zielgruppe>(
  {
    Geschäftsführung: { type: Boolean, required: true, default: false },
    Umweltbeauftragte: { type: Boolean, required: true, default: false },
    Fachabteilung: { type: Boolean, required: true, default: false },
    Mitarbeiter: { type: Boolean, required: true, default: false },
    'externe Stakeholder': { type: Boolean, required: true, default: false },
    Behörden: { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

//Anwendungsbereich
interface Anwendungsbereich {
  Gesetzeskonformität: Boolean;
  Zertifizierung: Boolean;
  Ökobilanzierung: Boolean;
  Lebenszyklus: Boolean;
  Berichterstattung: Boolean;
  Entscheidungsunterstützung: Boolean;
  Arbeitsschutz: Boolean;
}

const anwendungsbereichSchema = new Schema<Anwendungsbereich>(
  {
    Gesetzeskonformität: { type: Boolean, required: true, default: false },
    Zertifizierung: { type: Boolean, required: true, default: false },
    Ökobilanzierung: { type: Boolean, required: true, default: false },
    Lebenszyklus: { type: Boolean, required: true, default: false },
    Berichterstattung: { type: Boolean, required: true, default: false },
    Entscheidungsunterstützung: {
      type: Boolean,
      required: true,
      default: false,
    },
    Arbeitsschutz: { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

//gradDerIntegrierung
interface GradDerIntegrierung {
  integriert: Boolean;
  'Add-On': Boolean;
  'Stand-Alone': Boolean;
  'SaaS-Lösung': Boolean;
}

const gradDerIntegrierungSchema = new Schema<GradDerIntegrierung>(
  {
    integriert: { type: Boolean, required: true, default: false },
    'Add-On': { type: Boolean, required: true, default: false },
    'Stand-Alone': { type: Boolean, required: true, default: false },
    'SaaS-Lösung': { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

//objektAspekt
interface ObjektAspekt {
  Abfall: Boolean;
  Anlagen: Boolean;
  Gefahrstoffe: Boolean;
  Emissionen: Boolean;
  Energie: Boolean;
  'Stoffe/Stoffströme': Boolean;
  Kosten: Boolean;
}

const objektAspektSchema = new Schema<ObjektAspekt>(
  {
    Abfall: { type: Boolean, required: true, default: false },
    Anlagen: { type: Boolean, required: true, default: false },
    Gefahrstoffe: { type: Boolean, required: true, default: false },
    Emissionen: { type: Boolean, required: true, default: false },
    Energie: { type: Boolean, required: true, default: false },
    'Stoffe/Stoffströme': { type: Boolean, required: true, default: false },
    Kosten: { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

//systemgrenzen
interface Systemgrenzen {
  'Standort/Betrieb': Boolean;
  Prozess: Boolean;
  Produkt: Boolean;
  Zwischenbetrieblich: Boolean;
}

const systemgrenzenSchema = new Schema<Systemgrenzen>(
  {
    'Standort/Betrieb': { type: Boolean, required: true, default: false },
    Prozess: { type: Boolean, required: true, default: false },
    Produkt: { type: Boolean, required: true, default: false },
    Zwischenbetrieblich: { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

//Betrachtungskonzept
interface Betrachtungskonzept {
  Verwaltungszentriert: Boolean;
  Bewertungszentriert: Boolean;
  Managementzentriert: Boolean;
}

const betrachtungskonzeptSchema = new Schema<Betrachtungskonzept>(
  {
    Verwaltungszentriert: { type: Boolean, required: true, default: false },
    Bewertungszentriert: { type: Boolean, required: true, default: false },
    Managementzentriert: { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

interface Product {
  product_id: number;
  account_id: number;
  productName: string;
  // productImage:
  productLink: string;
  productCompany: string;
  productDescription: string;
  zielgruppe: Zielgruppe;
  anwendungsbereich: Anwendungsbereich;
  gradDerIntegrierung: GradDerIntegrierung;
  objektAspekt: ObjektAspekt;
  systemgrenzen: Systemgrenzen;
  betrachtungskonzept: Betrachtungskonzept;
  createdAt: Date;
  updatedAt: Date;
  viewCounter: number;
  isPublished: boolean;
}

export const productSchema = new Schema<Product>(
  {
    account_id: { type: Number, required: true, immutable: true },
    productName: { type: String, required: true },
    // productImage:
    productLink: { type: String, required: true, lowercase: true },
    productCompany: { type: String, required: true, minlength: 3 },
    productDescription: { type: String, required: false },
    zielgruppe: zielgruppeSchema,
    anwendungsbereich: anwendungsbereichSchema,
    gradDerIntegrierung: gradDerIntegrierungSchema,
    objektAspekt: objektAspektSchema,
    systemgrenzen: systemgrenzenSchema,
    betrachtungskonzept: betrachtungskonzeptSchema,
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, default: () => Date.now() },
    viewCounter: { type: Number, default: () => 0 },
    isPublished: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'Product');

export const ProductModel = model<Product>('Product', productSchema);

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

  // filter by acount id
  // query = {
  //   account_id: 10
  // }
  // /my-products?account_id=10

  // START ### FILTER ON SEARCH PAGE ###
  const query: { [key: string]: boolean } = {};
  const zielgruppe = (req.query.zielgruppe as string[]) ?? [];
  const anwendungsbereich = (req.query.anwendungsbereich as string[]) ?? [];
  const gradDerIntegrierung = (req.query.gradDerIntegrierung as string[]) ?? [];
  const objektAspekt = (req.query.objektAspekt as string[]) ?? [];
  const systemgrenzen = (req.query.systemgrenzen as string[]) ?? [];
  const betrachtungskonzept = (req.query.betrachtungskonzept as string[]) ?? [];

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
    query['objektAspekt.AbfEmissionenall'] = true;
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

  productSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
  });

  try {
    await createNewProduct.save();
  } catch (e) {
    res.status(500).send(e);
    return;
  }

  return res.status(201).send(createNewProduct);
}

/************************************************************************************************/
//PUT / UPDATE
export async function updateProduct(req: Request, res: Response) {
  try {
    const product = await ProductModel.findOneAndUpdate(
      { product_id: req.body.product_id },
      req.body,
      { new: true }
    ).exec();
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
      product_id: req.body.product_id,
    }).exec();
    return res.status(202).send('product successfully deleted');
  } catch (e) {
    res.status(500).send(e);
    return;
  }
}
