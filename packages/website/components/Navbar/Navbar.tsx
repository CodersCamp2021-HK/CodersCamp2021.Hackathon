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
          <a>Strona główna</a>
        </Link>
        <Link href='/authors'>
          <a>O nas</a>
        </Link>
        <Link target='_blank' href='/installation'>
          <a>Instalacja</a>
        </Link>
        <Link href='/#partners'>
          <a>Partnerzy</a>
        </Link>
        <Link href='/#contact'>
          <a>Kontakt</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
