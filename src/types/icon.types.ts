import type { IconConstants } from '../constants';

export type IconTypes = typeof IconConstants;

export type IconKey = keyof typeof IconConstants; // 'House' | 'History' | ...
export type IconValue = (typeof IconConstants)[IconKey];
