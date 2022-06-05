import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './InstructionSlider.module.css';
import { useEffect } from 'react';

const InstructionSlider = () => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--swiper-theme-color',
      getComputedStyle(document.body).getPropertyValue('--primary-main'),
    );
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      autoHeight={true}
      navigation={true}
      pagination={{ clickable: true }}
      className={styles.instructionWrapper}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide className={styles.instructionSlide}>
        <div className={`${styles.instructionStep} ${styles.imageLeft}`}>
          <div className={styles.instructionImage}>
            <Image src='/placeholder.jpg' alt='Placeholder' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.instructionText}>
            <h3>Udostępnij nam swoje dane</h3>
            <p>
              Abyśmy mogli skutecznie ostrzegać Cię przed ewentualnym niebezpieczeństwem i zapewniać, że czytasz tylko
              sprawdzone informacje, możesz udostępnić nam swoje dane przeglądania. Zapewniamy Cię, że będziemy z nich
              korzystać tylko po to, aby zweryfikować przeglądane przez Ciebie artykuły.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.instructionSlide}>
        <div className={`${styles.instructionStep} ${styles.imageRight}`}>
          <div className={styles.instructionImage}>
            <Image src='/placeholder.jpg' alt='Placeholder' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.instructionText}>
            <h3>Sprawdź status artykułu</h3>
            <p>
              Jeżeli czytany przez Ciebie artykuł znalazł się w naszej bazie, to może mieć on jeden z kilku statusów.
            </p>
            <ul>
              <li>
                Informacja, która po zweryfikowaniu przez nas okazała się prawdziwa, będzie oznaczona zieloną ikoną.
                Śmiało możesz zapoznać się z artykułem.
              </li>
              <li>
                Jeżeli tekst będzie zawierał nieprawdziwe informacje, ikona będzie czerwona. Wtedy najlepiej ostrzec
                bliskich i wyjść ze strony, która propaguje fake newsy.
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.instructionSlide}>
        <div className={`${styles.instructionStep} ${styles.imageLeft}`}>
          <div className={styles.instructionImage}>
            <Image src='/placeholder.jpg' alt='Placeholder' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.instructionText}>
            <h3>Sprawdź status artykułu</h3>
            <ul>
              <li>
                Artykuł w trakcie sprawdzania będzie oznaczony żółtą ikoną. Możesz go przeczytać, ale ostrożnie z
                zaufaniem.
              </li>
              <li>Informacja, która nie została do nas jeszcze zgłoszona, będzie oznaczona kolorem niebieskim.</li>
            </ul>
            <p>W obydwu przypadkach, gdy status odwiedzonej strony się zmieni, zostaniesz o tym poinformowany.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.instructionSlide}>
        <div className={`${styles.instructionStep} ${styles.imageRight}`}>
          <div className={styles.instructionImage}>
            <Image src='/placeholder.jpg' alt='Placeholder' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.instructionText}>
            <h3>Zgłoś podejrzany artykuł</h3>
            <p>
              Czytając wiadomości na stronie jakaś informacja wydała Ci się podejrzana lub nie masz przekonania co do
              jej prawdziwości? A może już wiesz, że w artykule pojawił się fake news? Śmiało, zgłoś go do nas!
              Wystarczy, że otworzysz rozszerzenie i wybierzesz opcję „zgłoś fake news”. Jeżeli chcesz, możesz dodać
              uzasadnienie, np. link do sprawdzonego artykułu.
            </p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className={styles.instructionSlide}>
        <div className={`${styles.instructionStep} ${styles.imageLeft}`}>
          <div className={styles.instructionImage}>
            <Image src='/placeholder.jpg' alt='Placeholder' layout='fill' objectFit='contain' />
          </div>
          <div className={styles.instructionText}>
            <h3>Aktualizuj swoją wiedzę</h3>
            <p>
              Codziennie trafiasz na dziesiątki artykułów. Nie wszystkie będą przez nas sprawdzone w momencie, w którym
              będziesz je czytać. Aby żaden fake news nie umknął Twojej uwadze, na bieżąco będziemy aktualizować statusy
              artykułów i poinformujemy Cię, kiedy odwiedzona przez Ciebie strona zostanie zweryfikowana.
              <br />
              <br />
              Żeby szybko dowiedzieć się, czy przypadkiem artykuł sprzed tygodnia nie okazał się być nieprawdziwy,
              zajrzyj do zakładki historia – tam zobaczysz całą listę aktualności dotyczącą odwiedzonych przez Ciebie
              stron.
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default InstructionSlider;
