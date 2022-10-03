import { Response, Request } from 'express';
import { ProductModel, productSchema } from '../controllers/productController';

export default async function productMigration(req: Request, res: Response) {
  const products = [
    {
      account_id: 0,
      productName: 'default',
      productImage: '',
      state: 'published',
      productLink: '',
      productCompany: '',
      productDescription: '',
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
      productLink: 'https://qumsult.de/software/rechtskataster-paul/',
      productCompany: 'Qumsult',
      productDescription:
        'Die webbasierte Software PAUL ermöglicht Ihnen, auf einfache Weise ein individuelles, standortbezogenes und ISO-konformes Rechtsverzeichnis für Ihre bindenden Verpflichtungen zu erstellen, aktuell zu halten und zu verwalten. Mit PAUL erhalten Sie Zugang zu über 1.200 Vorschriften von EU, Bund, Ländern und Berufsgenossenschaften zum Umweltmanagement (ISO 14001), Energiemanagement (ISO 50001) und Arbeitsschutz / SGA-Management (ISO 45001).',
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
    },

    // {
    //   account_id: 0,
    //   productName: '360report',
    //   productImage: '',
    //   state: 'published',
    //   productLink: '',
    //   productCompany: '',
    //   productDescription: '',
    //   zielgruppe: {
    //     Geschäftsführung: true,
    //     Umweltbeauftragte: true,
    //     Fachabteilung: true,
    //     'externe Stakeholder': true,
    //     Behörden: true,
    //   },
    //   anwendungsbereich: {
    //     Gesetzeskonformität: true,
    //     Zertifizierung: true,
    //     Ökobilanzierung: true,
    //   },
    //   gradDerIntegrierung: {
    //     'SaaS-Lösung': true,
    //   },
    //   objektAspekt: {
    //     Emissionen: true,
    //   },
    //   systemgrenzen: {
    //     'Standort/Betrieb': true,
    //   },
    //   betrachtungskonzept: {
    //     Bewertungszentriert: true,
    //   },
    // },

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
