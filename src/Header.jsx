import React from 'react';
import './Header.css';

const Header = ({ onHeaderItemClick, activeSection }) => {
  const handleLinkClick = (section, event) => {
    event.preventDefault();
    onHeaderItemClick(section);
  };

  return (
    <>
      <header className='header w-4/5 mx-auto h-28 bg-section-color rounded-xl'>
        <ul className='h-28 items-center flex justify-between items-center '>
          <li>
            <a className={`text-3xl font-medium text-first-color hover:text-third-color ${activeSection === 'hero' ? 'active' : ''}`} href="" onClick={(e) => handleLinkClick('hero', e)}>
              Home
            </a>
          </li>
          <li>
            <a className={`text-3xl font-medium text-first-color hover:text-third-color ${activeSection === 'about' ? 'active' : ''}`} href="" onClick={(e) => handleLinkClick('about', e)}>
              About Me
            </a>
          </li>
          <li>
            <a className={`text-3xl font-medium text-first-color hover:text-third-color ${activeSection === 'services' ? 'active' : ''}`} href="" onClick={(e) => handleLinkClick('services', e)}>
              Services
            </a>
          </li>
          <li>
            <a className={`text-3xl font-medium text-first-color hover:text-third-color ${activeSection === 'portfolio' ? 'active' : ''}`} href="" onClick={(e) => handleLinkClick('portfolio', e)}>
              Portfolio
            </a>
          </li>
          <li>
            <a className={`text-3xl font-medium text-first-color hover:text-third-color ${activeSection === 'contact' ? 'active' : ''}`} href="" onClick={(e) => handleLinkClick('contact', e)}>
              Contact Me
            </a>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
