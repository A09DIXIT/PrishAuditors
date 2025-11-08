import React from 'react';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-wrapper">
      <ul>
        
        <li>
          <a
            href="https://x.com/Prishaccounting"
            target="_blank"
            rel="noopener noreferrer"
            className="twitter"
            title="Follow us on Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/prish-accounting-auditing-llc/about/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin"
            title="Connect on LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/prish.accounting/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
            title="Follow us on Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
        <li>
  <a
    href="https://wa.me/971567244122"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp"
    title="Chat with us on WhatsApp"
  >
    <i className="fab fa-whatsapp"></i>
  </a>
</li>

      </ul>
    </div>
  );
};

export default SocialSidebar;
