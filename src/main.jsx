import React from 'react'
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


import App from './App'
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import HomePage from './components/pages/HomePage';
import ErrorPage from './components/pages/ErrorPage';
import Resume from './components/pages/Resume';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
   
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      }

    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);


// Way 1

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/portfolio" element={<Portfolio />} />
//           <Route path="*" element={<ErrorPage />} />
//         </Routes>
//       </App>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );