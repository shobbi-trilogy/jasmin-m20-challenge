import { useState, useEffect } from 'react';
// Bringing in the required component from 'react-router-dom' for linking between pages
import { Link } from 'react-router-dom';
import About from '../About';
import Header from '../Header'; // which includes Navigation
import Footer from '../Footer';


export default function HomePage() {

  return (
    <div>
    
      <About />
    
    </div>
  );

}
