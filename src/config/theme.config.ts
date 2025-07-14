import { IconConstants } from '../constants';
import type { Theme, ThemeKey } from '../types';

export const DEFAULT_THEME: ThemeKey = 'dark';

export const themeMap: Record<ThemeKey, Theme> = {
  dark: {
    icon: IconConstants.Sun,
    intertedTheme: 'light',
    ariaLabel: 'Tema ativo é o dark',
  },
  light: {
    icon: IconConstants.Moon,
    intertedTheme: 'dark',
    ariaLabel: 'Tema ativo é o light',
  },
};
