import { Response, Request } from 'express';
import { ProductModel, productSchema } from '../controllers/productController';

export default async function productMigration(req: Request, res: Response) {
  const products = [
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
        Zwischenbetrieblich: true,
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
        StoffeStoffströme: true,
      },
      systemgrenzen: {
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
        Managementzentriert: true,
      },
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
        StoffeStoffströme: true,
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
        StoffeStoffströme: true,
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
        StoffeStoffströme: true,
      },
      systemgrenzen: {
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Verwaltungszentriert: true,
      },
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
        StoffeStoffströme: true,
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
        StoffeStoffströme: true,
      },
      systemgrenzen: {
        'Standort/Betrieb': true,
        Zwischenbetrieblich: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
        Managementzentriert: true,
      },
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
        StoffeStoffströme: true,
      },
      systemgrenzen: {
        Prozess: true,
        Produkt: true,
      },
      betrachtungskonzept: {
        Bewertungszentriert: true,
      },
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
