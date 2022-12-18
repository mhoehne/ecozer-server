import { Request, Response } from 'express';

import { Product } from '../models/productModel';
import { storeProduct } from '../repositories/productRepository';

export default async function productMigration(req: Request, res: Response) {
  const products: Product[] = [
    {
      account_id: 0,
      productName: 'default',
      productImage: '',
      state: 'published',
      productLink: 'link',
      productCompany: 'Firmenname',
      productDescription: 'Beschreibung',
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
        Lebenszyklus: true,
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
        'Stoffe/Stoffströme': true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
      rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Umberto Efficiency+',
      productImage: '',
      state: 'published',
      productLink: 'https://www.ifu.com/umberto/resource-efficiency-software/',
      productCompany: 'ifu Institut für Umweltinformatik Hamburg GmbH',
      productDescription:
        'Umberto Efficiency+ is one of the leading software solutions for resource efficiency and process optimization and is recommended by experts from industry, consulting, research and education',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Geschäftsführung: false,
        Mitarbeiter: false,
        'externe Stakeholder': false,
        Behörden: false,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
        Gesetzeskonformität: false,
        Zertifizierung: false,
        Lebenszyklus: false,
        Berichterstattung: false,
        Arbeitsschutz: false,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
        'Add-On': false,
        'SaaS-Lösung': false,
        integriert: false,
      },
      objektAspekt: {
        Abfall: true,
    Anlagen: false,
        Gefahrstoffe: false,
        Emissionen: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,

        Prozess: true,
        Produkt: true,
        Zwischenbetrieblich: false,

      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Verwaltungszentriert: false,
        Managementzentriert: false,

      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Umberto LCA+',
      productImage: '',
      state: 'published',
      productLink: 'https://www.ifu.com/umberto/lca-software/',
      productCompany: 'ifu Institut für Umweltinformatik Hamburg GmbH',
      productDescription:
        'Umberto LCA+ is one of the leading LCA software solutions for analyzing the environmental impact and carbon footprint of products. Our solution supports you step by step and is recommended by user experts from industry, consulting, research & education.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Geschäftsführung: false,
        Mitarbeiter: false,
        'externe Stakeholder': false,
        Behörden: false,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
        Gesetzeskonformität: false,
        Zertifizierung: false,
        Berichterstattung: false,
        Arbeitsschutz: false,
        Lebenszyklus: false,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
        integriert: false,
        'Add-On': false,
        'SaaS-Lösung': false,
      },
      objektAspekt: {
        Abfall: true,
        Emissionen: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
        Kosten: true,
        Anlagen: false,
        Gefahrstoffe: false,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
        Zwischenbetrieblich: false,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: false,
        Verwaltungszentriert: false,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Quentic',
      productImage: '',
      state: 'published',
      productLink: 'https://www.quentic.de/software/',
      productCompany: 'Quentic',
      productDescription:
        'Quentic ist eine modulare, cloudbasierte Software, mit der Sie alle Anforderungen aus Arbeits- und Umweltschutz sowie Qualitäts- und Nachhaltigkeitsmanagement bequem im Griff haben. Zahlreiche Funktionen helfen Ihnen beim Dokumentieren, Auswerten und Lenken der Unternehmensprozesse. Die Eignung gemäß ISO 14001, ISO 45001 und ISO 50001 ist offiziell bestätigt. Durch Quentic sparen Sie nicht nur Zeit, sondern sichern Qualität und Rechtskonformität. Zugleich bringen Sie alle HSEQ- und ESG-Stakeholder in einem gemeinsamen System zusammen.',
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
        Lebenszyklus: false,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
        'SaaS-Lösung': true,
        integriert: false,
        'Add-On': false,
      },
      objektAspekt: {
        Abfall: true,
        Anlagen: true,
        Gefahrstoffe: true,
        'Stoffe/Stoffströme': true,
        Kosten: true,
        Emissionen: false,
        Energie: false,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: false,
        Produkt: false,
        Zwischenbetrieblich: false,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
        Bewertungszentriert: false,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Paul - Plattform für Arbeitsschutz- und Umweltrecht',
      productImage: '',
      state: 'published',
      productLink: 'https://qumsult.de/software/rechtskataster-paul/',
      productCompany: 'Qumsult',
      productDescription:
        'Die webbasierte Software PAUL ermöglicht Ihnen, auf einfache Weise ein individuelles, standortbezogenes und ISO-konformes Rechtsverzeichnis für Ihre bindenden Verpflichtungen zu erstellen, aktuell zu halten und zu verwalten. Mit PAUL erhalten Sie Zugang zu über 1.200 Vorschriften von EU, Bund, Ländern und Berufsgenossenschaften zum Umweltmanagement (ISO 14001), Energiemanagement (ISO 50001) und Arbeitsschutz / SGA-Management (ISO 45001).',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
        Geschäftsführung: false,
        'externe Stakeholder': false,
        Behörden: false,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Berichterstattung: true,
        Arbeitsschutz: true,
        Ökobilanzierung: false,
        Entscheidungsunterstützung: false,
        Lebenszyklus: false,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
        integriert: false,
        'Add-On': false,
        'Stand-Alone': false,
      },
      objektAspekt: {
        Abfall: false,
        Anlagen: false,
        Gefahrstoffe: false,
        Emissionen: false,
        Energie: false,
        'Stoffe/Stoffströme': false,
        Kosten: false,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: false,
        Zwischenbetrieblich: false,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: false,
        Managementzentriert: false,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'GaBI',
      productImage: '',
      state: 'published',
      productLink: 'https://gabi.sphera.com/deutsch/index/',
      productCompany: 'Sphera',
      productDescription:
        'GaBi vereint Software zur Ökobilanz-Modellierung und Berichtserstellung mit umfangreichen LCA-Datenbanken aus allen Branchen. Nutzen Sie GaBi, um sämtliche Materialien und Prozesse in jeder Phase der Wertschöpfung zu analysieren - von der Förderung von Rohmaterial bis zum Ende der Produktlebensdauer.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'e!Sankey',
      productImage: '',
      state: 'published',
      productLink: 'https://www.ifu.com/de/e-sankey/',
      productCompany: 'iPoint-systems gmbh',
      productDescription:
        'e!Sankey ist die Standardsoftware für professionelle Sankey-Diagramme. Mit e!Sankey erstellen Sie einfach Sankey-Diagramme mit ansprechendem Aussehen und Layout. e!Sankey wird in zahlreichen Anwendungsfeldern für Sankey-Diagramme genutzt, u.a. Energieaudits und Energiemanagement, Materialflüsse und Stoffströme in der Produktion und Abwasser und Abfallmanagement.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'IUWA-Abfallmanager',
      productImage: '',
      state: 'published',
      productLink: 'https://iuwa-abfallmanager.de/',
      productCompany: 'IUWA GmbH',
      productDescription:
        'Der IUWA Abfallmanager gibt Ihnen jederzeit einen umfassenden Überblick über das Abfallmanagement Ihres Unternehmens. Der Abfallmanager erfasst sämtliche anfallenden Abfälle und Abfallströme im Betrieb und maximiert so die Rechtssicherheit. Er bietet variable Auswertungsmöglichkeiten, generiert alle wesentlichen abfallrelevanten Kennzahlen und unterstützt somit das interne und externe Berichtswesen (z.B. ISO 14001, 14031, EMAS) und hilft Ihnen bei Audits.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: '360 Sustainability Essentials Software',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.ul.com/services/360-sustainability-essentials-software',
      productCompany: 'UL Solutions',
      productDescription:
        '360 Sustainability Essentials includes everything you need to report to leading frameworks while allowing you to focus on performance improvements. 360 Sustainability Essentials makes it easy to collect reliable data across your whole organization. Everything you need for Sustainability Accountability Standards Board (SASB), Global Reporting Initiative (GRI) and Carbon Disclosure Project (CDP) reporting is included.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'DataCross',
      productImage: '',
      state: 'published',
      productLink: 'https://www.tec4u-solutions.com/datacross/',
      productCompany: 'tec4U-Solutions GmbH',
      productDescription:
        'DataCross ermöglicht eine schnelle und effiziente Kommunikation mit den Lieferanten zur Materialdatenbeschaffung. Durch das professionelle Materialdatenmanagement ist die Einhaltung der aktuellen gesetzlichen Anforderungen leicht möglich. Die gewonnenen Daten können archiviert, analysiert und bewertet werden.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Eco-Cockpit',
      productImage: '',
      state: 'published',
      productLink: 'https://ecocockpit.de/',
      productCompany: 'EFFIZIENZ-AGENTUR NRW',
      productDescription:
        'Das ecocockpit ist die kostenfreie Lösung zur Ermittlung des CO2-Fußabdruckes. Erstellen Sie mit dem ecocockpit in wenigen Schritten die CO2-Bilanz ihres Unternehmens (CCF) und Ihrer Produkte (PCF). Identifizieren Sie unkompliziert und praxisnah Ihre CO2-Treiber im Unternehmen und leiten Sie Maßnahmen zur Reduzierung ab.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Efficio',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.berg-energie.de/produkte-loesungen/energiemanagement/efficio-energiemanagement/',
      productCompany: 'Berg GmbH',
      productDescription:
        'Ein Energiemanagement muss alle energetischen Prozesse und Strukturen des Unternehmens passgenau abbilden. Mit unserer webbasierten Energiemanagementlösung überwachen Sie Ihre Energiekennwerte (EnPI) und prüfen das Regelverhalten Ihrer Energie- und Produktionsanlagen nach ISO 50001:2018 und DIN EN ISO 16247-1. Efficio überzeugt durch einfache und intuitive Bedienung – ideal für Unternehmen mit wenig Zeit- und Personalressourcen.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'ENIT Agent',
      productImage: '',
      state: 'published',
      productLink: 'https://enit.io/produkte/energiemonitoring',
      productCompany: 'Enit Energy IT Systems GmbH',
      productDescription:
        'Überwachen Sie mit ENIT Ihren Energieverbrauch flexibel und maximal kompatibel. Energiemonitoring mit unserer Lösung ENIT agent als Grundlage aller zielführenden Entscheidungen für Ihr Unternehmen in der Wirtschaft und der Industrie. Mit unserem Energiemonitoring, ENIT agent, bekommen Sie ohne hohen Investitionsaufwand nach wenigen Stunden die ersten Daten geliefert. Über monatliche Auswertungen erhalten Sie von uns Handlungsempfehlungen, um die Energieeffizienz zu steigern.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'eSight',
      productImage: '',
      state: 'published',
      productLink: 'https://www.esightenergy.com/',
      productCompany: 'eSight®',
      productDescription:
        'Cost-effective, easy-to-use energy management software for every business. Drive down energy costs with the eSight energy management platform. Track and manage energy consumption, carbon emissions, solar and wind generation, waste and recycling with built in reports, templates and analysis techniques. Collect data from all types of data sources and create dashboards.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'gutwin Arbeitsschutz Software',
      productImage: '',
      state: 'published',
      productLink: 'https://www.gutwinski.de/landing/arbeitsschutz-software',
      productCompany: 'Gutwinski Management GmbH',
      productDescription:
        'Digitalisieren Sie einfach, effizient und rechtssicher den Arbeitsschutz Ihrer Organisation. Ermitteln und beurteilen Sie systematisch die mit Ihrer Tätigkeit verbundenen Gefahren und dokumentieren Sie das Ergebnis und erforderliche Maßnahmen. Digitalisieren Sie Ihr Gefahrstoffkataster und erstellen Sie Betriebsanweisungen. Verwalten Sie Ihre Maschinen und Arbeitsmittel, beurteilen Sie deren Risiken und organisieren Sie wiederkehrende Prüfungen. Erstellen Sie Ihr Rechtskataster, leiten Sie daraus mit uns die für Sie relevanten Betreiberpflichten ab. Führen Sie einfach und effizient Ihre Audits und Begehungen durch, definieren und verfolgen Sie Korrekturmaßnahmen und dokumentieren Sie die Ergebnisse.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'FridaCarb',
      productImage: '',
      state: 'published',
      productLink: 'http://frida.dfge.de/',
      productCompany: 'DFGE Institute for Energy - Ecology - Economy ©',
      productDescription:
        'FridaCarb liefert mit dem TopDown Ansatz der DFGE eine intelligente Verknüpfung standardisierter Mittelwerte mit Ihren spezifischen Unternehmensdaten. So können wir den unternehmensweiten Carbon Footprint Ihres Unternehmens in nur 7-12 Wochen erstellen: normkonform, valide, plausibel, belastbar mit geringer Fehler-Bandbreite und Software-gestützt - zu geringeren Kosten.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Envis - Environmental System',
      productImage: '',
      state: 'published',
      productLink: 'http://ifgtbenvis.in/about.php',
      productCompany: 'Institute of Forest Genetic and Tree Breeding (IFGTB)',
      productDescription:
        'Realising the importance of Environmental Information, the Government of India, in December, 1982, established an Environmental Information System (ENVIS) as a plan programme. The focus of ENVIS since inception has been on providing environmental information to decision makers, policy planners, scientists and engineers, research workers, etc. all over the country.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'IngSoft InterWatt',
      productImage: '',
      state: 'published',
      productLink:
        'https://energiemanagement.ingsoft.de/de/energiemanagement-mit-system/vorbereitungsphase/energiemanagement-mit-ingsoft-interwatt.html',
      productCompany: 'IngSoft GmbH',
      productDescription:
        'IngSoft InterWatt unterstützt Sie bei allen denkbaren Ausgestaltungsintensitäten Ihres Energiemanagements. Gewinnen Sie zunächst einen Überblick über Ihren Energieverbrauch auf Basis vorhandener Energierechnungen. Nutzen Sie dafür Daten wie Lastgänge, die Ihr Energieversorger / Netzbetreiber / Messstellenbetreiber ohnehin erhebt. Binden Sie alle vorhandenen Systeme wie Gebäudeleittechnik (GLT), Prozessleittechnik (PLT), Computer-Aided-Facility-Management (CAFM) oder Enterprise Ressource Planning (ERP) ein. Verfeinern Sie so im Laufe der Jahre Ihr Energiemanagement.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Velocity EHS',
      productImage: '',
      state: 'published',
      productLink: 'https://www.ehs.com/solutions/esg/',
      productCompany: 'VelocityEHS',
      productDescription:
        'Deploy our ESG global enterprise-ready software, and you’ll quickly gain visibility into core GHG, energy and materiality data while strategically aligning stakeholders across your organization. VelocityEHS GHG & Energy Management automates and simplifies the collection, validation and reporting of your greenhouse gas and energy data. Easily manage shifting climate policies as well as investor and supply-chain partner requirements.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'iSystain',
      productImage: '',
      state: 'published',
      productLink: 'https://www.isystain.com/',
      productCompany: 'iSystain',
      productDescription:
        'iSystain is our flexible suite of cloud-based software modules for managing safety, health, environment, carbon, corporate social responsibility and more. With iSystain almost every aspect of running a business responsibly can be measured. Find your baseline performance, than set targets to continuously improve. We have worked hard to make our platform both easy to use and flexible enough to deal with the ever changing mandatory and voluntary legislative requirements and international standards. Our health, safety and environment solution combines risk, events, health, compliance, competency, change, supplier and corrective action management processes with workflow, reporting and analytics tools.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'SOFIA Audit Software',
      productImage: '',
      state: 'published',
      productLink:
        'https://qumsult.de/software/audit-software-mit-auditfragen/',
      productCompany: 'Qumsult',
      productDescription:
        'Mit SOFIA können Sie Audits systematisch planen, durchführen und überwachen. Die Software orientiert sich streng an den Forderungen der DIN EN ISO 19011 „Leitfaden zur Auditierung von Managementsystemen“ und ist damit das normkonforme Werkzeug für Ihre Audits im Qualitäts-, Umwelt–, Arbeitsschutz- und Energiemanagement. Die Audit Software enthält bereits Auditfragen aus dem Bereich Qualität, Umwelt, Arbeitssicherheit.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'QuB-Tool',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.ihk-muenchen.de/de/Service/Umwelt/Umweltmanagement-(EMAS)/QuB-in-Bayern.html',
      productCompany: 'QuB',
      productDescription:
        'Der Qualitätsverbund umweltbewusster Betriebe – QuB ist ein Umweltmanagementsystem, das speziell für kleine Betriebe aus Industrie, Handel und Handwerk entwickelt wurde. Die Betriebe können anhand der praxisorientierten QuB-Vorgaben ihren Umweltschutz maßschneidern und sich zertifizieren lassen. Voraussetzung für die Teilnahme an QuB ist die Einhaltung von 13 Kriterien, die zweijährig durch eine unabhängige Zertifizierungsgesellschaft überprüft werden. In einem Pilotprojekt wurde dazu ein einfach handhabbares EDV-Tool, das QuB-Tool zur Selbsterarbeitung, entwickelt, das eine weitestgehend selbstständige Einführung des Systems ermöglicht. Das Tool steht mit zahlreichen Arbeitsmaterialien kostenlos auf der Internetseite von QuB zur Verfügung.',
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Corporate Sustainability Software',
      productImage: '',
      state: 'published',
      productLink: 'https://sphera.com/corporate-sustainability-software/',
      productCompany: 'Sphera',
      productDescription:
        'Our software provides a solution-at-scale for large organizations based on deep expertise and a broad experience of customer situations. You can respond to a multitude of reporting frameworks and stakeholder initiatives and easily comply with the new ESG reporting framework that aligns with increased investor interest. It enables companies to provide sustainability information professionally and transparently to complement financial reporting, using insights to improve corporate sustainability performance as a foundation to execute a sound net-zero strategy.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Behörden: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    {
      account_id: 0,
      productName: 'Nachhaltigkeitslösung von Oracle',
      productImage: '',
      state: 'published',
      productLink: 'https://www.oracle.com/de/performance-management/esg/',
      productCompany: 'Oracle',
      productDescription:
        'Da die Berichterstattung über Umwelt, Soziales und Governance (ESG) ganz oben auf der organisatorischen Agenda steht, benötigen Sie eine umfassende Performance-Management-Lösung, die Transparenz für alle Stakeholder und Regulierungsbehörden bietet. Mit Oracle Fusion Cloud Enterprise Performance Management (EPM) können Sie Finanz- und Nicht-Finanzdaten integrieren, um mehr als nur Ihre Reporting-Anforderungen zu erfüllen. Außerdem können Sie Ihre ESG-Praktiken – jetzt und in Zukunft – planen und verwalten.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
        Arbeitsschutz: true,
      }
        gradDerIntegrierung: {
          'Stand-Alone': true,
        },
        objektAspekt: {
          Abfall: true,
          Emissionen: true,
          Energie: true,
          'Stoffe/Stoffströme': true,
          Kosten: true,
        }
          systemgrenzen: {
            'Standort/Betrieb': true,
          },
          betrachtungskonzept: {
            Managementzentriert: true,
          },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'RISKPROJECT',
      productImage: '',
      state: 'published',
      productLink: 'https://www.risk-project.de/arbeitssicherheit-software/',
      productCompany: 'RMS GmbH',
      productDescription:
        'Die RISK-Project Arbeitssicherheit-Software stellt Ihnen mit den Modulen Unternehmensverwaltung, Gefährdungsbeurteilung, Gefahrstoffmanagement, Betriebsanweisung und Unterweisung umfangreiche Lösungen sowie alle erforderlichen Dokumentationen für die effektive Umsetzung der Arbeitssicherheit zur Seite. Außerdem garantiert Ihnen RISK-Project Aktualität sowie Rechtssicherheit.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Argumed Arbeitsschutz Software',
      productImage: '',
      state: 'published',
      productLink: 'https://www.argumed.eu/kundenportal/',
      productCompany: 'Dialogue Argumed GmbH',
      productDescription:
        'Die Arbeitsschutz-Software von Argumed bietet Ihnen die Möglichkeit, ein „digitales Erstaudit“ Ihres aktuellen Compliance-Status durchzuführen. Sie erlaubt es Ihnen auch, jederzeit alle bereits laufenden, abgeschlossenen und noch offenen Arbeitsschutz-Maßnahmen über ein zentrales Dashboard einzusehen und zu koordinieren. Auch die dafür benötigten Dokumente, Unterweisungen und zuständigen Kontaktpersonen sind digital hinterlegt. Damit Sie ohne viel Aufwand zum Beispiel eine Gefährdungsbeurteilung erstellen, eine ASA-Sitzung einberufen, Ihr Personal flexibel unterweisen können.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Arbeitsschutz: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {},
      systemgrenzen: { Zwischenbetrieblich: true },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'EHQSplus',
      productImage: '',
      state: 'published',
      productLink: 'https://www.ehqs.de/',
      productCompany: 'EHQS GmbH',
      productDescription:
        'Die Software für Arbeitsschutz-, Umweltschutz-, Gesundheitsschutz- und Qualitätsmanagementsysteme.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'AUDITORplus',
      productImage: '',
      state: 'published',
      productLink: 'https://www.hnc-datentechnik.de/',
      productCompany: 'HNC-Datentechnik GmbH',
      productDescription:
        'Mit diesem modularen Arbeitsschutz-Management-System investieren Sie in die Gesundheit Ihrer Mitarbeiter und damit in die Produktivität Ihres Unternehmens. Die AUDITOR-Software unterstützt Sie dabei und erleichtert die rechtssichere und datenschutzkonforme Dokumentation und Organisation sämtlicher Arbeitsschutzmaßnahmen – auch bei hochkomplexen Anforderungen. AUDITOR plus als Schaltzentrale stellt hier die Basis für Ihren erfolgreichen Arbeits- und Umweltschutz.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'CO2-Rechner PRO',
      productImage: '',
      state: 'published',
      productLink: 'https://klimaktiv.co2ckpit.de/de_DE/page/start/',
      productCompany:
        'KlimAktiv gemeinnützige Gesellschaft zur Förderung des Klimaschutzes mbH',
      productDescription:
        'Der CO2-Rechner für Unternehmen hat sich als Standard zur Berechnung des Corporate Carbon Footprints (CCF) von kleinen und mittleren Unternehmen etabliert und ist die Software für langfristiges Klimamanagement',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Anlagen: true,
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: '360 Sustainability Software',
      productImage: '',
      state: 'published',
      productLink: 'https://www.ul.com/services/360-sustainability-software',
      productCompany: 'UL Solutions',
      productDescription:
        'Sustainability and ESG Reporting for Enterprises: Gather, analyze and communicate your sustainability and ESG data in one place. We help companies gather and analyze data for their annual corporate social responsibility (CSR)/Sustainability reports and meet a range of external requirements including the Sustainability Accountability Standards Board (SASB), Carbon Disclosure Project (CDP), Global Reporting Initiative (GRI), Dow Jones Sustainability Index (DJSI), and UN Global Compact. In addition to automating reporting, 360 Sustainability gives you the data you need to create and track new sustainability initiatives in your organization.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        Gefahrstoffe: true,
        Emissionen: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Zedal',
      productImage: '',
      state: 'published',
      productLink: 'https://www.zedal.de/',
      productCompany: 'Zedal AG',
      productDescription:
        'ZEDAL bietet allen nachweis- und registerpflichtigen Unternehmen eine rechtssichere eANV-Lösung zur Umsetzung des Kreislaufwirtschaftsgesetzes mit seinem untergesetzlichen Regelwerk. Darüber hinaus bietet ZEDAL Optionen an, die alle Unternehmen in der Prozessautomatisierung effektiv unterstützen. Insbesondere bietet ZEDAL für Erzeuger ein komplettes Auftrags-, Stoffstrom- und Kontrollmanagement an.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'eNATUREportal (ehem. TRIAS-AMOS)',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.axians-ewaste.com/loesungen/innerbetriebliches-abfallmanagement/',
      productCompany: 'Axians eWaste GmbH',
      productDescription:
        'eNATUREportal (ehem. TRIAS-AMOS): Die leistungsstarke und modular aufgebaute Lösung unterstützt Sie bei der Digitalisierung von komplexen und individuellen Prozessen Ihres betrieblichen Abfallmanagements. Aus einem umfangreichen Portfolio von Bausteinen und Schnittstellen wird eine Lösung durch Customizing individuell auf Ihre Prozesse zugeschnitten. Zielgruppe sind mittelständische und Konzernunternehmen, Industrie- und Chemieparks mit umfangreichen Ansprüchen und Vorgaben für ein effizientes betriebliches Abfall- und Umweltmanagement.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'eTFSportal',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.axians-ewaste.com/loesungen/grenzueberschreitender-abfalltransport-und-entsorgung/',
      productCompany: 'Axians eWaste GmbH',
      productDescription:
        'Die grenzüberschreitende Abfallverbringung stellt hohe Anforderungen an die Antragsstellung, die Dokumentations- und Nachweispflichten. eTFSportal ist Ihre maßgeschneiderte Lösung um Zeit und Ressourcen einzusparen sowie die Rechtssicherheit in den Prozessen zu erhöhen.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'eTALKportal',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.axians-ewaste.com/loesungen/datendrehscheibe-fuer-die-abfallwirtschaft/',
      productCompany: 'Axians eWaste GmbH',
      productDescription:
        'Vereinfachen Sie die Kommunikation zwischen der Vielzahl an Beteiligten und Datenschnittstellen, die es in der Entsorgungswirtschaft gibt. Mit eTALKportal steht Ihnen eine einheitliche Datenanbindung zur Verfügung, die alle Daten an Partner, Kunden, Institutionen und Behörden weiterleitet.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
      },
      systemgrenzen: {
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'eAVALportal',
      productImage: '',
      state: 'published',
      productLink: 'https://www.axians-ewaste.com/loesungen/eavalportal/',
      productCompany: 'Axians eWaste GmbH',
      productDescription:
        'Nicht alle abfalltransportbeteiligten Unternehmen können sich den neuen Schnittstellen-Standard „AvaL“ aus Kostengründen oder fehlenden Ressource leisten. Daher stellen wir mit dem eAVALportal eine öffentliche SaaS-Plattform zur Verfügung, die nicht extra in das eigene ERP-System implementiert werden muss. eAVALportal ermöglicht allen Beteiligten den kompletten Datenaustausch innerhalb eines Entsorgungsprozesses zu digitalisieren – von der Beauftragung, über den Transport bis hin zu Abrechnung.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
      },
      systemgrenzen: {
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'EPO Gefahrstoffmanager',
      productImage: '',
      state: 'published',
      productLink: 'https://www.gefahrstoff.com/epos-gefahrstoff-manager/',
      productCompany: 'Epos Software & Service AG',
      productDescription:
        'Sicherheitsdatenblätter und MSDS erstellen, verwalten und verteilen. Der epos Gefahrstoff-Manager® unterstützt den gesamten Informationsfluss von der Entwicklung im Labor bis zum Anwender des Produktes.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Austal2000',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.umweltbundesamt.de/themen/luft/regelungen-strategien/ausbreitungsmodelle-fuer-anlagenbezogene',
      productCompany: 'Umweltbundesamt',
      productDescription:
        'AUSTAL - Immissionsprognose für die Anlagengenehmigung: Industrieanlagen werden nur genehmigt, wenn durch Modellrechnungen nachgewiesen ist, dass die Emissionen der geplanten Anlagen keine Überschreitungen der zulässigen Konzentrationen von Luftschadstoffen verursachen. Ein im Auftrag des Umweltbundesamtes entwickeltes Computerprogramm, das den Anforderungen der TA Luft entspricht, wird kostenlos unter dem Namen AUSTAL bzw. AUSTAL2000 bereitgestellt und hat sich in der Praxis bewährt.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
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
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Lasat',
      productImage: '',
      state: 'published',
      productLink: 'https://www.janicke.de/de/lasat.html',
      productCompany: 'Ingenierubüro Janicke',
      productDescription:
        'Das Ausbreitungsmodell LASAT (Lagrange-Simulation von Aerosol-Transport) berechnet die Ausbreitung von Spurenstoffen in der Atmosphäre. LASAT ist ein Werkzeug für den Fachmann zur Beurteilung besonderer Ausbreitungssituationen. Seit 1990 ist es allgemein als Softwarepaket verfügbar und wird bei Landesbehörden, TÜVs und anderen Gutachtern und der Industrie eingesetzt. Auf Anfrage kann eine kostenlose Demo-Version des Programmsystems bezogen werden.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
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
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Biomis',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.umweltbundesamt.de/themen/luft/regelungen-strategien/ausbreitungsmodelle-fuer-anlagenbezogene',
      productCompany: 'Umweltbundesamt',
      productDescription:
        'Feinstaubrechner BIOMIS (Immissionsprognose für die thermische Biomassenutzung) für Wohngebiete: Diese PC-Anwendung erlaubt es – auf Basis der installierten Heizungen –die Luftbelastung mit Feinstaub und Stickstoffdioxid aus Kleinfeuerungsanlagen für ein konkretes Gebiet darzustellen.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
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
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'deZem Energiemanagement Software',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.dezem.de/uebersicht-energiemanagement-software/',
      productCompany: 'deZem GmbH',
      productDescription:
        'Die deZem Energie­management Software ist der Schlüssel um Ihren Energieverbrauch zu verfolgen, Optimierungen zu planen, Effizienzmaßnahmen zu bewerten und Einsparungen zu quantifizieren. Analysieren Sie den Zusammenhang zwischen Verbrauch, Produktion und Umweltbedingungen. Tun Sie dies in Echtzeit. Für das ganze Unternehmen im Überblick oder ganz detailliert an einzelnen Maschinen.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Enerchart',
      productImage: '',
      state: 'published',
      productLink: 'https://www.enerchart.com/',
      productCompany: 'krumedia GmbH',
      productDescription:
        'Die Nutzung aktueller und zukünftiger IoT-Technologien für das Energiemanagement ist eine besonders effiziente Form der Digitalisierung. Genau hierfür wurde enerchart geschaffen. Wir bieten Ihnen die ideale Plattform für ein Energiemanagement nach ISO 50001 und unterstützen gleichzeitig die Digitalisierung Ihres Unternehmens.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Simapro',
      productImage: '',
      state: 'published',
      productLink: 'https://simapro.com/',
      productCompany: 'PRé Sustainability',
      productDescription:
        'SimaPro is a powerful solution for those looking to drive sustainable change. Its fact-based LCA approach provides the insights you need to make better decisions, empower better choices and reduce the environmental footprints of products and services.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Regis',
      productImage: '',
      state: 'published',
      productLink: 'https://sinum.com/regis',
      productCompany: 'sinum AG',
      productDescription:
        'REGIS lässt Sie auf einfachste und kontinuierliche Weise Ihre Umweltleistung messen, kontrollieren und glaubwürdig kommunizieren und Ihre Stoff- und Energieflüsse ökonomisch und professionell im Griff behalten.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Gefahrstoff-Programm',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.deutscher-apotheker-verlag.de/shop/produkt/141018014/gefahrstoff-programm',
      productCompany: 'Deutscher Apotheker Verlag',
      productDescription:
        'Mit dem Gefahrstoff-Programm für die Apothekenpraxis erfüllen Sie die gesetzlichen Forderungen ganz leicht. Es leitet Sie sicher durch alle erforderlichen Prozeduren, erzeugt das richtige Abgabe- oder Vorratsetikett, liefert die nötigen Informationen zur Unterrichtung der Kunden und Unterweisung der Mitarbeiter und hält stets die korrekten Formblätter bereit. Auch die Gefährdungsbeurteilung haben Sie mit wenigen Klicks erstellt.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'IMMI',
      productImage: '',
      state: 'published',
      productLink: 'https://www.immi.eu/',
      productCompany: 'WÖLFEL-GRUPPE',
      productDescription:
        'Als eines der führenden Softwaretools im Immissionsschutz vertrauen Dienstleister, Behörden und Industrieunternehmen seit mehr als 30 Jahren auf IMMI. IMMI ist unser Software-Paket zur Lärmberechnung im Freien, Lärmbelastung in Arbeitsräumen und Ausbreitung von Luftschadstoffen.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
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
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'EnerBoard',
      productImage: '',
      state: 'published',
      productLink: 'https://www.enerboard.de/',
      productCompany: 'Tengelmann Energie GmbH',
      productDescription:
        'Digitalisieren Sie mit EnerBoard alle Energiedaten und -prozesse in der Cloud. Die Funktionen von EnerBoard werden zwei Modulen zugeordnet. Im Energiemanagement finden Sie alle Anwendungen, um Energieverbräuche und -kosten im Blick zu behalten. In der Prozessoptimierung unterstützen unsere Funktionen Sie bei der Datenverwaltung und automatischen Rechnungsprüfung.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
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
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Energy Monitor',
      productImage: '',
      state: 'published',
      productLink: 'https://www.optenda.de/energiemanagement-software/',
      productCompany: 'OPTENDA GmbH',
      productDescription:
        'Von der automatisierten Erfassung des Energieverbrauchs über die einfache und übersichtliche Visualisierung der Energiedaten bis hin zu nutzerspezifischen Auswertungen: Der Energy Monitor macht Energiemanagement effizient und einfach. Ausgelegt auf die praktische Anwendung und Nutzung im Unternehmen ist das System so aufgebaut, dass auch ein “Nicht-Techniker” damit arbeiten kann.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ITC PowerCommerce® EnMS',
      productImage: '',
      state: 'published',
      productLink: 'https://online-enms.de/',
      productCompany: 'ITC-AG',
      productDescription:
        'Die webbasierte Energiemanagement Software ermöglicht es Kennzahlen aus einer Vielzahl an Datenquellen darzustellen, sodass die Anforderungen verschiedener Zielgruppen berücksichtigt werden können. So kann mit Benchmark-Funktionen und Energieanalysen ermittelt werden, ob Ihre Verbrauchswerte und Betriebskosten im Rahmen liegen. Auf Basis der Reporting-Funktion lassen sich individuelle Energieberichte erzeugen. Neben Medien wie Strom, Gas, Wärme oder Kälte können beliebige weitere Daten und virtuelle Zähler vom System verarbeitet werden.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
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
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ReTHiNK',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.kiwa.com/de/de/service2/zertifizieren/rethink-okobilanz-epd/',
      productCompany: 'Kiwa Deutschland GmbH',
      productDescription:
        'R<THiNK ist eine Softwareapplikation, die es Unternehmen ermöglicht Ökobilanzen für ihre Produkte, sogenannte Umweltproduktdeklarationen (EPD), effizient und nach internationalen Standards zu erstellen. Mit R<THiNK können Sie sowohl projektspezifische Berechnung durchführen als auch die Umweltauswirkungen Ihres gesamten Produktportfolios berechnen.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Lebenszyklus: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Turbo Carbon™',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.ul.com/services/digital-applications/simplified-co2-reporting',
      productCompany: 'UL Solutions',
      productDescription:
        'UL Turbo Carbon software enables you to provide critical carbon emissions data and generate detailed reports for a range of audiences and submission requirements. Designed for use exclusively by smaller businesses, Turbo Carbon is easy to use and makes carbon reporting more efficient and cost-effective.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Emissionen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'CR-Kompass',
      productImage: '',
      state: 'published',
      productLink: 'https://www.crkompass.de/',
      productCompany: 'WeSustain',
      productDescription:
        'Der CR-Kompass bietet kleinen und mittelständischen Unternehmen (KMU) Unterstützung beim Aufbau ihres CR-Managements sowie bei der Erstellung von Nachhaltigkeitsberichten und Fortschrittberichten nach den Anforderungen des UN Global Compact. Unsere online-basierte Software wurde vom ESF-Programm unterstützt und steht unseren Kunden in ihrer Basis-Version kostenfrei zur Verfügung.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'CSRmanager',
      productImage: '',
      state: 'published',
      productLink: 'https://www.csr-manager.org/',
      productCompany: 'macondo publishing GmbH',
      productDescription:
        'Mit der Software „CSRmanager“ können Sie selbständig, einfach und effizient Ihre Nachhaltigkeitsdaten, Ihre Audits und auch Ihr Risikomanagement bearbeiten, evaluieren und nach internationalen Standards berichten! Wählen Sie aus dem Fundus an Erweiterungsmöglichkeiten die für Ihr Haus passende Lösung.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'enablon',
      productImage: '',
      state: 'published',
      productLink: 'https://www.wolterskluwer.com/en/solutions/enablon',
      productCompany: 'Wolters Kluwer',
      productDescription:
        'With the Enablon Integrated Risk Management software platform, you can manage risk, drive sustainability and boost productivity across your entire value chain - from EHSQ to GRC, and from Operational Risk to ESG.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'SAP Sustainability Control Tower',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.sap.com/germany/products/sustainability-control-tower.html',
      productCompany: 'SAP',
      productDescription:
        'As a central key figure ledger of reliable sustainability-related data, the solution enables you to set targets, monitor progress, and gain actionable insights with automated and updated performance reports by business unit and location.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Tofuture CSM',
      productImage: '',
      state: 'published',
      productLink: 'https://tofuture.fi/',
      productCompany: 'Tofuture',
      productDescription:
        'Unser Angebot besteht aus einem cloudbasierten Nachhaltigkeitsmanagement-Tool (SaaS-Service) und Beratung rund um das Nachhaltigkeitsdatenmanagement. Mit unserem Sustainability Business Intelligence (BI)-Service können Sie die oft verstreut vorliegenden Nachhaltigkeitsdaten nutzen, um Ihre strategischen Ziele zu verfolgen und Ihre Nachhaltigkeitsberichterstattungsprozesse zu optimieren.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'envoria',
      productImage: '',
      state: 'published',
      productLink: 'https://envoria.com/de',
      productCompany: 'fisa',
      productDescription:
        'Envoria bietet eine holistische Lösung für alle relevanten Bereiche im Nachhaltigkeitsreporting. Länder- und Branchen-unabhängig. Sie ermöglicht die Verfolgung des CO2-Fußabdrucks und Ergreifung entsprechender Maßnahmen. Envoria berücksichtigt alle Nachhaltigkeit-Initiativen Ihres Unternehmens. Erstellte Reports erfüllen automatisch alle zutreffenden Prüfungs-Anforderungen. Alle relevanten Reporting-Frameworks (CSRD, GRI, EMAS, SDG, EU Taxonomie) werden unterstützt.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ESGcockpit',
      productImage: '',
      state: 'published',
      productLink: 'https://esg-cockpit.com/',
      productCompany: 'akaryon GmbH und Mensalia Unternehmensberatungs GmbH',
      productDescription:
        'ESG-Cockpit, das Tool für Nachhaltigkeitsdaten und für eine Unternehmenssteuerung nach den Prinzipien der Nachhaltigkeit, inklusive Umweltdaten und aller gängigen Standards. Es ermöglicht einfach und dezentral die Verwaltung von nachhaltigkeitsrelevanten Daten und die Berechnung von ESG-Indikatoren. Dank flexibler Konfiguration, gestaltbaren, transparenten und nachvollziehbaren Auswertungen wird Ihr Nachhaltigkeits-Reporting nicht nur komfortabler, mit dem ESG-Cockpit sind Sie auch effizienter.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Substain®',
      productImage: '',
      state: 'published',
      productLink: 'https://www.conclimate.de/software',
      productCompany: 'ConClimate',
      productDescription:
        'Substain® ist eine Software-as-a-Service Lösung, die praktisch alle Szenarien des modernen Nachhaltigkeitsmanagements abdeckt und sich flexibel an die Bedürfnisse von Unternehmen anpasst. Sie ermöglicht Corporate- und Product Carbon Footprints auf Knopfdruck nach GHG Protocol oder ISO 14064/14067, unternehmensweite Datenerfassung und automatisierte Aufbereitung für Management-Dashboards, CSR-Reportings oder spezifische Zertifizierungen wie EMAS oder ISO 14001 und effektives Lieferkettenmanagement durch Abfrage von Daten und Erhebung von Primärdaten direkt von Lieferanten.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'VERSO CSR Hub Reporting',
      productImage: '',
      state: 'published',
      productLink: 'https://verso.de/csr-hub-reporting/',
      productCompany: 'Verso',
      productDescription:
        'Mit dem VERSO CSR Hub Reporting sammeln Sie alle Nachhaltigkeitsinformationen an einem Ort, die Sie für Ihren Nachhaltigkeitsbericht benötigen. Eine intuitive Benutzeroberfläche und integrierte Leitfäden aller gängigen Standards machen Ihren CSR Bericht zum Kinderspiel. VERSO ist eine Cloud Software. Daher gibt es auch keinen aufwendigen Implementierungsprozess.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Workiva',
      productImage: '',
      state: 'published',
      productLink: 'https://www.workiva.com/de/solutions/esg-reporting',
      productCompany: 'Workiva',
      productDescription:
        'Workiva ermöglicht den Aufbau einer vertrauenswürdigen, prüfungsfähigen ESG-Berichterstattung für Investoren. Operationalisieren Sie alle ESG Workflows mit einer Plattform, die Ihre Unternehmensstrategie unterstützt, damit Sie Aufgaben zuweisen, deren Status verfolgen und in Echtzeit zusammenarbeiten können.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Enterprise Sustainability Management',
      productImage: '',
      state: 'published',
      productLink: 'https://www.wesustain.com/software-esm/',
      productCompany: 'WeSustain',
      productDescription:
        'Setzen Sie mit der “Enterprise Sustainability Management” Lösung von WeSustain auf einen fortschrittlichen Datenmanagement-Ansatz. Planen und steuern Sie browserbasiert Ihre Nachhaltigkeitsmaßnahmen und -ziele. Analysieren und werten Sie Ihre aggregierten Nachhaltigkeitsdaten umfassend und automatisiert für die interne und externe Berichterstattung aus. Binden Sie über gängige und sichere Schnittstellen bestehende Systeme oder Tools einfach an die IT-Infrastruktur von WeSustain an.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Berichterstattung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Enterprise Compliance Management',
      productImage: '',
      state: 'published',
      productLink: 'https://www.wesustain.com/software-ecm/',
      productCompany: 'WeSustain',
      productDescription:
        'Setzen Sie mit der “Enterprise Compliance Management” Lösung von WeSustain auf einen fortschrittlichen Datenmanagement-Ansatz, mit dem Sie Ihre EHS-Prozesse zuverlässig steuern und so für Ihre EHS Compliance Sorge tragen. Kommen Sie Ihrer Betreiberverantwortung rechtssicher nach, dokumentieren Sie zuverlässig Ihre Prozesse und Daten und führen Sie effiziente Audits durch.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Impact Management',
      productImage: '',
      state: 'published',
      productLink: 'https://www.wesustain.com/impact-management/',
      productCompany: 'WeSustain',
      productDescription:
        'Setzen Sie mit der “Impact Management” Lösung von WeSustain schon heute auf einen wirkungs- und zukunftsweisenden Datenmanagement-Ansatz, mit dem Sie künftig (u.a. durch Künstliche Intelligenz) zu ganz neuen Erkenntnissen bezüglich Ihrer Wirkungskette gelangen. Machen Sie durch ein belastbares und zentrales Datenmanagement Ihre Wirkungskette messbar und berichten Sie transparent über Fortschritte. Verbinden Sie über unsere kollaborativen Workflows zudem Ihre Mitarbeiter weltweit für noch mehr Impact.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
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
        Abfall: true,
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        Produkt: true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Web Sara Abfallmanagement',
      productImage: '',
      state: 'published',
      productLink: 'https://qumsult.de/abfallmanagement-software/',
      productCompany: 'Qumsult',
      productDescription:
        'Mit Web SARA-Abfallmanagement erhalten Unternehmen ein Werkzeug, um ihre Abfälle zu verwalten. Webbasiert bietet es allen Mitarbeitern an allen Standorten Zugriff auf das zentrale und stets aktuelle Abfallkataster. Bauen Sie Ihr Abfallkataster mit allen Abfallarten Ihres Unternehmens lückenlos auf und organisieren Sie nachweislich die Erfassung, Auswertung und Entsorgung Ihrer Abfälle.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Abfall: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Web Sara Anlagen',
      productImage: '',
      state: 'published',
      productLink: 'https://qumsult.de/anlagen_instandhaltungssoftware/',
      productCompany: 'Qumsult',
      productDescription:
        'Mit Web SARA-Anlagen steht Unternehmen aller Branchen und Größen ein Werkzeug für Anlagen und Maschinen (Prüfungen und Wartungen / Anlagenkataster / Betriebsanweisung) zur Verfügung. Webbasiert bietet es allen Mitarbeitern an allen Standorten Zugriff auf das zentrale und stets aktuelle Anlagenkataster. Der Nachweis gegenüber Zertifizierer und Aufsichtsbehörde ist jederzeit möglich und die Abläufe können gesteuert und dokumentiert werden.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'AWSV-Software',
      productImage: '',
      state: 'published',
      productLink:
        'https://qumsult.de/software/awsv-anlagendokumentation-software-2/',
      productCompany: 'Qumsult',
      productDescription:
        'Betreiber von Anlagen zum Umgang mit wassergefährdenden Stoffen können mit der AwSV Software, die von ihnen verwendeten Stoffe und Gemische nach ihrer Gefährlichkeit einstufen und entsprechend dokumentieren. Die webbasierte Anwendung ist konform mit der Verordnung über Anlagen zum Umgang mit wassergefährdenden Stoffen (AwSV) und erfüllt alle AwSV Betreiberpflichten. Mit der AwSV Software bleiben sie immer auf dem aktuellen Stand der Rechtslage.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Web Sara Gefahrstoffe',
      productImage: '',
      state: 'published',
      productLink:
        'https://qumsult.de/software/gefahrstoffmanagement-software/',
      productCompany: 'Qumsult',
      productDescription:
        'Mit Web SARA-Gefahrstoffe steht Unternehmen ein Werkzeug für das Gefahrstoffmanagement (Gefahrstoffverzeichnis / Gefahrstoffkataster und Betriebsanweisung) im Arbeitsschutz zur Verfügung. Webbasiert bietet es allen Mitarbeitern Zugriff auf das zentrale und stets aktuelle Gefahrstoffkataster und kann ideal für die Unterweisung im Arbeitsschutz herangezogen werden. Der Nachweis gegenüber Zertifizierer und Aufsichtsbehörde ist jederzeit möglich, die Abläufe können gesteuert und dokumentiert werden.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Web Sara Gefährdungsbeurteilung',
      productImage: '',
      state: 'published',
      productLink: 'https://qumsult.de/gefaehrdungsbeurteilung-software/',
      productCompany: 'Qumsult',
      productDescription:
        'Mit Web SARA-Gefährdungsbeurteilung können Sie Ihre Gefährdungen effizient und effektiv ermitteln, beurteilen, dokumentieren und geeignete Maßnahmen festlegen sowie diese verwalten. Steigen Sie um von Excel, Word oder PDF auf eine webbasierte Anwendung, auf die alle Beschäftigten am Standort Zugriff haben und die Ergebnisse der Gefährdungsbeurteilungen einsehen können.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'UTA Unterweisung',
      productImage: '',
      state: 'published',
      productLink:
        'https://qumsult.de/software/arbeitsschutz-software_unterweisungen/',
      productCompany: 'Qumsult',
      productDescription:
        'UTA ist ein Instrument, um Ihre Unterweisungen und Schulungen zu planen, zu organisieren, durchzuführen und zu verwalten.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'DiEva',
      productImage: '',
      state: 'published',
      productLink: 'https://di-eva.de/',
      productCompany: 'tec4U-Solutions GmbH',
      productDescription:
        'DiEva bietet der Marktüberwachung eine intelligente und interaktive Kommunikationsplattform, um Unternehmen bezüglich der Einhaltung von gesetzlichen Anforderungen zu befragen und die Antworten im Hinblick auf die Gesetzeskonformität auszuwerten. Derzeit können über DiEva umwelt- und arbeitsschutzrelevante Regelwerke wie die REACH-Verordnung oder die POP-Verordnung abgebildet werden. Die Plattform unterstützt und entlastet Unternehmen beim Antwortprozess auf Vollzugsanfragen. Unternehmen können Umsetzungsdefizite frühzeitig erkennen und so Haftung vermeiden.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'FridaQuest',
      productImage: '',
      state: 'published',
      productLink: 'https://frida.dfge.de/2.html',
      productCompany: 'DFGE Institute for Energy - Ecology - Economy ©',
      productDescription:
        'FridaQuest is a SaaS tool which enables you to collect necessary data for your sustainability report. It allows to set-up a questionnaire with delegated ...',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'FridaCorp',
      productImage: '',
      state: 'published',
      productLink: 'http://frida.dfge.de/',
      productCompany: 'DFGE Institute for Energy - Ecology - Economy ©',
      productDescription:
        'Ermitteln Sie standortübergreifend, auf internationalen Normen basierend, den Carbon Footprint Ihres Unternehmens. Durch die Datenpflege in FridaCorp lassen sich nicht nur die Treibhausgas-Emissionen eines Unternehmens kontinuierlich beobachten, sondern es können kritische Werte frühzeitig erkannt und langfristig verringert werden.',
      zielgruppe: {
        Umweltbeauftragte: true,
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
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'FridaLog',
      productImage: '',
      state: 'published',
      productLink: 'http://frida.dfge.de/',
      productCompany: 'DFGE Institute for Energy - Ecology - Economy ©',
      productDescription:
        'Mit FridaLog können Logistik-Unternehmen die Transportemissionen Ihrer Flotte in einer Software-as-a-Service Applikation einfach und schnell ermitteln – pro Sendung per Lkw, Bahn, Schiff, Flugzeug oder für die gesamte Flotte. Die Berechnungen erfolgen gemäß internationaler Standards wie z.B. dem GHG Protokoll oder der DIN EN 16258 und berücksichtigen dabei nicht Durchschnittswerte, sondern unternehmensspezifische Daten. Ergebnis ist ein von der DFGE validierter Report mit Logo des Kunden im PDF Format, der mit dem DFGE-Siegel für die Richtigkeit der Berechnungen bürgt und der Forderung nach einer Überprüfung durch unabhängige Dritte gerecht wird.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Cority Environmental Cloud',
      productImage: '',
      state: 'published',
      productLink: 'https://www.cority.com/environmental-cloud/',
      productCompany: 'Cority',
      productDescription:
        'Transform compliance and drive continuous improvement to meet your environmental goals. Our Cority Environmental Cloud is developed to help transform how you manage compliance and drive continuous improvement towards your corporate goals. Advance your performance to a cleaner, greener future more easily and efficiently. Purpose-built solutions to meet your environmental needs are for example Air Emissions Management, Waste Management, Audits & Inspections, Sustainability & ESG, …',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Abfall: true,
        Gefahrstoffe: true,
        Energie: true,
        'Stoffe/Stoffströme': true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Cority Sustainability Cloud',
      productImage: '',
      state: 'published',
      productLink: 'https://www.cority.com/sustainability-cloud/',
      productCompany: 'Cority',
      productDescription:
        'Ensure accurate and auditable sustainability and ESG data to create a greener future: Create objectives and targets, collect data from across the entire organization or portfolio, and use powerful dashboards to visualize the success of your programs. Cority’s Sustainability Cloud makes it easy to work collaboratively with colleagues across their organization. It provides accurate, high-quality data that can be used to inform effective decision making. Plausibility checks ensure data being captured meets high standards for accuracy. From sustainability reports to ESG disclosures, organizations need to share visually compelling, comprehensive data with a variety of stakeholders. Cority’s Sustainability Cloud makes it easy to generate beautiful, accurate reports with the click of a button.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
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
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'PASO',
      productImage: '',
      state: 'published',
      productLink: 'https://www.cwk-itconsulting.de/qehs-management/',
      productCompany: 'CWK IT Consulting GmbH',
      productDescription:
        'Schaffen Sie mit PASO den Perspektivwechsel: Von der reinen Kostenbetrachtung hin zur Darstellung des Wertbeitrages des QEHS-Managements für Ihr Unternehmen. Die PASO-Suite ist modular aufgebaut. Kombinieren Sie nach Ihrem Bedarf und integrieren Sie auch unternehmenseigene Lösungen. Einsatzfelder sind Bestandsaufnahmen Audits, Gefährdungsbeurteilungen, Tätigkeitsberichte, Checklisten, Berichte, Bewertungen, Maßnahmenmanagement und Reporting.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        integriert: true,
        'Stand-Alone': true,
      },
      objektAspekt: {
        Gefahrstoffe: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'pro.emonio.de',
      productImage: '',
      state: 'published',
      productLink: 'https://www.emonio.de/de/content/7-analysesoftware',
      productCompany: 'Berliner Energieinstitut GmbH',
      productDescription:
        'In unserer Analysesoftware pro.emonio werden Ihre gemessenen Daten gesammelt und grafisch dargestellt, sodass einem effizienten Energie Monitoring nichts im Weg steht. Egal wie viele Emonio P3 Energiemessgeräte Sie im Einsatz haben: Indem Sie Projekte anlegen und Ihre eingesetzten Leistungsmessgeräte diesen Projekten zuordnen, behalten Sie stets den Überblick und sparen beim Energie Monitoring wertvolle Zeit.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
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
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Energymaster',
      productImage: '',
      state: 'published',
      productLink: 'https://www.bmsvision.com/products/energymaster',
      productCompany: 'BMSVision',
      productDescription:
        'Monitoring of energy consumptions in the Plastics Markets: EnergyMaster is the BMSvision real time energy monitoring system. Following the principle of Monitoring & Targeting (M&T), it maps the different energy consumptions (electricity, gas, compressed air, water, steam,…) for further analysis and optimization. The EnergyMaster system can be offered as an extension of existing BMSvision MES systems but can also be used as Stand-Alone system.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Add-On': true,
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
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'imperium®',
      productImage: '',
      state: 'published',
      productLink: 'https://www.binserv.de/',
      productCompany: 'BINSERV GmbH',
      productDescription:
        'Imperium® ist mehr als ein Datawarehouse, das Daten sammelt und speichert. Imperium® bietet Ihnen darüber hinaus die Vernetzung Ihrer Daten, egal ob auf dem Server oder in der Cloud. Verbinden Sie beispielsweise die Energiekosten mit den Raumtemperaturen. Schon sehen Sie, wie das Heizverhalten die Energiekosten beeinflusst. Nutzen Sie das Modul Energie-Monitoring, um die Energiekosten zu überwachen. So ermitteln Sie schnell Einsparpotenziale. Sie können aber auch Informationen über die interaktive 3-D-Karte aufrufen, etwa die Rauchmelder oder Feuermelder inklusiv Wartungsterminen und -protokollen.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
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
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ProfiSignal',
      productImage: '',
      state: 'published',
      productLink: 'https://www.delphin.de/produkte/software/profisignal.html',
      productCompany: 'Delphin Technology AG',
      productDescription:
        'ProfiSignal ist das klassische, windowsbasierte Standardwerkzeug für die Mess- und Prozessdatenerfassung, Prüfstandsautomatisierung sowie Messtechnik. Der Anwendungsbereich für die Messtechnik-Software liegt in der einfachen Datenarchivierung und Visualisierung bis hin zur kompletten Automatisierungslösung mit automatisiertem Reporting.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'econ4',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.econ-solutions.de/software/energiemanagement-software',
      productCompany: 'econ solutions GmbH',
      productDescription:
        'Die vierte Generation unserer Energiemanagement-Software econ4 ist eine der aktuell führenden Lösungen für betriebliches Energiemanagement. Der modulare, flexible Aufbau ermöglicht die Anpassung an die individuellen Rahmenbedingungen vor Ort. Die nutzereigenen Dashboards liefern unmittelbare Erkenntnisse über Ihren Verbrauch. econ4 ist offen für alle Energiearten, Medien (Strom, Gas, Wasser, usw.) und Zustandsdaten (Temperatur, Druck usw.) und ermöglicht eine flexible Auswertung im umfangreichen Berichtswesen. Im Kennzahleneditor können Energy Performance Indicators gebildet werden. Außerdem werden Kosten- und CO2-Umrechnungen für Kostenstellen und Umweltreporting bereitgestellt. Der Assistent zur DIN EN ISO 50001:2018 hilft alle Anforderungen der Norm im Blick zu behalten.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
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
        Emissionen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Dialogo',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.elektroanlagen-roering.de/index.php/kompetenzen-und-leistungen/dialogo',
      productCompany: 'Elektro-Anlagen Röring GmbH',
      productDescription:
        'Die Steuerungssoftware DiaLogo® bietet Ihnen vor Ort oder über Fernwartung einen schnellen Zugriff auf die Prozessleittechnik. Sie stellt die erforderlichen Prozessparameter nach kundenspezifischen Vorgaben transparent dar. Über die intuitive Bedienung steuert, misst, regelt und überwacht DiaLogo® den effizienten Betrieb Ihrer Maschinen- und Anlagenprozesse.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
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
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'BlueLiKon',
      productImage: '',
      state: 'published',
      productLink: 'https://www.gpi-stenn.de/produkte/bluelikon/',
      productCompany:
        'GPI Gesellschaft für Prüfstanduntersuchungen und Ingenieurdienstleistungen mbH',
      productDescription:
        'Unser Energiemanagementsystem BlueLiKon wurde speziell für Gewerbe- und Industriekunden konzipiert. Wir stellen Ihnen ein System zur Verfügung, mit dem Sie die Anforderungen an ein Energiemanagementsystem nach DIN EN ISO 50001 oder die Durchführung von Energieaudits nach DIN EN 16247 aufwandsarm realisieren können. Dabei setzen wir vor allem auf einen hohen Sicherheitsstandard. Diesen können wir unter anderem durch die Nutzung des Betriebssystems Linux gewährleisten.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'EnEffCo®',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.oekotec.de/unser-portfolio/energieeffizienz-controlling/',
      productCompany: 'ÖKOTEC Energiemanagement GmbH',
      productDescription:
        'Profitieren Sie von Expertenwissen, Nutzerorientierung und einer sehr breiten Anwendungsmöglichkeit mit EnEffCo®– vom Monitoring, über das ISO-50001 Management und die statistische Anlagenüberwachung bis hin zum Last- sowie Flexibilitätsmanagement und der Steuerung Ihrer E-Fahrzeugladung. Neben einer Basisversion mit umfangreichen Feature-Umfang können Sie Ihr System flexibel nach Ihrem Bedarf und Umsetzungsplan um passende Module wie u.a. Mobile App, Sankey-Diagramm, Smart Query oder EnEffReg® erweitern.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'EDM-Software',
      productImage: '',
      state: 'published',
      productLink: 'https://www.wgs-energie.de/edmsoftware_17_de.html',
      productCompany: 'WGS Energietechnik GmbH',
      productDescription:
        'Nur was Sie messen, können Sie kontrollieren! Mit der EDM-Software können Sie Energiedaten auswerten, Fehlverhalten erkennen und Ihre Energieeffizienz steigern! Die EDM – Software dient als maßgeschneiderte Systemlösung im PDCA (Plan,Do,Scheck,Act) – Kreislauf für Strom, Wasser, Gas, Öl, Wärme, Kälte, Druckluft und Dampf.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
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
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ResMa®',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.weidmueller.de/de/loesungen/energiemanagement_loesungen/index.jsp',
      productCompany: 'Weidmüller GTI Software GmbH',
      productDescription:
        'ResMa® unterstützt alle Aufgaben für ein effizientes und aktives Energiemanagement und bezieht sich auf die vom Unternehmen beeinflussbaren Faktoren und kann an individuelle Anforderungen angepasst werden. ResMa® liefert eine Reihe von Visualisierungs-Apps, die Ihnen helfen, eine optimale Konfiguration der Prozessvariablen herauszufinden. Die Software ermöglicht die Überwachung aller eingehenden Tags und Generierung von Alarmen, die per Mail/SMS versendet werden können. ResMa® ermöglich ein automatisiertes Berichtswesen einzurichten und hilft, Transparenz zu fördern und einen Verbesserungsprozess einzuleiten.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        integriert: true,
        'Add-On': true,
        'Stand-Alone': true,
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'WAGO EnergieDatenManagement',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.wago.com/de/energiemanagement/energiedatenmanagement',
      productCompany: 'WAGO Kontakttechnik GmbH & Co. KG',
      productDescription:
        'Das WAGO Energiedatenmanagement, bestehend aus einer Software in Kombination mit einem modularen Steuerungssystem, erfasst Messdaten verschiedener Medien und Einflussgrößen für das Energie-Monitoring und verarbeitet diese für weitere Analysen, die Archivierung und das Reporting. Die unterschiedlichen Signale aus den angeschlossenen Zählern und Sensoren werden automatisch von der Software erkannt und können durch einfache Parametrierung komfortabel für weitere Energieanalyse-Tools bereitgestellt werden.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
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
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'VKW Energiecockpit',
      productImage: '',
      state: 'published',
      productLink: 'https://eco.vkw.at/',
      productCompany: 'Vorarlberger Kraftwerke AG',
      productDescription:
        'Das webbasierte Tool vkw Energiecockpit dient zur Unterstützung des Energiemanagements und ermöglicht eine umfangreihe automatische Erfassung, Auswertung und Kontrolle sämtlicher Verbräuche Ihres Unternehmens ohne aufwendige Installationen. So behalten Sie Ihre Energie- und Ressourcenmanagementbilanz jederzeit im Blick und können nicht nur Verbräuche, sondern auch Kosten und Emissionen optimieren und senken.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
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
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Prozess: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Viridis Energy and Sustainability Platform',
      productImage: '',
      state: 'published',
      productLink: 'https://viridis.energy/en/solutions',
      productCompany: 'SMS group',
      productDescription:
        'Viridis is a complete energy management solution developed exclusively for companies which are heavy energy consumers. Viridis includes sophisticated engineering and artificial intelligence tools to facilitate control over processes in real time. Viridis also includes advanced management models, making the shop floor perspective visible to corporate management.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
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
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ENTECTIV®',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.engie-deutschland.de/sites/default/files/2021-09/ENGIE-Energiemonitoring-ENTECTIV.pdf',
      productCompany: 'ENGIE Deutschland GmbH',
      productDescription:
        'Das herstellerunabhängige Energiemonitoring-System ENTECTIV®: Die Rohdaten einzelner Energiezähler werden von Datenloggern kontinuierlich erfasst, zwischengespeichert und zyklisch durch die ENTECTIV® Energiedatenbank ausgelesen. In der Energiedatenbank werden die Zählerdaten archiviert, ggf. bereinigt, sowie abgeleitete Größen und Kennzahlen berechnet. Im webbasierten Energieportal erfolgt die Darstellung von Kennzahlen und Diagrammen interaktiv und klar strukturiert bei intuitiver Bedienung. Einmal eingerichtete Energieberichte werden in regelmäßigen Abständen per E-Mail an einen definierten Nutzerkreis versandt. Wer noch tiefer in die Analyse einsteigen will, nutzt das Excel-Modul für beliebige, individuelle Auswertungen.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'audako® IoT Plattform',
      productImage: '',
      state: 'published',
      productLink: 'https://www.audako.com/de/audako-plattform',
      productCompany: 'narz systems GmbH & Co. KG',
      productDescription:
        'audako® ist ein nachhaltiges Software Produkt für Ihr Energiemonitoring und Ressourcen-Management. Sie können mit audako Energieverbräuche transparent machen und mithilfe von Verbrauchsdaten Ihr Energiemanagement effektiver gestalten. Mit dem Einsatz von IoT Monitoringsystemen können Sie generierte Datenmengen (Smart Data) aus den Sektoren Wasser, Abwasser, Verkehr und Energie effizienter als zuvor nutzen. Sie erhalten viele Möglichkeiten Prozesse und Verbräuche zu optimieren. Sie können mögliche Einsparpotenziale, Entscheidungsunterstützungen und Planungsprozesse auf dieser Basis erschließen.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
        Lebenszyklus: true,
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
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'COMMUNALFM®',
      productImage: '',
      state: 'published',
      productLink: 'https://www.communal-fm.de/software.html',
      productCompany: 'Communal-FM GmbHC',
      productDescription:
        'Die Software COMMUNALFM® ist speziell auf die Wahrnehmung kommunaler Facility-Management-Aufgaben zugeschnitten. Das Modul Energiemanagement ist das zentrale Informations- und Entscheidungstool für energiebeauftragte Anwender. Die Grundlage jeglichen Energiemanagements, die Erfassung und Übertragung von Zählerständen und Verbräuchen, kann durch die Anbindung an das Internet ortsunabhängig (z. B. Hausmeister in der Schule) auch von mobilen Geräten aus vorgenommen werden. Die erfassten Daten laufen plausibilitätsgeprüft an zentraler Stelle zusammen. Dem komplexen Thema Energiemanagement begegnet das Modul mit einer Fülle an durchdachten Arbeitserleichterungen (z. B. automatische Bereitstellung aktueller Klimafaktoren zur Witterungsbereinigung, Vergleichskennwerte, Plausibilitätsprüfung, Warnschwellendefinition, Erinnerungsfunktion, …), wodurch es zum unabdingbaren Werkzeug für Energiemanager und zur Erstellung von Energieberichten wird.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Energinet',
      productImage: '',
      state: 'published',
      productLink: 'https://cebyc.de/',
      productCompany: 'Cebyc GmbH',
      productDescription:
        'Energinet ist ein Verwaltungstool für das Energie-, Abfall- und Umweltmanagement und deckt die gesamte Kette von der Messung bis zum Reporting ab. Unsere Software wird von Kunden aus der Industrie, dem privaten und öffentlichen Sektor, Netzbetreibern und Energieberatern eingesetzt. Energinet ist eine benutzerfreundliche, anpassungsfähige und hochgradig konfigurierbare Plattform, die für Benutzer aller Erfahrungsstufen geeignet ist. Über individuelle Dashboards und automatische Berichtsverteilungen können Sie direkt mit Ihren Kollegen-innen, Kunden und Mietern kommunizieren. Energinet verwendet gängige Analysemethoden für den Energieverbrauch sowie Algorithmen zur Abweichungserkennung und Prognose des Energieverbrauchs.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
        'externe Stakeholder': true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'EMS-EDM PROPHET®',
      productImage: '',
      state: 'published',
      productLink: 'https://www.edm-prophet.de/',
      productCompany: 'Fraunhofer ISOB-AST',
      productDescription:
        'Unsere Plattform EMS-EDM PROPHET® ist ein TÜV-zertifiziertes Energiedatenmanagement nach DIN EN ISO 50001. Durch unsere Herkunft aus der Fraunhofer-Gesellschaft arbeiten wir an Lösungen, die unseren Kunden einen Vorsprung im Wettbewerb verschaffen. Diese Lösungen können sehr schnell in unserer Plattform EMS-EDM PROPHET® integriert und damit von unseren Kunden bequem in Ihrem Geschäftsmodell eingebunden werden.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ELOG-Report',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.fraenz-jaeger.de/de/news-de-im-menu/elog-report',
      productCompany: 'Fränz & Jaeger GmbH',
      productDescription:
        'eLOG Report ergänzt das universelle Messsystem eLOG node um eine EMS-Zentrale. eLOG Report unterstützt die wichtigen Darstellungsarten: Kurven-, Balken-, Torten-, Sankey Diagramm und erzeugt daraus Berichte. Der eLOG Server archiviert die Messwerte verschiedener Messstationen und bereitet die Daten für die Darstellung auf. eLOG Report summiert automatisch die Messwerte von mehreren Messgeräten und stellt das Ergebnis in einem Diagramm dar.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'ELOG-Node',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.fraenz-jaeger.de/de/energieemonitoring-de-in-news',
      productCompany: 'Fränz & Jaeger GmbH',
      productDescription:
        'Das ELOG System: Die Energie-Erfassunglösung für Industrie und IT und Liegenschaften. Der zentrale Baustein für die Zertifizierung nach ISO 50001:2011. Mit eLOG node können Sie Elektroenergie sekundengenau erfassen, Strom und Spannung aufzeichnen und die Kurven im Web-Browser anzeigen. Weitere Funktionen sind die Erfassung von Klimadaten (Temperatur, Feuchte .. ) und Verbrauchsdaten (Energie, Wasser, Gas, Dampf, Druckluft), Elektro Oberwellenanalyse, Gasverbrauch messen, uvm.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'SPARTACUS Facility Management®',
      productImage: '',
      state: 'published',
      productLink: 'https://www.spartacus-fm.de/fm-prozesse/energiecontrolling',
      productCompany: 'N+P Informationssysteme GmbH',
      productDescription:
        'Die CAFM-Lösung SPARTACUS Facility Management® (SPARTACUS) unterstützt Unternehmen vollumfänglich beim Energiecontrolling. Basierend auf den durch die GEFMA-Richtlinie 444 empfohlenen Teilprozessen, können Sie folgende Aufgaben durchgängig abbilden: Erfassung und Monitoring der Medienverbräuche, Vorbereitung für Energieberichte und Entscheidungsvorlagen und Unterstützung bei der Planung und Realisierung von Maßnahmen zur Verbesserung der Energieeffizienz.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
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
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'VADEV®',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.nzr.de/home/loesungen/systemtechnik/software/vadev/',
      productCompany: 'NZR®',
      productDescription:
        'Das Energiedatenmanagementsystem VADEV® erfüllt vor allem folgende Aufgaben: Automatische Erfassung der Zählerdaten, strukturiertes Abspeichern der erfassten Werte, Analyse und Auswertung der Daten innerhalb VADEV® und Export der Daten in weitere Formate zur Weiterverarbeitung der Daten.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'CountVision',
      productImage: '',
      state: 'published',
      productLink:
        'https://www.nzr.de/home/loesungen/systemtechnik/software/countvision/',
      productCompany: 'NZR®',
      productDescription:
        'Die Energiemanagement Software CountVision ist die Lösung für Industrie-, Filial-Unternehmen und alle, die ihre Verbräuche im Griff haben müssen. Sie dient dazu, Energiesparpotentiale aufzudecken und systematisch zu analysieren. So bietet das System die Möglichkeit, die erfassten Verbrauchs- und Energiedaten durch eigene unternehmensspezifische Größen anzureichern. Das System liefert Informationen, um der Belegschaft Zusammenhänge zu verdeutlichen. Mitarbeiterinformation fördert die Akzeptanz und das Verständnis von Einsparmaßnahmen und den damit verbundenen Verhaltensänderungen. Durch den flexiblen Dashboard-Konfigurator können Sie jederzeit Ihre eigenen Vorstellungen und Ideen schnell umsetzen und vorzeigbare Ergebnisse liefern.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Mitarbeiter: true,
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
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'InfoCarrier® EnMS',
      productImage: '',
      state: 'published',
      productLink:
        'https://onoff-group.de/leistungen/infocarrier-ems-environmental-monitoring-system',
      productCompany: 'on/off it-solutions GmbH',
      productDescription:
        'Das Environmental Monitoring System des InfoCarrier® (EMS) erfasst, visualisiert und dokumentiert Bedingungen der Produktionsumgebung, wie Temperaturen, Drücke, Luftfeuchten, Partikelmengen aber auch zum Beispiel Gerätewerte, wie Temperaturen von Tiefkühlzellen/-schränken. Und dies sowohl von stationären als auch mobilen Sensoren. Dafür verwenden wir standardisierte, im Haus onoff entwickelte und vorgetestete Module, die mit Zusatzfunktionen wie Gradientenberechnung, automatischer Grenzwertanpassung, Datenpufferung oder einem chargenbezogenen Reporting erweitert werden können.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Anlagen: true,
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'deZemVis',
      productImage: '',
      state: 'published',
      productLink: 'https://www.dezem.de/visualisierung-und-analyse/',
      productCompany: 'deZem GmbH',
      productDescription:
        'deZemVis ist unsere webbasierte, interaktive Visualisierungs­software mit vielen praktischen, innovativen Analysefunktionen. Mit deZemVis können Energieverbräuche und Instandhaltung optimiert, Kosten reduziert, und die Anforderungen der ISO 50001 mehr als erfüllt werden. Wichtig ist uns, mit deZemVis eine für Manager, Controller und Techniker gemeinsam nutzbare, professionelle Plattform anzubieten.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
      },
      anwendungsbereich: {
        Zertifizierung: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'deZemBoard',
      productImage: '',
      state: 'published',
      productLink: 'https://www.dezem.de/dashboards/',
      productCompany: 'deZem GmbH',
      productDescription:
        'deZemBoard ist ein Baukasten für Dashboards mit einer großen Anzahl interaktiver Widgets, die Sie schnell, einfach und flexibel nach Ihren Wünschen einsetzen können. Konfigurieren Sie mit wenigen Klicks individuelle Dashboards aus Diagrammen, Nachrichten, Bildern oder komplexeren Bausteinen, um Ihr Energiemanagement oder andere datenbasierte Projekte gezielt zu unterstützen und um vertiefte Erkenntnisse zu gewinnen, Auffälligkeiten zu studieren, Berichte anzufertigen oder Ihr Energiecontrollingsystem zu verwalten.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
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
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'deZemReport',
      productImage: '',
      state: 'published',
      productLink: 'https://www.dezem.de/berichte/',
      productCompany: 'deZem GmbH',
      productDescription:
        'deZemReport ist das Modul zum Konfigurieren von Energie- und Umweltberichten, die automatisch und regelmäßig per E‑Mail versandt werden. Das Besondere an deZemReport ist die sehr einfache Konfiguration, der Nutzer wird unaufdringlich von Schritt zu Schritt geleitet, der fertige Bericht wird noch einmal in Voransicht gezeigt. Berichte werden wahlweise täglich, wöchentlich, monatlich oder jährlich an frei konfigurierbare Nutzergruppen verschickt.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Berichterstattung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'PlantMaster',
      productImage: '',
      state: 'published',
      productLink: 'https://www.bmsvision.com/products/plantmaster',
      productCompany: 'BMSVision',
      productDescription:
        'PlantMaster is a leading MES system for discrete manufacturing. It is a powerful and extensive yet flexible tool enabling managers to achieve operational excellence and rapidly respond to changing conditions.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
        Mitarbeiter: true,
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
        Anlagen: true,
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
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Enit Messkonzeptplaner',
      productImage: '',
      state: 'published',
      productLink: 'https://www.messkonzept-planer.de/',
      productCompany: 'Enit Energy IT Systems GmbH',
      productDescription:
        'Die Erstellung eines Messkonzepts ist für betriebliches Energiemanagement unabdingbar und legt den Grundstein für ein effizientes kosten- und energieeinsparendes Wirtschaften in jedem Industriebetrieb. Um bereits vorhandene Metadaten visuell darstellen zu können, werfen Sie doch einen ersten Blick in unser Messkonzeptplaner Startertool. Dieser Service ist für Sie kostenfrei. Warum brauche ich ein Messkonzept? Zur Einhaltung gesetzlicher Vorgaben und Regulierungen im Rahmen von Zertifizierungen und Auditierungen, zur Inanspruchnahme von Förderprogrammen wie BAFA, für die Dokumentation und Planung Ihrer Energieflüsse und zur effizienten Nutzung einer Energiemanagement-Software.',
      zielgruppe: {
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Enit act',
      productImage: '',
      state: 'published',
      productLink: 'https://enit.io/produkte/lastmanagement',
      productCompany: 'Enit Energy IT Systems GmbH',
      productDescription:
        'Lastspitzen können zu sehr hohen Stromkosten führen. Unternehmen können oftmals ihre schaltbaren Verbraucher nicht identifizieren oder haben keinen Überblick über die Energieverbräuche der Prozessabläufe innerhalb einzelner Produktionsschritte. Mit unserem dynamischen Lastmanagementsysetem ENIT act, werden die Lastspitzen Ihres Unternehmens durch intelligente Algorithmen erfasst und gesteuert. Mit der Kombination aus der ENIT Hardware und der ENIT act Software, werden Lastspitzen erkannt und können dadurch frühzeitig verhindert werden. Durch die real-time Übertragung werden Metadaten direkt an die ENIT act Software übermittelt. Mittels eines Algorithmus steuert unser System gegen sich anbahnenden Lastspitze. Anhand der gesammelten Daten lernt das System wann und warum Lastspitzen auftreten. Ein frühzeitiges und langfristiges Entgegensteuern und Vermeiden ist dadurch möglich.',
      zielgruppe: {
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Managementzentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'Enit carbon',
      productImage: '',
      state: 'published',
      productLink: 'https://enit.io/produkte/co2-bilanzierung',
      productCompany: 'Enit Energy IT Systems GmbH',
      productDescription:
        'ENIT carbon begleitet Sie auf dem Weg in Richtung CO2 -freier Unternehmensführung. Für die ersten Schritte in Richtung unternehmensweiter CO2 -Bilanz stellen wir Ihnen unser CO2 - Bilanzierung Startertool als Software-Feature zur Verfügung, damit Sie einen ersten Überblick bzgl. der verbrauchten Emissionen Ihrer Unternehmensstruktur erhalten.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
      },
      anwendungsbereich: {
        Ökobilanzierung: true,
      },
      gradDerIntegrierung: {
        'SaaS-Lösung': true,
      },
      objektAspekt: {
        Energie: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      account_id: 0,
      productName: 'emson Tools',
      productImage: '',
      state: 'published',
      productLink: 'https://www.adapton.de/emson-tools/',
      productCompany: 'adapton AG',
      productDescription:
        'Die emson Tools bieten einen einfachen und schnellen Einstieg in das Energiemanagement. Entwickelt von Energieexperten und im täglichen Einsatz durch die adapton Berater, wird in zahlreichen Projekten die Praxis Tauglichkeit gefördert. emson ist ISO 50001 konform und gelistet als förderfähige Energiemanagement-Software nach BAFA Richtlinien. Dabei profitieren Sie von allen Vorteilen einer modernen und sicheren Energiemanagement-Software. Sie haben unabhängig von Ihrem Standort und Endgerät Zugriff auf Ihre gesamten Energiedaten. Die Stärke liegt insbesondere in der ganzheitlichen Betrachtung aller Themen, von der Energieeffizienz bis zur Energie-Compliance. Dass emson alle Energie und Verbrauchsmedien wie Strom, Erdgas, Fernwärme, Wasser etc. betrachtet ist selbstverständlich.',
      zielgruppe: {
        Geschäftsführung: true,
        Umweltbeauftragte: true,
        Fachabteilung: true,
      },
      anwendungsbereich: {
        Gesetzeskonformität: true,
        Ökobilanzierung: true,
        Berichterstattung: true,
        Entscheidungsunterstützung: true,
      },
      gradDerIntegrierung: {
        'Stand-Alone': true,
      },
      objektAspekt: {
        Energie: true,
        Kosten: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Bewertungszentriert: true,
      },
    rejectReason: '',
      viewCounter: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
   ];

  for (const product of products) {
    try {
      await storeProduct(product);
    } catch (e) {
      res.status(500).send();
      console.error(e);
      return;
    }
  }
  res.send();
}
