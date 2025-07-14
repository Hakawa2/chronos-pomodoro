import {
  HistoryIcon,
  HouseIcon,
  PlayCircleIcon,
  SettingsIcon,
  SunIcon,
  type LucideIcon,
} from 'lucide-react';
import { IconConstants } from '../../constants';
import type { IconValue } from '../../types';

type IconProps = {
  iconName: IconValue;
  iconSize?: number;
};

export function Icon({ iconName, iconSize = 24 }: IconProps) {
  const iconMap: { [k in IconValue]: LucideIcon } = {
    [IconConstants.House]: HouseIcon,
    [IconConstants.History]: HistoryIcon,
    [IconConstants.Settings]: SettingsIcon,
    [IconConstants.Sun]: SunIcon,
    [IconConstants.Play]: PlayCircleIcon,
  };

  const IconComponent = iconMap[iconName];

  return <IconComponent size={iconSize} />;
}
