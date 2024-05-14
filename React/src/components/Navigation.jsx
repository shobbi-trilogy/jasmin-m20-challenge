// Navigation.jsx
import React from 'react';

function Navigation({ currentPage, setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="#About"
            onClick={() => setCurrentPage('About')}
            className={currentPage === 'About' ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#Project"
            onClick={() => setCurrentPage('Project')}
            className={currentPage === 'Project' ? 'active' : ''}
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="#Contact"
            onClick={() => setCurrentPage('Contact')}
            className={currentPage === 'Contact' ? 'active' : ''}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;