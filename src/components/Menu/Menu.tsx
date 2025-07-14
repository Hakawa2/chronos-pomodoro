import type { MenuProps } from '../../types';
import { Icon } from '../Icon';
import { ThemeButton } from '../ThemeButton';
import styles from './Menu.module.css';

export function Menu({ items }: MenuProps) {
  return (
    <nav className={`${styles.menu} d-flex center`}>
      {items.map(item => (
        <a className={`${styles.menuLink}`} href={item.link} key={item.icon}>
          <Icon iconName={item.icon} />
        </a>
      ))}
      <ThemeButton className={styles.menuLink} />
    </nav>
  );
}
