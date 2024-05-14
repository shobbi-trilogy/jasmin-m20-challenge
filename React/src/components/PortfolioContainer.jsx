import { useState } from 'react';
import Header from './Header';
import Project from './Project';
import About from './pages/About';
import Contact from './pages/Contact';
import Navigation from './Navigation';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');
    
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Project />;
    };
    
    return (
        <div>
        <Header />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer />
        </div>
    );
    }

