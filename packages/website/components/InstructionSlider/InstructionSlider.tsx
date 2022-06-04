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
    </Swiper>
  );
};

export default InstructionSlider;
