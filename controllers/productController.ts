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
  Berichterstattung: Boolean;
  Entscheidungsunterstützung: Boolean;
  Arbeitsschutz: Boolean;
}

const anwendungsbereichSchema = new Schema<Anwendungsbereich>(
  {
    Gesetzeskonformität: { type: Boolean, required: true, default: false },
    Zertifizierung: { type: Boolean, required: true, default: false },
    Ökobilanzierung: { type: Boolean, required: true, default: false },
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
}

const systemgrenzenSchema = new Schema<Systemgrenzen>(
  {
    'Standort/Betrieb': { type: Boolean, required: true, default: false },
    Prozess: { type: Boolean, required: true, default: false },
    Produkt: { type: Boolean, required: true, default: false },
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
  account_id: string;
  productName: string;
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
  isPublished: boolean;
}

export const productSchema = new Schema<Product>(
  {
    account_id: { type: String, required: false, immutable: false },
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
    isPublished: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'Product');

export const ProductModel = model<Product>('Product', productSchema);

/************************************************************************************************/
//GET / READ
export async function listProduct(_req: Request, res: Response) {
  const products = await ProductModel.find({});

  res.send({ products });
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
