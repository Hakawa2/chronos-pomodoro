import { TimerIcon } from 'lucide-react';

import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={`${styles.logo} d-flex center`}>
      <a className={`${styles.logoLink} d-flex center column`} href='#'>
        <TimerIcon size={64} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
