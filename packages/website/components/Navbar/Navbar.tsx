import styles from './Navbar.module.css';
import LogoIcon from '../../public/logo.svg';

import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className={styles.flexContainer}>
      <Link href='/'>
        <Image src={LogoIcon} alt='Logo' />
      </Link>
      <div className={styles.leftFlexContainer}>
        <Link href='/'>
          <p>Strona główna</p>
        </Link>
        <Link href='/authors'>
          <p>O nas</p>
        </Link>
        <Link target='_blank' href='/installation'>
          <p>Instalacja</p>
        </Link>
        <Link href='/#partners'>
          <p>Partnerzy</p>
        </Link>
        <Link href='/#contact'>
          <p>Kontakt</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
