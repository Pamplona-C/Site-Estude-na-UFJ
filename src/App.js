import React from 'react';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='flex flex-col items-center justify-center gap-20'>
      <Header />
      <BannerSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;