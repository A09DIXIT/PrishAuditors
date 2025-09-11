import React, { useEffect } from 'react';
import HeaderBanner from './HeaderBanner.Home.component';
import ServicesSection from '../ServicesSection.component/ServicesSection.component';
import AboutUs from '../AboutUs.component/AboutUs.component';
import VisionAndValues from '../../../Pages/OurValues';
import CookieConsent from 'react-cookie-consent';
import AMLBanner from '../ONEforallbanner/AMLBanner';
import GlobalExpertiseBanner from '../GlobalExpertiseBanner/GlobalExpertiseBanner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import SocialSidebar from '../SocialSidebar/SocialSidebar';
import BotpressChat from '../BotpressChat/BotpressChat';
import BlogSection from '../BlogSection/BlogSection';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Sidebar hidden on mobile */}
      <div className="hidden md:block">
        <SocialSidebar />
      </div>

      {/* Responsive spacing between sections */}
      <div className="flex flex-col space-y-6 sm:space-y-8 lg:space-y-12">
        <HeaderBanner />
        <AboutUs />
        <AMLBanner />
        <VisionAndValues />
        <WhyChooseUs />
        <ServicesSection />
        <GlobalExpertiseBanner />
        <BlogSection />
      </div>

      {/* ✅ Botpress Chat */}
      <BotpressChat />

      {/* ✅ Cookie Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{
          background: '#2B373B',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          textAlign: 'center',
        }}
        buttonStyle={{
          color: '#fff',
          backgroundColor: '#007BFF',
          fontSize: '14px',
          borderRadius: '5px',
          padding: '8px 16px',
          marginTop: '10px',
        }}
        contentStyle={{
          flex: '1',
          marginRight: 'auto',
        }}
        expires={150}
      >
        This website uses cookies to provide necessary site functionality and
        improve your online experience. By using this website, you agree to the
        use of cookies as outlined in PRISH online privacy statement.
      </CookieConsent>
    </>
  );
}
