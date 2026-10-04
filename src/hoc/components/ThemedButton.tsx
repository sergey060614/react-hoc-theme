import React from 'react';
import  { withTheme } from '../hoc/withTheme';
import { WithThemeProps } from '../types';

interface ThemedButtonProps extends WithThemeProps {
  label: string;
  onClick?: () => void;
}

const ThemedButtonComponent: React.FC<ThemedButtonProps> = ({ theme, label, onClick }) => {
  return (
    <div className={`theme-preview-box ${theme}`}>
      <p>Текущая тема в компоненте: <strong>{theme}</strong></p>
      <button onClick={onClick} className={`themed-button ${theme}`}>
        {label}
      </button>
    </div>
  );
};

export const ThemedButton = withTheme(ThemedButtonComponent);
