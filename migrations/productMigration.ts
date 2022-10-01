import { Response, Request } from 'express';
import { ProductModel, productSchema } from '../controllers/productController';

export default async function productMigration(req: Request, res: Response) {
  const products = [
    {
      account_id: 0,
      productName: 'default',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
        'externe Stakeholder': true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        integriert: true,
        'Add-On': true,
        'Stand-Alone': true,
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Abfall: true,
        Anlagen: true,
        Gefahrstoffe: true,
        Emissionen: true,
        Energie: true,
        StoffeStoffströme: true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Umberto 5',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        StandAlone: true,
      },
      objektAspekt: {
        Abfall: true,
        Emissionen: true,
        Energie: true,
        StoffeStoffströme: true,
        Kosten: true,
      },
      systemgrenzen: {
        StandortBetrieb: true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Quentic',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
        'externe Stakeholder': true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Abfall: true,
        Anlagen: true,
        Gefahrstoffe: true,
        'Stoffe/Stoffströme': true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Paul - Plattform für Arbeitsschutz- und Umweltrecht',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Berichterstattung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {},
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'GaBI',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        'externe Stakeholder': true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Emissionen: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: '360report',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        'externe Stakeholder': true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'e!Sankey',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Emissionen: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'IUWA-Abfallmanager',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Abfall: true,
        Gefahrstoffe: true,
        'Stoffe/Stoffströme': true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: '360 Sustainability Essentials Software',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        'externe Stakeholder': true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'DataCross',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        'externe Stakeholder': true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Add-On': true,
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Anlagen: true,
        Gefahrstoffe: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Eco-Cockpit',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Efficio',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Anlagen: true,
        Energie: true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'ENIT Agent',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
        Emissionen: true,
        Energie: true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'eSight',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {},
      objektAspekt: {
        Emissionen: true,
        Energie: true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'gutwin',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        'externe Stakeholder': true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Entscheidungsunterstützung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Anlagen: true,
        Gefahrstoffe: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'FridaCarb',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',

      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        'externe Stakeholder': true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Envis - Environmental System',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'IngSoft InterWatt',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Velocity EHS',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Gefahrstoffe: true,
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'EHS Software AURIGA+',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'iSystain',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        'externe Stakeholder': true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Emissionen: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'QUMcheck 4.0',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'QuB-Tool',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Behörden: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'PE International SoFI Software',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Behörden: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'QEHS-Management',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Gefahrstoffe: true,
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    },

    {
      account_id: 0,
      productName: 'Nachhaltigkeitslösung von Oracle',
      productImage: '',
      state: 'published',
      productLink: 'https://company.de',
      productCompany: 'ABC Software Company',
      productDescription: 'This software makes your live easier! I promise.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
        Arbeitsschutz: true,
        gradDerIntegrierung: {
          'Stand-Alone': true,
        },
        objektAspekt: {
          Abfall: true,
          Emissionen: true,
          Energie: true,
          'Stoffe/Stoffströme': true,
          Kosten: true,
          systemgrenzen: {
            'Standort/Betrieb': true,
          },
          betrachtungskonzept: {
            Managementzentriert: true,
          },
        },
      },
    },
  ];

  for (const product of products) {
    const createNewProduct = new ProductModel(product);

    productSchema.pre('save', function (next) {
      this.updatedAt = Date.now();
      next();
    });

    try {
      await createNewProduct.save();
    } catch (e) {
      res.status(500).send();
      console.error(e);
      return;
    }
  }
  res.send();
}
