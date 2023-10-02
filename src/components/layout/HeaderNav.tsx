import React from 'react';
import { HeaderMenuLinks } from './HeaderMenuLinks';

const HeaderNav = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '16px',
      }}
    >
      {HeaderMenuLinks.map(item => (
        <a
          href={item.path}
          key={item.title}
          style={{
            textDecoration: 'none',
          }}
        >
          {item.title}
        </a>
      ))}
    </div>
  );
};

export default HeaderNav;
