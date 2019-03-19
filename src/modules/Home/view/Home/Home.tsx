import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import Layout from 'modules/shared/Layout/Layout';
import Header from 'modules/shared/Header/Header';
import Footer from 'modules/shared/Footer/Footer';

import { StylesProps, provideStyles } from './Home.style';

function Home(_props: RouteComponentProps & StylesProps) {

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <div>Content</div>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

export default provideStyles(Home);
