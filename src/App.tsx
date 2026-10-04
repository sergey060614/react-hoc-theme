import React, { useState } from 'react';
import ThemedButton from './components/ThemedButton';
import type { ThemeType } from './types';
import './App.css';

export const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${currentTheme}`}>
      <div className="theme-controls">
        <button onClick={toggleTheme} className="toggle-btn">
          Переключить тему (сейчас: {currentTheme})
        </button>

        <ThemedButton 
          theme={currentTheme} 
          label="Кнопка с темой" 
        />
      </div>
    </div>
  );
};
