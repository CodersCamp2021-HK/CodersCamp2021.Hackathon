import styles from './Footer.module.css';
import GitIcon from '../../../public/git.svg';
import FbIcon from '../../../public/fb.svg';
import IgIcon from '../../../public/ig.svg';

import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.gridContainer}>
      <section className={styles.gridItem}>
        <h3 className={styles.text}>Przetwarzanie danych</h3>
        <p className={styles.text}>
          Żadne dane udostępnione nam nie są przez nas zbierane a wszelkie ich przetwarzanie odbywa się po stronie
          klienta.
        </p>
      </section>

      <section className={styles.gridItem}>
        <p className={styles.text}>O wtyczce</p>
        <p className={styles.text}>Jak to działa</p>
        <p className={styles.text}>Zostań partnerem</p>
      </section>

      <section className={styles.gridItem}>
        <p className={styles.text}>O nas</p>
        <p className={styles.text}>Kontakt</p>
        <p className={styles.text}>Kariera</p>
      </section>

      <section className={styles.gridItem}>
        <div className={styles.icon}>
          <Image src={GitIcon} alt='github' />
          <Image src={FbIcon} alt='fb' />
          <Image src={IgIcon} alt='ig' />
        </div>
      </section>
    </div>
  );
};

export default Footer;
