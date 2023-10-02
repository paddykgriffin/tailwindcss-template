import ThemeToggle from '../utils/ThemeToggle';
import HeaderNav from './HeaderNav';
import siteConfig from '@/types/site-config';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        paddingTop: '2rem',
        paddingBottom: '2rem',
      }}
    >
      <div> {siteConfig.siteName}</div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <HeaderNav />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
