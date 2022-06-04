import styles from './Navbar.module.css';
import LogoIcon from '../../public/logo.svg';

import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.flexContainer}>
      <Image src={LogoIcon} alt='Logo' />
      <div className={styles.leftFlexContainer}>
        <p>O nas</p>
        <p>Instalacja</p>
        <p>Partnerzy</p>
        <p>Kontakt</p>
      </div>
    </div>
  );
};

export default Navbar;
