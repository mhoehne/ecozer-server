import { Request, Response } from 'express';
import { Schema, model, connect } from 'mongoose';

interface Product {
  product_id: number;
  account_id: string;
  productName: string;
  productLink: string;
  productCompany: string;
  productDescription: string;
  zielgruppe: string;
  anwendungsbereich: string;
  gradDerIntegrierung: string;
  objektAspekt: string;
  systemgrenzen: string;
  betrachtungskonzept: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<Product>({
  product_id: {type: Number, required: true, immutable: true},
  account_id: {type: String, required: false, immutable: false},
  productName: {type: String, required: true },
  productLink: { type: String, required: true, lowercase: true },
  productCompany: { type: String, required: true, minlength: 3 },
  productDescription: { type: String, required: false },
  zielgruppe: { type: String, required: true },
  anwendungsbereich: { type: String, required: true },
  gradDerIntegrierung: { type: String, required: true },
  objektAspekt: { type: String, required: true },
  systemgrenzen: { type: String, required: true },
  betrachtungskonzept: { type: String, required: true },
  createdAt: { type: Date, immutable: true, default: () => Date.now() },
  updatedAt: { type: Date, default: () => Date.now()},
}, { timestamps: true });

const ProductModel = model<Product>('Product', productSchema);

/************************************************************************************************/
//GET / READ
export async function listProduct(_req: Request, res: Response){

  const products = await ProductModel.find({});

  
res.send({products});
}

/************************************************************************************************/
//POST / CREATE
export async function createProduct(req: Request, res: Response){

  const createNewProduct = new ProductModel(req.body)
  
  productSchema.pre("save", function (next) {
    this.updatedAt = Date.now()
    next()
  })

  try {
    await createNewProduct.save();
  }

  catch (e) {
    res.status(500).send('product already exists')
    return
  }
  
  const product = await ProductModel.findOne({ product_id: req.body.product_id }).exec();
  return res.status(201).send(product);
}

/************************************************************************************************/
//PUT / UPDATE
export async function updateProduct(req: Request, res: Response) {
  
  try {
    const product = await ProductModel.findOneAndUpdate({ product_id: req.body.product_id }, req.body, {new: true} ).exec();
    return res.status(202).send(product);
  }

  catch (e) {
    res.status(500).send(e)
    return
  }
}

/************************************************************************************************/
//DELETE
export async function deleteProduct(req: Request, res: Response) {
  
  try {
    await ProductModel.findOneAndDelete({ product_id: req.body.product_id }).exec();
    return res.status(202).send('product successfully deleted');
  }

  catch (e) {
    res.status(500).send(e)
    return
  }
}

export default function productController(_req: Request, res: Response)

{
const products = {
  "products" : [
    {
      "product_id":0,
      "account_id": 0,
      "productName": "default",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter",
        "externe Stakeholder",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Ökobilanzierung",
        "Berichterstattung",
        "Entscheidungsunterstützung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "integriert",
        "Add-On",
        "Stand-Alone",
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Abfall",
        "Anlagen",
        "Gefahrstoffe",
        "Emissionen",
        "Energie",
        "Stoffe/Stoffströme",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert",
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":1,
      "account_id": 1,
      "productName": "Umberto 5",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Emissionen",
        "Energie",
        "Stoffe/Stoffströme",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":2,
      "account_id": 1,
      "productName": "Quentic",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter",
        "externe Stakeholder",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Ökobilanzierung",
        "Berichterstattung",
        "Entscheidungsunterstützung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone",
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Abfall",
        "Anlagen",
        "Gefahrstoffe",
        "Stoffe/Stoffströme",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":3,
      "account_id": 1,
      "productName": "Paul - Plattform für Arbeitsschutz- und Umweltrecht",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Berichterstattung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "SaaS-Lösung"
      ],
      "objektAspekt": [
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert"
      ]
    },

    {
      "product_id":4,
      "account_id": 1,
      "productName": "GaBI",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "externe Stakeholder"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Berichterstattung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Emissionen",
        "Energie",
        "Stoffe/Stoffströme"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":5,
      "account_id": 1,
      "productName": "360report",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Fachabteilung",
        "externe Stakeholder",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Ökobilanzierung"
      ],
      "gradDerIntegrierung": [
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Emissionen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":6,
      "account_id": 2,
      "productName": "e!Sankey",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Emissionen",
        "Energie",
        "Stoffe/Stoffströme",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":7,
      "account_id": 2,
      "productName": "IUWA-Abfallmanager",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Berichterstattung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone",
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Abfall",
        "Gefahrstoffe",
        "Stoffe/Stoffströme",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert"
      ]
    },

    {
      "product_id":8,
      "account_id": 2,
      "productName": "360 Sustainability Essentials Software",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Fachabteilung",
        "externe Stakeholder",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Ökobilanzierung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone",
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Emissionen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":9,
      "account_id": 2,
      "productName": "DataCross",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "externe Stakeholder"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Add-On",
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Anlagen",
        "Gefahrstoffe",
        "Stoffe/Stoffströme"
      ],
      "systemgrenzen": [
        "Prozess",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert",
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":10,
      "account_id": 2,
      "productName": "Eco-Cockpit",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Emissionen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":11,
      "account_id": 2,
      "productName": "Efficio",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter"
      ],
      "anwendungsbereich": [
        "Zertifizierung",
        "Berichterstattung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Anlagen",
        "Energie",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":12,
      "account_id": 2,
      "productName": "ENIT Agent",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter"
      ],
      "anwendungsbereich": [
        "Zertifizierung",
        "Berichterstattung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Anlagen",
        "Emissionen",
        "Energie",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":13,
      "account_id": 2,
      "productName": "eSight",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "Mitarbeiter"
      ],
      "anwendungsbereich": [
        "Zertifizierung",
        "Berichterstattung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
      ],
      "objektAspekt": [
        "Emissionen",
        "Energie",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":14,
      "account_id": 2,
      "productName": "gutwin",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "externe Stakeholder",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Entscheidungsunterstützung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Anlagen",
        "Gefahrstoffe",
        "Stoffe/Stoffströme"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":15,
      "account_id": 3,
      "productName": "FridaCarb",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Fachabteilung",
        "externe Stakeholder"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Emissionen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":16,
      "account_id": 3,
      "productName": "Envis - Environmental System",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Fachabteilung"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Ökobilanzierung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Gefahrstoffe"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Managementzentriert"
      ]
    },

    {
      "product_id":17,
      "account_id": 3,
      "productName": "IngSoft InterWatt",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte"
      ],
      "anwendungsbereich": [
        "Zertifizierung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Energie"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Managementzentriert"
      ]
    },

    {
      "product_id":18,
      "account_id": 3,
      "productName": "Velocity EHS",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Ökobilanzierung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Gefahrstoffe",
        "Emissionen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Managementzentriert"
      ]
    },

    {
      "product_id":19,
      "account_id": 3,
      "productName": "EHS Software AURIGA+",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Ökobilanzierung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Anlagen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":20,
      "account_id": 3,
      "productName": "iSystain",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "externe Stakeholder"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "SaaS-Lösung"
      ],
      "objektAspekt": [
        "Emissionen",
        "Energie",
        "Stoffe/Stoffströme"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Produkt"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert"
      ]
    },

    {
      "product_id":21,
      "account_id": 3,
      "productName": "QUMcheck 4.0",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte"
      ],
      "anwendungsbereich": [
        "Zertifizierung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Anlagen",
        "Emissionen",
        "Energie"
      ],
      "systemgrenzen": [
        "Standort/Betrieb",
        "Prozess"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":22,
      "account_id": 3,
      "productName": "QuB-Tool",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Gesetzeskonformität",
        "Zertifizierung",
        "Ökobilanzierung",
        "Berichterstattung",
        "Entscheidungsunterstützung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Emissionen",
        "Energie"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Verwaltungszentriert"
      ]
    },

    {
      "product_id":23,
      "account_id": 3,
      "productName": "PE International SoFI Software",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Umweltbeauftragte",
        "Behörden"
      ],
      "anwendungsbereich": [
        "Zertifizierung"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Anlagen",
        "Emissionen",
        "Energie"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":24,
      "account_id": 3,
      "productName": "QEHS-Management",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte",
        "Fachabteilung"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Berichterstattung",
        "Entscheidungsunterstützung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Gefahrstoffe",
        "Emissionen"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Bewertungszentriert",
        "Managementzentriert"
      ]
    },

    {
      "product_id":25,
      "account_id": 3,
      "productName": "Nachhaltigkeitslösung von Oracle",
      "productImage": {},
      "productLink": {},
      "productCompany": "ABC Software Company",
      "productDescription": "This software makes your live easier! I promise.",
      "zielgruppe": [
        "Geschäftsführung",
        "Umweltbeauftragte"
      ],
      "anwendungsbereich": [
        "Ökobilanzierung",
        "Entscheidungsunterstützung",
        "Arbeitsschutz"
      ],
      "gradDerIntegrierung": [
        "Stand-Alone"
      ],
      "objektAspekt": [
        "Abfall",
        "Emissionen",
        "Energie",
        "Stoffe/Stoffströme",
        "Kosten"
      ],
      "systemgrenzen": [
        "Standort/Betrieb"
      ],
      "betrachtungskonzept": [
        "Managementzentriert"
      ]
    }
  ]    
}

res.send(products);
}