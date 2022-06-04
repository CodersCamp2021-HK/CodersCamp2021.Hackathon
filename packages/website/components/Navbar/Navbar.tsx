import styles from './Navbar.module.css';
import LogoIcon from '../../public/logo.svg';

import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.flexContainer}>
      <a href='/'>
        <Image src={LogoIcon} alt='Logo' />
      </a>
      <div className={styles.leftFlexContainer}>
        <p>O nas</p>
        <a href='/installation'>
          <p>Instalacja</p>
        </a>
        <a href='/#partners'>
          <p>Partnerzy</p>
        </a>
        <a href='/#contact'>
          <p>Kontakt</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
