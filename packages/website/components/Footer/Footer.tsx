import styles from './Footer.module.css';
import GitIcon from '../../public/git.svg';
import FbIcon from '../../public/fb.svg';
import IgIcon from '../../public/ig.svg';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.column}>
        <h3 className={styles.text}>Przetwarzanie danych</h3>
        <p className={styles.text}>
          Żadne dane udostępnione nam nie są przez nas zbierane a wszelkie ich przetwarzanie odbywa się po stronie
          klienta.
        </p>
      </div>

      <div className={styles.column}>
        <Link href='/#hero'>
          <p className={styles.text}>O wtyczce</p>
        </Link>
        <Link href='/#cards'>
          <p className={styles.text}>Jak to działa</p>
        </Link>
        <p className={styles.text}>Zostań partnerem</p>
      </div>

      <div className={styles.column}>
        <Link href='/authors'>
          <p className={styles.text}>O nas</p>
        </Link>
        <Link href='/#contact'>
          <p className={styles.text}>Kontakt</p>
        </Link>
        <p className={styles.text}>Kariera</p>
      </div>

      <div className={styles.column}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <Link href='https://github.com/CodersCamp2021-HK/CodersCamp2021.Hackathon' target='_blank' rel='noreferrer'>
              <a target='_blank'>
                <Image src={GitIcon} alt='github' />
              </a>
            </Link>
          </div>
          <div className={styles.icon}>
            <Image src={FbIcon} alt='fb' />
          </div>
          <div className={styles.icon}>
            <Image src={IgIcon} alt='ig' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
