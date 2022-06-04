import Image from 'next/image';
import styles from './InstructionSlider.module.css';

const InstructionSlider = () => {
  return (
    <div>
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
      <div className={`${styles.instructionStep} ${styles.imageRight}`}>
        <div className={styles.instructionImage}>
          <Image src='/placeholder.jpg' alt='Placeholder' layout='fill' objectFit='contain' />
        </div>
        <div className={styles.instructionText}>
          <h3>Sprawdź status artykułu</h3>
          <p>Jeżeli czytany przez Ciebie artykuł znalazł się w naszej bazie, to może mieć on jeden z kilku statusów.</p>
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
      <div className={styles.instructionDots}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    </div>
  );
};

export default InstructionSlider;
