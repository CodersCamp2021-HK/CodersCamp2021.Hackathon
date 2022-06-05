import Head from 'next/head';
import styles from '../styles/installation.module.css';
import Image from 'next/image';

import Installation1 from '../public/installation_1.png';
import MacbookImg from '../public/Macbook Pro 15_.svg';
import SearchFieldImg from '../public/search field.svg';
import Installation2 from '../public/installation_2.png';
import Installation3 from '../public/installation_3.png';

const installation = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Instalacja</title>
        <meta name='description' content='Faktyczka' />
        <link rel='icon' href='/Icon128.png' />
      </Head>
      <article className={styles.article}>
        <h1>Jak zainstalować Faktyczkę?</h1>
        <div className={styles.wrapper}>
          <section className={styles.section}>
            <div className={styles.image}>
              <Image src={Installation1} alt='Safari Browser' />
            </div>
            <div className={styles.text}>
              <h2>
                Krok <span style={{ color: 'var(--primary-main)' }}>1</span>
              </h2>
              <p>
                Naciśnij przycisk “Pobierz wtyczkę”. Zostaniesz przeniesiony na stronę gdzie znajduje się do pobrania
                wtyczka w sekcji “Assets”.
              </p>
            </div>
          </section>

          <div className='button' style={{ width: 'fit-content' }}>
            <a
              className='buttonText'
              href='https://github.com/CodersCamp2021-HK/CodersCamp2021.Hackathon/releases/tag/1.0.0'
              target='_blank'
              rel='noreferrer'
            >
              Pobierz wtyczkę
            </a>
          </div>
        </div>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>
              Krok <span style={{ color: 'var(--primary-main)' }}>2</span>
            </h2>
            <p>Rozpakuj archiwum z wtyczką do folderu.</p>
          </div>
          <div className={styles.image}>
            <Image src={MacbookImg} alt='Macbook Image' />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.image}>
            <Image src={SearchFieldImg} alt='Serch Field' />
          </div>
          <div className={styles.text}>
            <h2>
              Krok <span style={{ color: 'var(--primary-main)' }}>3</span>
            </h2>
            <p>Wejdź na chrome://extensions.</p>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.text}>
            <h2>
              Krok <span style={{ color: 'var(--primary-main)' }}>4</span>
            </h2>
            <p>Zaznacz “Developer mode” i kliknij “Load unpacked” i wybierz wypakowaną wtyczkę.</p>
          </div>
          <div className={styles.image}>
            <Image src={Installation2} alt='Safari Browser' />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.image}>
            <Image src={Installation3} alt='Extension View Image' />
          </div>
          <div className={styles.text}>
            <h2>
              Krok <span style={{ color: 'var(--primary-main)' }}>5</span>
            </h2>
            <p>Kliknij w ikonkę rozszerzeń obok paska wyszukiwania i kliknij pinezkę przy zainstalowanej wtyczce.</p>
          </div>
        </section>

        <section className={styles.section} style={{ borderTop: '1px solid black' }}>
          <h2 style={{ color: 'var(--primary-main)' }}>Od teraz chroni Cię Faktyczka!</h2>
        </section>
      </article>
    </div>
  );
};

export default installation;
