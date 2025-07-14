import type { IconValue } from '../../types';
import { Icon } from '../Icon';
import styles from './Button.module.css';

type ButtonProps = {
  icon?: IconValue;
  mode: 'start' | 'pause';
} & React.ComponentProps<'button'>;

export function Button({ icon, mode = 'start', ...props }: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[mode]} d-flex center`}
      {...props}
    >
      {icon && <Icon iconName={icon} iconSize={32} />}
    </button>
  );
}
