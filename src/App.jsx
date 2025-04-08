import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './assets/components/Layout.assets';
import Home from './assets/components/Home.component/Home.component';
import ServicesSection from './assets/components/ServicesSection.component/ServicesSection.component';
import ContactForm from './assets/components/ContactForm.component/ContactForm.component';
import About from './Pages/about'; // Correct import for About Page
import OurPeople from './Pages/OurPeople';
import OurVision from './Pages/OurVision';
import OurValues from './Pages/OurValues';
import Testimonials from './Pages/Testimonials';



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
    { path: '/about/ourvalues', element: <OurValues />},
    { Path: '/about/testimonials', element: <Testimonials />},
     ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
