import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

const defaultDescription = '';
const defaultTitle = '';

export default ({ title, description, currentRoute, children }) => (
    <div>
        <Helmet
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE-edge,chrome=1" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />

            <meta name="description" content={description ? description : defaultDescription} />
            <title>{title ? title : defaultTitle}</title>
        />

        <Header currentRoute={currentRoute} />

        <main>
            {children}
        </main>

        <Footer />
    </div>
);
