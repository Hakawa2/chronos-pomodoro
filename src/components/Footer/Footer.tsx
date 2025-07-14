import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={`${styles.footer} d-flex center column`}>
      <a className='link' href='#'>
        Entenda como funciona a técnica pomodoro
      </a>
      <a className='link' href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </a>
    </footer>
  );
}
