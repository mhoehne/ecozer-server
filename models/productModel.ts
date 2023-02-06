import mongoose, { model, Schema } from 'mongoose';
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

const zielgruppeSchema = new Schema(
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

const anwendungsbereichSchema = new Schema(
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

const gradDerIntegrierungSchema = new Schema(
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

const objektAspektSchema = new Schema(
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

const systemgrenzenSchema = new Schema(
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

const betrachtungskonzeptSchema = new Schema(
  {
    Verwaltungszentriert: { type: Boolean, required: true, default: false },
    Bewertungszentriert: { type: Boolean, required: true, default: false },
    Managementzentriert: { type: Boolean, required: true, default: false },
  },
  { _id: false, autoIndex: false }
);

export interface Product {
  _id?: number;
  account_id: number;
  productName: string;
  productImage: string | null;
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
  state: 'pending' | 'published' | 'unpublished' | 'rejected';
  rejectReason: string | null;
}

const productSchema = new Schema(
  {
    account_id: { type: Number, required: true },
    productName: { type: String, required: true },
    productImage: { type: String, required: false },
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
    state: { type: String, required: true, default: () => 'pending' },
    rejectReason: { type: String, required: false, default: () => '' },
  },
  { timestamps: true }
);
autoIncrement.initialize(mongoose.connection);
productSchema.plugin(autoIncrement.plugin, 'Product');

productSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

export const ProductModel = model<Product>('Product', productSchema);
