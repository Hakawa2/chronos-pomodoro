import type { IconValue } from './icon.types';

export type MenuProps = {
  items: MenuItems[];
};

export type MenuItems = {
  icon: IconValue;
  link: string;
  ariaLabel: string;
};
