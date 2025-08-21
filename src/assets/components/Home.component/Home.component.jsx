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

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SocialSidebar />
      <HeaderBanner />
      <AboutUs />
      <AMLBanner />
      <VisionAndValues />
      <WhyChooseUs />
      <ServicesSection />
      <GlobalExpertiseBanner />

      {/* ✅ Botpress Chat */}
      <BotpressChat />

      {/* ✅ Cookie Consent */}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        style={{
          background: '#2B373B',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 2rem',
        }}
        buttonStyle={{
          color: '#fff',
          backgroundColor: '#007BFF',
          fontSize: '14px',
          borderRadius: '5px',
          padding: '8px 16px',
          marginRight: '40px',
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
