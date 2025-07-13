import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { IconConstants } from '../../constants';
import type { IconValue } from '../../types';

type IconProps = {
  iconName: IconValue;
  iconSize?: number;
};

export function Icon({ iconName, iconSize = 32 }: IconProps) {
  const listIcons: Record<IconValue, React.ReactElement> = {
    [IconConstants.House]: <HouseIcon size={iconSize} />,
    [IconConstants.History]: <HistoryIcon size={iconSize} />,
    [IconConstants.Settings]: <SettingsIcon size={iconSize} />,
    [IconConstants.Sun]: <SunIcon size={iconSize} />,
  };

  return listIcons[iconName];
}
