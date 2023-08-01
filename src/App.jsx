import React, { useState } from 'react';
import './App.css'
import Hero from "./Hero.jsx";
import Header from './Header.jsx'
import AboutMe from "./AboutMe.jsx";
import ServicesSecComp from './ServicesSec.jsx';
import Portfolio from './Portfolio.jsx';
import ContactMe from './ContactMe.jsx';

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const handleHeaderItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      {activeSection === 'hero' && (
        <Hero
          personalInfo={{
            name: 'Owais Shah',
            firstMess: 'HI THERE',
            Iam: 'I Am Web Developer And Designer.',
            firstAboutMe: 'I Spend My Days Fixing Problems And Learning New Things That Will Help People Build Their Own Business. ',
            btnText: 'About me'
          }}
        />
      )}

      <Header onHeaderItemClick={handleHeaderItemClick} activeSection={activeSection} />

      {activeSection === 'about' && <AboutMe completeAboutMe={{ name: 'Owais Shah', desig: 'Web Developer' }} />}
      {activeSection === 'services' && <ServicesSecComp />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <ContactMe />}

    </>
  );
};

export default App;
