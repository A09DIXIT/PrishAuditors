import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar.component/Navbar.component';
import Footer from './Footer.component/Footer.component';
import ContactForm from './ContactForm.component/ContactForm.component';
import CustomerReviews from './CustomerReviews.component/CustomerReviews.component';
import SocialSidebar from './SocialSidebar/SocialSidebar';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen max-w-full justify-center m-auto shadow-md relative">
      <Navbar />

      {/* Add SocialSidebar here */}
      <SocialSidebar />

      <main>
        <Outlet /> {/* This will dynamically load the page content */}

        {/* Show extra sections only on the home page */}
        {location.pathname === '/' && (
          <>
            <CustomerReviews />
            <ContactForm />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
