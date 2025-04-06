import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/components/Layout.assets';
import Home from './assets/components/Home.component/Home.component';
import ServicesSection from './assets/components/ServicesSection.component/ServicesSection.component';
import ContactForm from './assets/components/ContactForm.component/ContactForm.component';
import About from './Pages/about'; // Correct import for About Page
import OurPeople from './pages/OurPeople';
import OurVision from './pages/OurVision';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <ServicesSection /> },
      { path: '/contact', element: <ContactForm /> },
      { path: '/about', element: <About /> }, // About Page Route
      { path: '/about/ourpeople', element: <OurPeople /> }, 
    { path: '/about/ourvision', element: <OurVision />},
     ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
