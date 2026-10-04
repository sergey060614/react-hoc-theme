import React from 'react';
import { withTheme } from '../hoc/withTheme';
import type { WithThemeProps } from '../types';

interface ThemedButtonProps extends WithThemeProps {
  label: string;
  onClick?: () => void;
}

const ThemedButtonComponent: React.FC<ThemedButtonProps> = ({ theme, label, onClick }) => {
  return (
    <button onClick={onClick} className={`themed-button ${theme}`}>
      {label}
    </button>
  );
};

const ThemedButton = withTheme(ThemedButtonComponent);
export default ThemedButton;
