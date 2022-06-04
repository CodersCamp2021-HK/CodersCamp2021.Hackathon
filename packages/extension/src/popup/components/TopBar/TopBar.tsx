import logo from '../../logo.svg';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <header>
      <h1>
        <img className={styles.logo} src={logo} alt='Faktyczka' height={20} />
      </h1>
    </header>
  );
};

export { TopBar };
