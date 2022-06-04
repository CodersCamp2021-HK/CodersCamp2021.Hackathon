import Head from 'next/head';
import styles from '../styles/installation.module.css';
import Image from 'next/image';

import SafariBrowserImg from '../public/SafariBrowser.svg';
import MacbookImg from '../public/Macbook Pro 15_.svg';
import ExtensionViewImg from '../public/obraz 5.svg';
import SearchFieldImg from '../public/search field.svg';
import SafariExtensionImg from '../public/Safari Browser Extension.svg';

const installation = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instalacja</title>
      </Head>

      <section className={styles.section}>
        <div className={styles.text}>
          <h1>Jak zainstalować Faktyczkę?</h1>
          <h2>Krok 1</h2>
          <p>
            Naciśnij przycisk “Pobierz wtyczkę”. Zostaniesz przeniesiony na stronę gdzie znajduje się do pobrania
            wtyczka w sekcji “Assets”.
          </p>
          <button className={styles.btn}>Pobierz wtyczkę</button>
        </div>
        <Image src={SafariBrowserImg} alt='Safari Browser' className={styles.responsive} />
      </section>

      <section className={styles.section}>
        <Image className={styles.responsive} src={MacbookImg} alt='Macbook Image' />
        <div className={styles.text}>
          <h2>Krok 2</h2>
          <p>Rozpakuj archiwum z wtyczką do folderu.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Krok 3</h2>
          <p>Wejdź na chrome://extensions.</p>
        </div>
        <Image src={SearchFieldImg} alt='Safari Browser' className={styles.responsive} />
      </section>
      <section className={styles.section}>
        <Image src={SafariExtensionImg} alt='Safari Browser' className={styles.responsive} />
        <div className={styles.text}>
          <h2>Krok 4</h2>
          <p>Zaznacz “Developer mode” i kliknij “Load unpacked” i wybierz wypakowaną wtyczkę.</p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.text}>
          <h2>Krok 5</h2>
          <p>Kliknij w ikonkę rozszerzeń obok paska wyszukiwania i kliknij pinezkę przy zainstalowanej wtyczce.</p>
        </div>
        <Image src={ExtensionViewImg} alt='Macbook Image' className={styles.responsive} />
      </section>
      <section className={styles.section}>
        <h1>Od teraz chroni Cię Faktyczka!</h1>
      </section>
    </div>
  );
};

export default installation;
