import React,{useState} from 'react';
import Navbar from './navbar';
import Header from './Header';
import Body from './Body';
import Aboutus from './Aboutus';
import Services from './Services';
// import Contact from './Contact';
import Footer from './Footer';
import Viewalldata from './Viewalldata';
import FAQ from './FAQ';
// import RegisterModal from './register';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <>
      <Navbar onRegisterClick={openModal}/>
      {/* <RegisterModal isOpen={isModalOpen} onClose={closeModal} /> */}
      <Header />
      <Body />
      <Aboutus />
      <Services />
      {/* <Viewalldata/> */}
      {/* <FAQ/> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default Home;
