import React from 'react';
import FooterNav from './FooterNav';
import siteConfig from '@/types/site-config';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        fontSize: '0.875rem',
      }}
    >
      <div>
        &copy; {year} Copyright - {siteConfig.siteName}
      </div>
      <FooterNav />
    </footer>
  );
};

export default Footer;
