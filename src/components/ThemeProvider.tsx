import { useTheme } from '../hooks/useTheme';
import { ReactNode, useEffect } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme immediately to prevent flash
  useEffect(() => {
    // Apply theme before React renders to prevent flash
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'dark';

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initialTheme);
  }, []);
  
  // Initialize theme on component mount
  useTheme();
  
  return <>{children}</>;
}