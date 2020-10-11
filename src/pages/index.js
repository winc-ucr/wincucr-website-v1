import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
// import Brands from '@sections/Brands';
import Programs from '@sections/Programs';
import Team from '@sections/Team';
import Sponsors from '@sections/Sponsors';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Programs/>
    {/* <Brands /> */}
    <Team />
    <Sponsors />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
