import { useEffect } from 'react';
import { useState } from 'react';

export default function ThemeTogglerButton() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <button onClick={handleThemeChange}>Toggle Theme</button>
  );
}
