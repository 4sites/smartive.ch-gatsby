import React from 'react';
import { Stage } from '../components/molecules';
import Service from '../components/service';
import services from '../data/services';
import { getSiteHeader } from '../layouts';

import servicesImage from '../data/services.jpg';

export default () =>
  (<div>
    {getSiteHeader(
      'Projekte',
      'Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.',
    )}
    <Stage
      modifiers={['left-highlighted', 'gradient']}
      image={{
        src: servicesImage,
        alt: 'Zwei smartive Mitarbeiter bei einer Besprechung',
      }}
      title={
        <h1>
          <em>Digital</em> by default.
        </h1>
      }
    >
      <p>
        Wir schätzen uns glücklich, im Zeitalter des Internets aufgewachsen zu sein und so dessen
        Entwicklung selbst mitverfolgt und im kleinen Rahmen mitgestaltet zu haben. Wir glauben an
        das Potenzial, welches das Web für unsere Kundinnnen und Kunden mit sich bringt.
      </p>
      <p>
        Als Digital Natives teilen wir uns alle bei smartive unsere Passion für die Entwicklung von
        Webapplikationen unter Einsatz angesagter Technologien — sowohl am Arbeitsplatz, als auch in
        unserer Freizeit.
      </p>
      <p>
        Wir lieben es, unsere Erfahrungen und unser Wissen mit Ihnen zu teilen und schrecken nicht
        vor anspruchsvollen Aufgaben innerhalb der Umsetzung ehrgeiziger Projekte zurück.
      </p>
    </Stage>
    <div className="container">
      <div className="row">
        {services.map(service =>
          (<Service
            title={service.title}
            catchline={service.catchline}
            lead={service.lead}
            body={service.body}
            image={service.image}
            linkedCase={service.linkedCase}
          />),
        )}
      </div>
    </div>
  </div>);
