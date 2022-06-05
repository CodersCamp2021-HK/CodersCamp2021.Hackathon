import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import InstructionSlider from '../components/InstructionSlider/InstructionSlider';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Faktyczka</title>
        <meta name='description' content='Faktyczka' />
        <link rel='icon' href='/Icon128.png' />
      </Head>

      <main>
        <section id='hero' className={styles.section}>
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
                  <Link href='/installation'>
                    <a target='_blank' className='buttonText'>
                      Przejdź do instalacji
                    </a>
                  </Link>
                </div>
                <div className='button-outline'>
                  <Link href='#cards'>
                    <a className='buttonText'>Dowiedz się więcej</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              <img className={styles.responsiveImage} src='/hero.svg' alt='Hero Illustration' />
            </div>
          </div>
        </section>

        <section id='cards' className={`${styles.section} ${styles.sectionGray}`}>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img className={styles.responsiveImage} src='/card_1.svg' alt='Card Illustration' />
              </div>
              <h3>Sprawdź</h3>
              <p>Ikonka na pasku przeglądarki wskaże Ci, czy czytany artykuł jest prawdziwy.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img className={styles.responsiveImage} src='/card_2.svg' alt='Card Illustration' />
              </div>
              <h3>Zgłoś</h3>
              <p>Widzisz coś podejrzanego? Śmiało zgłoś nam artykuł do weryfikacji.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage}>
                <img className={styles.responsiveImage} src='/card_3.svg' alt='Card Illustration' />
              </div>
              <h3>Bądź na bieżąco</h3>
              <p>Artykuł, który ostatnio został przez Ciebie przeczytany, okazał się fake newsem? Poinformujemy Cię!</p>
            </div>
          </div>
        </section>

        <section id='why' className={styles.section}>
          <h2>Dlaczego Faktyczka?</h2>
          <div className={styles.whyWrapper}>
            <div className={styles.whyContainer}>
              <div className={styles.whyImage}>
                <img className={styles.responsiveImage} src='/why.svg' alt='Why Faktyczka Illustration' />
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
              <Link href='/installation'>
                <a target='_blank' className='buttonText'>
                  Przejdź do instalacji
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section id='instruction' className={`${styles.section} ${styles.sectionGray}`}>
          <h2>Jak to działa?</h2>
          <InstructionSlider />
        </section>

        <section id='partners' className={styles.section}>
          <h2>Nasi partnerzy</h2>
          <p className={styles.partnersText}>
            Współpracujemy z różnymi portalami informacyjnymi i społecznościowymi. Jeżeli chcesz dołączyć do grona
            naszych partnerów i umożliwić swoim odbiorcom bezpieczne zdobywanie informacji,{' '}
            <Link href='#contact'>
              <a className={styles.link}>skontaktuj się z nami</a>
            </Link>
            !
          </p>
          <div className={styles.logosContainer}>
            <div className={styles.logoImage}>
              <Link href='https://demagog.org.pl/'>
                <a target='_blank'>
                  <Image src='/demagog.jpg' alt='Logo' layout='fill' objectFit='contain' />
                </a>
              </Link>
            </div>
            <div className={styles.logoImage}>
              <Link href='https://fakehunter.pap.pl/'>
                <a target='_blank'>
                  <Image src='/fakehunter.jpg' alt='Logo' layout='fill' objectFit='contain' />
                </a>
              </Link>
            </div>
            <div className={styles.logoImage}>
              <Link href='https://zglostrolla.pl/'>
                <a target='_blank'>
                  <Image src='/zglostrolla.jpg' alt='Logo' layout='fill' objectFit='contain' />
                </a>
              </Link>
            </div>
          </div>
        </section>

        <section id='contact' className={`${styles.section} ${styles.sectionGray}`}>
          <h2>Skontaktuj się z nami</h2>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfoContainer}>
              <div className={styles.contactElement}>
                <Image src='/mail_icon.svg' alt='Logo' width='45px' height='45px' />
                <p>kontakt@faktyczka.com</p>
              </div>
              <div className={styles.contactElement}>
                <Image src='/phone_icon.svg' alt='Logo' width='45px' height='45px' />
                <p>123456789</p>
              </div>
            </div>
            <div className={styles.contactForm}>
              <div>
                <p className={styles.formLabel}>Twój adres e-mail</p>
                <input className={styles.contactFormEmail}></input>
              </div>
              <div>
                <p className={styles.formLabel}>Treść wiadomości</p>
                <textarea className={styles.contactFormContent}></textarea>
              </div>
              <div className='button'>
                <a className='buttonText'>Wyślij wiadomość</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
