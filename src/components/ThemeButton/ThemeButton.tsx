import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon';

type ThemeButtonProps = {
  className: string;
};

export function ThemeButton({ className }: ThemeButtonProps) {
  const { currentTheme, handleTheme } = useTheme();

  return (
    <button
      className={className}
      aria-label={currentTheme.ariaLabel}
      onClick={handleTheme}
    >
      <Icon iconName={currentTheme.icon} />
    </button>
  );
}
