import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Offer from './components/Offer';



const Home = () => {
  return (
    <>  
        <Offer />
        <Header />
        <Banner />
        <Main />
        <Footer />
    </>
  )
}
 export default Home;
