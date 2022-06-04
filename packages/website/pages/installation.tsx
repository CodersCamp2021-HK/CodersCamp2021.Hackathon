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
          <h2>
            Krok <span style={{ color: 'var(--primary-main)' }}>1</span>
          </h2>
          <p>
            Naciśnij przycisk “Pobierz wtyczkę”. Zostaniesz przeniesiony na stronę gdzie znajduje się do pobrania
            wtyczka w sekcji “Assets”.
          </p>
          <button className='button' style={{ width: 'fit-content' }}>
            <a href='https://github.com/CodersCamp2021-HK/CodersCamp2021.Hackathon' target='_blank' rel='noreferrer'>
              Pobierz wtyczkę
            </a>
          </button>
        </div>
        <Image src={SafariBrowserImg} alt='Safari Browser' />
      </section>

      <section className={styles.section}>
        <Image src={MacbookImg} alt='Macbook Image' />
        <div className={styles.text}>
          <h2>
            Krok <span style={{ color: 'var(--primary-main)' }}>2</span>
          </h2>
          <p>Rozpakuj archiwum z wtyczką do folderu.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2>
            Krok <span style={{ color: 'var(--primary-main)' }}>3</span>
          </h2>
          <p>Wejdź na chrome://extensions.</p>
        </div>
        <Image src={SearchFieldImg} alt='Serch Field' />
      </section>

      <section className={styles.section}>
        <Image src={SafariExtensionImg} alt='Safari Browser' />
        <div className={styles.text}>
          <h2>
            Krok <span style={{ color: 'var(--primary-main)' }}>4</span>
          </h2>
          <p>Zaznacz “Developer mode” i kliknij “Load unpacked” i wybierz wypakowaną wtyczkę.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.text}>
          <h2>
            Krok <span style={{ color: 'var(--primary-main)' }}>5</span>
          </h2>

          <p>Kliknij w ikonkę rozszerzeń obok paska wyszukiwania i kliknij pinezkę przy zainstalowanej wtyczce.</p>
        </div>
        <Image src={ExtensionViewImg} alt='Extension View Image' />
      </section>

      <section className={styles.section} style={{ borderTop: '10px solid black' }}>
        <h1 style={{ color: 'var(--primary-main)' }}>Od teraz chroni Cię Faktyczka!</h1>
      </section>
    </div>
  );
};

export default installation;
