import filialfinder from './migros-filialfinder.jpg';
import cosmopolitan from './cosmopolitan.jpg';
import migrosJobs from './migros-jobs.jpg';
import familyIndex from './gfbi.jpg';
import matool from './matool.jpg';
import gvg from './gvg.jpg';
import migrosFaq from './migros-faq.jpg';
import migipedia from './migipedia.jpg';
import migrosSuche from './migrossuche.jpg';
import namenskarte from './namenskarte.png';
import reineinkommen from './reineinkommen.png';
import kraeutergarten from './kraeutergarten.jpg';
import saisontabelle from './saisontabelle.jpg';
import lebenserwartung from './lebenserwartung.png';
import unfallkarte from './unfallkarte.jpg';
import steuerrechner from './steuerrechner.jpg';

export default [
  {
    title: 'Filialfinder',
    category: 'API und Webapplikation',
    description:
      '<p>Mit dem neuen Migros Filialfinder können Kundinnen und Kunden zu Hause oder unterwegs relevante Filialinformationen schnell und einfach abrufen. Als Backend wurde eine Node.js API mit Elasticsearch als Suchindex entwickelt. Mit diesem Stack können eine hohe Performance und die optimale Volltextsuche garantiert werden. Durch starke Suchmaschinenoptimierung (SEO) können auch alle Filialen inklusive deren Öffnungszeiten bei renommierten Suchmaschinen gefunden werden.</p>',
    image: {
      src: filialfinder,
      alt: 'Filialfinder',
    },
    caseUrl: '/cases/migros-filialfinder',
  },
  {
    title: 'Cosmopolitan',
    category: 'CRM',
    description:
      '<p>Für die Cosmopolitan Vermögensverwaltungs AG haben wir, mit der Kundin zusammen, ein CRM-System entwickelt, welches die geschäftsspezifischen Prozesse genau abbildet. Die Webapplikation bietet viele Features wie Erfassungsassistenten, Vollständigkeitschecks, SIX API-Anbindung (Börse), Anlegetools und Reportings. Die Applikation wird in ihrer Funktionalität laufend erweitert.</p>',
    image: {
      src: cosmopolitan,
      alt: 'Filialfinder',
    },
    caseUrl: '/cases/cosmo-crm',
  },
  {
    title: 'Stellenbörse',
    category: 'API und Webapplikation',
    description:
      '<p>Für die Migros als diversifizierte Arbeitgeberin ist die Rekrutiertung von gut ausgebildetem Fachpersonal eminent wichtig, auch innerhalb des Onlineauftritts. In der Stellenbörse, die wir für sie entwickelt haben, sind offene Jobs in ansprechendem Design aufgelistet; zudem ermöglicht Elasticsearch intelligentes Suchen.</p><p><a href="https://jobs.migros.ch/">jobs.migros.ch</a></p>',
    image: {
      src: migrosJobs,
      alt: 'Stellenbörse',
    },
  },
  {
    title: 'Dataviz',
    category: 'Global Family Business Index',
    description:
      '<p>In Zusammenarbeit mit dem <a href="http://www.cfb.unisg.ch/en?sc_lang=de">Center for Family Business, University of St.Gallen (HSG)</a> und <a href="https://familybusiness.ey-vx.com/home/home.aspx">Global Family Business Center of Excellence von Ernst &amp; Young</a> haben wir die 500 grössten Familienunternehmen aufbereitet und ansprechend visualisiert.</p><p><a href="http://familybusinessindex.com/">familybusinessindex.com</a></p>',
    image: {
      src: familyIndex,
      alt: 'Global Family Business Index',
    },
  },
  {
    title: 'API und Webapplikation',
    category: 'MATOOL.com',
    description:
      '<p>MATOOL.com ist eine innovative Plattform für das Suchen und Anbieten von Maschinenkapazitäten. Grundlegende Maschinendaten werden von der Applikation automatisch importiert, aufbereitet und den Usern mittels Google Maps einfach und verständlich präsentiert. Mittels Geo- und Facettensuche sind für den Benutzer interessante Maschinen einfach zu finden. Die Applikation wurden von Beginn an für hohe Skalierbarkeit ausgelegt und kann in einer AWS Cloud betrieben werden.</p><p><a href="https://matool.com/">matool.com</a></p>',
    image: {
      src: matool,
      alt: 'MATOOL.com',
    },
  },
  {
    title: 'CMS / Frontend Entwicklung',
    category: 'Gebäude­versicherung Graubünden',
    description:
      '<p>Der neue Webauftritt der Gebäudeversicherung Graubünden soll der Bevölkerung den Kontakt zur Verwaltung erleichtern. Wichtige Formulare werden den Benutzenden einfach und verständlich via Web zugänglich gemacht und erlauben es so beispielsweise, eine Schadenmeldung online zu erfassen.</p><p><a href="http://gvg.gr.ch/">gvg.gr.ch</a></p>',
    image: {
      src: gvg,
      alt: 'Gebäude­versicherung Graubünden',
    },
  },
  {
    title: 'API und Webapplikation',
    category: 'Migros FAQ',
    description:
      '<p>Um ihren Kundinnen und Kunden allmögliche Fragen einfach und direkt beantworten zu können, hat die Migros eine FAQ Seite von uns erstellen lassen. Diese bietet eine Volltextsuche sowie eine Kategorisierung der Fragen. Durch starke Suchmaschinenoptimierungen (SEO) sind die Fragen auch bei renommierten Suchmaschinen gut auffindbar.</p><p><a href="https://faq.migros.ch/">faq.migros.ch</a></p>',
    image: {
      src: migrosFaq,
      alt: 'Migros FAQ',
    },
  },
  {
    title: 'API',
    category: 'Migipedia',
    description:
      '<p>Für Migipedia, die neue Community Plattform der Migros, haben wir neben diverser Lithium-Komponenten die Schnittstelle zu Migros-internen Systemen wie der M-Infoline sowie eine Abstraktion der Lithium-API für die Integration in Drittsysteme entwickelt.</p><p><a href="https://www.migipedia.ch/">migipedia.ch</a></p>',
    image: {
      src: migipedia,
      alt: 'Migipedia',
    },
  },
  {
    title: 'API und Webapplikation',
    category: 'Migros Suche',
    description:
      '<p>Für Migros, die grösste Detailhändlerin der Schweiz, haben wir eine zentrale, aggregierte Suche entwickelt. Sie ermöglicht es den Kundinnen und Kunden, Informationen aus verschiedenen von der Migros betriebenen Drittsystemen zielgerecht zu durchsuchen.</p>',
    image: {
      src: migrosSuche,
      alt: 'Migros Suche',
    },
  },
  {
    title: 'Dataviz',
    category: 'Namenskarte',
    description:
      '<p>Alles Müller oder was? Für den «Tages-Anzeiger» entwickelten wir zusammen mit der <a href="http://www.sotomo.ch/">Forschungsstelle Sotomo</a> der Universität Zürich eine interaktive Karte zur Veranschaulichung der geografischen Auftretenswahrscheinlichkeit von Nachnamen, basierend auf Telefonbucheinträgen.</p><p><a href="http://blog.tagesanzeiger.ch/datenblog/index.php/6859/alles-mueller-oder-was">tagi.ch</a></p>',
    image: {
      src: namenskarte,
      alt: 'Namenskarte',
    },
  },
  {
    title: 'Dataviz',
    category: 'Einkommen im schweizweiten Vergleich',
    description:
      '<p>Wo der Mittelstand prosperiert. Für den «Tages-Anzeiger» entwickelten wir zusammen mit der <a href="http://www.sotomo.ch/">Forschungsstelle Sotomo</a> der Universität Zürich eine interaktive Karte zur Visualisierung der Einkommen im schweizweiten Vergleich.</p><p><a href="http://blog.tagesanzeiger.ch/datenblog/index.php/6683/wo-der-mittelstand-prosperiert">tagi.ch</a></p>',
    image: {
      src: reineinkommen,
      alt: 'Einkommen im schweizweiten Vergleich',
    },
  },
  {
    title: 'Webapplikation',
    category: 'Kräutergarten',
    description:
      '<p>Der Kräutergarten ist eine interaktive Applikation, die es den Kundinnen und Kunden ermöglicht, herauszufinden, für welche Kräuter sie den passenden Standort besitzen und die seinen kulinarischen Vorlieben entsprechen. Unter Verwendung von AngularJS haben wir die Seite für Generation M im responsiven Design kreiert.</p><p><a href="https://generation-m.migros.ch/de/nachhaltig-leben/tipps-tools/kraueter-guide.html">generation-m.migros.ch</a></p>',
    image: {
      src: kraeutergarten,
      alt: 'Kräutergarten',
    },
  },
  {
    title: 'Webapplikation',
    category: 'Saisontabelle',
    description:
      '<p>Für Generation M haben wir eine interaktive Saisontabelle als responsive Applikation, basierend auf AngularJS, erstellt. Für das Design der Applikation zeigt sich <a href="http://www.denkwerk.com/">denkwerk</a> verantwortlich.</p><p><a href="http://www.migros.ch/generation-m/de/essen-und-kochen/gesunde-ernaehrung/saisontabelle.html">generation-m.migros.ch</a></p>',
    image: {
      src: saisontabelle,
      alt: 'Saisontabelle',
    },
  },
  {
    title: 'Dataviz',
    category: 'Lebenserwartungs­karte',
    description:
      '<p>Für die «SonntagsZeitung» entwickelten wir zusammen mit der <a href="http://www.sotomo.ch/">Forschungsstelle Sotomo</a> der Universität Zürich eine interaktive Karte, die der Visualisierung der Lebenserwartung im schweizweiten Vergleich dient.</p><p><a href="http://blog.tagesanzeiger.ch/datenblog/index.php/5419/wo-die-schweizer-wie-alt-werden">tagi.ch</a></p>',
    image: {
      src: lebenserwartung,
      alt: 'Lebenserwartungs­karte',
    },
  },
  {
    title: 'Dataviz',
    category: 'Unfallkarte',
    description:
      '<p>Für die «SonntagsZeitung», den «Tages-Anzeiger» und den «Matin Dimanche» entwickelten wir zusammen mit der <a href="http://www.sotomo.ch/">Forschungsstelle Sotomo</a> der Universität Zürich eine Visualisierungskarte der Verkehrsunfälle der Schweiz basierend auf Google Maps.</p>',
    image: {
      src: unfallkarte,
      alt: 'Unfallkarte',
    },
  },
  {
    title: 'Dataviz',
    category: 'Steuerrechner',
    description:
      '<p>Für den «Tages-Anzeiger» entwickelten wir zusammen mit der <a href="http://www.sotomo.ch/">Forschungsstelle Sotomo</a> der Universität Zürich einen interaktiven Steuerrechner zur Visualisierung der Steuerbelastung im schweizweiten Vergleich.</p><p><a href="http://blog.tagesanzeiger.ch/datenblog/index.php/4117/wo-liegt-ihr-steuerparadies">tagi.ch</a></p>',
    image: {
      src: steuerrechner,
      alt: 'Steuerrechner',
    },
  },
];
