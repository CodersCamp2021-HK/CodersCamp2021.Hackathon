import Head from 'next/head';
import Image from 'next/image';

import TeamImg from '../public/Team_Illustration.svg';
import GithubIcon from '../public/GitHub.svg';
import styles from '../styles/authors.module.css';
const Authors = () => {
  return (
    <div>
      <Head>
        <title>Autorzy</title>
        <meta name='description' content='Faktyczka' />
        <link rel='icon' href='/Icon128.png' />
      </Head>

      <main>
        <section style={{ padding: '20px 50px 50px 50px' }}>
          <h1> O nas</h1>
          <div className={styles.aboutText}>
            <p>
              Chęć wykorzystania naszej wiedzy i umiejętności do poprawy bezpieczeństwa osób korzystających z Internetu
              zmotywowała nas do rozpoczęcia prac nad rozwiązaniem, które usprawni ostrzeganie użytkowników przed
              nieprawdziwymi informacjami.
            </p>
            <p>
              Tak powstał pomysł stworzenia Faktyczki („fakt” + „wtyczka”) – rozszerzenia do przeglądarki, dzięki
              któremu użytkownik od razu może sprawdzić, czy czytany artykuł jest prawdziwy i nie zawiera fake newsów.
            </p>
          </div>
        </section>
        <section>
          <Image src={TeamImg} alt='Team Image' layout='responsive' />
        </section>

        <section id='cards' className={styles.cardsSection}>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/Tomek_cartoon.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.authorText}>
                <h3>Tomasz Chojnacki</h3>
                <a href='https://github.com/tchojnacki' target='blank'>
                  <Image src={GithubIcon} alt='Github Tomek' />
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/Marta_cartoon.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.authorText}>
                <h3>Marta Mejer</h3>
                <a href='https://github.com/mmejer' target='blank'>
                  <Image src={GithubIcon} alt='Github Marta' />
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/Justyna_cartoon.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.authorText}>
                <h3>Justyna Skrajna</h3>
                <a href='https://github.com/jskrajna' target='blank'>
                  <Image src={GithubIcon} alt='Github Justyna' />
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/Kamil_cartoon.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.authorText}>
                <h3>Kamil Dudek</h3>
                <a href='https://github.com/KamilDudek' target='blank'>
                  <Image src={GithubIcon} alt='Github Kamil' />
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/Hubert_cartoon.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.authorText}>
                <h3>Hubert Kawałek</h3>
                <a href='https://github.com/htk4' target='blank'>
                  <Image src={GithubIcon} alt='Github Hubert' />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Authors;
