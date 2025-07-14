import type { IconValue } from './icon.types';

export type Theme = {
  icon: IconValue;
  intertedTheme: ThemeKey;
  ariaLabel: string;
};

export type ThemeKey = 'light' | 'dark';
