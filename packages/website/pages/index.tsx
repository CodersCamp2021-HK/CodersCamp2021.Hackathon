import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.heroContainer}>
            <div className={styles.heroLeftContainer}>
              <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTitle}>Nie daj się oszukać</h1>
                <p>
                  Faktyczka to rozszerzenie do przeglądarki, które ochroni Cię przed fake newsami. Stale rosnąca baza
                  zweryfikowanych artykułów i szerokie grono ekspertów i ekspertek zapewniają, że dotrą do Ciebie tylko
                  sprawdzone informacje.
                </p>
              </div>
              <div className={styles.heroButtons}>
                <div className='button'>
                  <Link href='/'>
                    <a className='buttonText'>Przejdź do instalacji</a>
                  </Link>
                </div>
                <div className='button-outline'>
                  <Link href='/'>
                    <a className='buttonText'>Dowiedz się więcej</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image src='/hero.svg' alt='Hero Illustration' layout='fill' objectFit='contain' />
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.cardsSection}`}>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/card_1.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <h3>Sprawdź</h3>
              <p>Ikonka na pasku przeglądarki wskaże Ci, czy czytany artykuł jest prawdziwy.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/card_2.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <h3>Zgłoś</h3>
              <p>Widzisz coś podejrzanego? Śmiało zgłoś nam artykuł do weryfikacji.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <Image src='/card_3.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <h3>Bądź na bieżąco</h3>
              <p>Artykuł, który ostatnio został przez Ciebie przeczytany, okazał się fake newsem? Poinformujemy Cię!</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Dlaczego Faktyczka?</h2>
          <div className={styles.whyWrapper}>
            <div className={styles.whyContainer}>
              <div className={styles.whyImage}>
                <Image src='/why.svg' alt='Card Illustration' layout='fill' objectFit='contain' />
              </div>
              <div className={styles.whyTextContainer}>
                <p>
                  W obecnych czasach praktycznie każdy może umieścić w sieci informacje pod różną postacią – artykułu na
                  portalu informacyjnym czy posta na Facebooku. Tak zwane fake newsy, czyli nieprawdziwe informacje,
                  stały się narzędziem, które ma ogromną moc kreowania opinii i niesie ze sobą wiele zagrożeń. Dzięki
                  Faktyczce:
                </p>
                <ul>
                  <li>
                    dowiesz się, czy artykuł nie jest fake newsem bez konieczności odwiedzania innych stron
                    weryfikujących informacje
                  </li>
                  <li>będziesz mieć pewność co do prawdziwości informacji</li>
                  <li>nie dasz się manipulacjom mediów.</li>
                </ul>
              </div>
            </div>
            <div className='button'>
              <Link href='/'>
                <a className='buttonText'>Przejdź do instalacji</a>
              </Link>
            </div>
          </div>
        </section>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='/installation' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href='https://github.com/vercel/next.js/tree/canary/examples' className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
