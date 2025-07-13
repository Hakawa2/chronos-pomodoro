import type { MenuProps } from '../../types';
import { Icon } from '../Icon';
import styles from './Menu.module.css';

export function Menu({ itemList }: MenuProps) {
  return (
    <nav className={`${styles.menu} d-flex center`}>
      {itemList.map(item => (
        <a className={`${styles.menuLink}`} href={item.link} key={item.icon}>
          <Icon iconName={item.icon} />
        </a>
      ))}
    </nav>
  );
}
