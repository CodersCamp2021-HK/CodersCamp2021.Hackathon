import styles from './Footer.module.css';
import GitIcon from '../../public/git.svg';
import FbIcon from '../../public/fb.svg';
import IgIcon from '../../public/ig.svg';

import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.gridContainer}>
      <section className={styles.gridItem} style={{ padding: '0 10rem 0 10rem' }}>
        <h3 className={styles.text}>Przetwarzanie danych</h3>
        <p className={styles.text}>
          Żadne dane udostępnione nam nie są przez nas zbierane a wszelkie ich przetwarzanie odbywa się po stronie
          klienta.
        </p>
      </section>

      <section className={styles.gridItem}>
        <a href='/#hero'>
          <p className={styles.text}>O wtyczce</p>
        </a>
        <a href='/#cards'>
          <p className={styles.text}>Jak to działa</p>
        </a>
        <p className={styles.text}>Zostań partnerem</p>
      </section>

      <section className={styles.gridItem}>
        <a href='/authors'>
          <p className={styles.text}>O nas</p>
        </a>
        <a href='/#contact'>
          <p className={styles.text}>Kontakt</p>
        </a>
        <p className={styles.text}>Kariera</p>
      </section>

      <section className={styles.gridItem}>
        <div className={styles.icon} style={{ padding: '0 5rem 0 0' }}>
          <a href='https://github.com/CodersCamp2021-HK/CodersCamp2021.Hackathon' target='_blank' rel='noreferrer'>
            <Image src={GitIcon} alt='github' />
          </a>
          <Image src={FbIcon} alt='fb' />
          <Image src={IgIcon} alt='ig' />
        </div>
      </section>
    </div>
  );
};

export default Footer;
