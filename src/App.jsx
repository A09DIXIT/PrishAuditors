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
import Audit from './Pages/Audit';
import Taxation from './Pages/Taxation';
import Contactus from './Pages/Contactus';
import StatutoryAudit from './Pages/StatutoryAudit';
import FAQAccordion from './FAQAccordion';
import ConcurrentAudit from './assets/components/Concurrent.components/ConcurrentAudit.component';
import ForensicAudit from './assets/components/ForensicAudit.component/ForensicAudit.component';
import InventoryAudit from './assets/components/InventoryAudit.component';
import Blog from './Pages/Blog';
import Download from './Pages/Download';
import MysteryAudit from './Pages/MysteryAudit';
import RiskAssurance from "./Pages/RiskAssurance";
import AccountingBookkeeping from './Pages/AccountingBookkeeping';
import AntiMoneyLaundering from './Pages/AntiMoneyLaundering';
import CorporateConsultancy from './Pages/CorporateConsultancy';
import CompanyIncorporation from './Pages/CompanyIncorporation';
import MergersAcquisitions from './Pages/MergersAcquisitions';



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
    { path: '/services/audit', element: <Audit />},
    { path: '/services/taxation', element: <Taxation />},
    { path: '/contact/dubai', element: <Contactus />},
    { path: '/statutory-audit', element: <StatutoryAudit />},
    { path: '/FAQAccordion', element: <FAQAccordion />},
    { path: '/concurrent-audit', element: <ConcurrentAudit />},
    { path: '/forensic-audit', element: <ForensicAudit />},
    { path: '/inventory-audit', element: <InventoryAudit />},
    { path: '/resources/blogs', element: <Blog />},
    { path: '/resources/downloads', element: <Download />},
    { path: '/mystery-audit', element: <MysteryAudit />},
    { path: '/services/risk-assurance', element: <RiskAssurance />},
    { path: '/services/AccountingBookkeeping', element: <AccountingBookkeeping />},
    { path: '/services/AntiMoneyLaundering', element: <AntiMoneyLaundering />},
    { path: '/services/corporate-consulting', element: <CorporateConsultancy />}, 
    { path: '/services/CompanyIncorporation', element: <CompanyIncorporation />},  
    { path: '/services/Mergers-Acquisitions', element: <MergersAcquisitions />},   
     ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
