import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    const initialTheme = savedTheme || 'dark';
    setTheme(initialTheme);
    
    // Apply theme to document immediately
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme);
    
    // Apply to document
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  return { theme, toggleTheme, mounted };
}