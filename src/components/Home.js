import React from 'react';
import Navbar from './navbar';
import Header from './Header';
import Body from './Body';
import Aboutus from './Aboutus';
import Services from './Services';
// import Contact from './Contact';
import Footer from './Footer';
import Viewalldata from './Viewalldata';
import FAQ from './FAQ';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Body />
      <Aboutus />
      <Viewalldata/>
      <FAQ/>
      <Services />
     
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
