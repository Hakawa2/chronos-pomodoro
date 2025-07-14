import type { IconConstants } from '../constants';

export type IconTypes = typeof IconConstants;

export type IconKey = keyof typeof IconConstants;
export type IconValue = (typeof IconConstants)[keyof typeof IconConstants];
