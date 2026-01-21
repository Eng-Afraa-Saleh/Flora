
import React from 'react';
import Header from './Components/HeaderComponents/Header';
import Footer from './Components/FooterComponents/Footer';
import Body from './Components/BodyComponents/Body';

const App: React.FC = () => {
  return (
    <div>
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default App;
