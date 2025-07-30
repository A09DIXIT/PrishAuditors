import React, { useEffect } from 'react';
import HeaderBanner from './HeaderBanner.Home.component';
import ServicesSection from '../ServicesSection.component/ServicesSection.component';
import AboutUs from '../AboutUs.component/AboutUs.component';
import VisionAndValues from '../../../Pages/OurValues';
import CookieConsent from 'react-cookie-consent';
import AMLBanner from '../ONEforallbanner/AMLBanner';
import GlobalExpertiseBanner from '../GlobalExpertiseBanner/GlobalExpertiseBanner';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // ✅ Load Tawk.to script only once
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/68572620c8f520190f1e5ad6/1iua6psjn';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    // ✅ MutationObserver to reposition Tawk.to bubble
    const observer = new MutationObserver(() => {
      const tawk = document.getElementById('tawkchat-container');
      if (tawk) {
        if (window.innerWidth <= 768) {
          tawk.style.left = '20px';
          tawk.style.right = 'auto';
          tawk.style.bottom = '80px';
        } else {
          tawk.style.left = 'auto';
          tawk.style.right = '20px';
          tawk.style.bottom = '40px';
        }
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // ✅ Cleanup on unmount
    return () => {
      observer.disconnect();
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <HeaderBanner />
      <AboutUs />
      <AMLBanner />
      <VisionAndValues />
      <WhyChooseUs />
      <ServicesSection />
      <GlobalExpertiseBanner />

      {/* ✅ WhatsApp Floating Button */}
      <a
        href="https://wa.me/971567244122"
        className="fixed bottom-25 right-15 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </a>

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
