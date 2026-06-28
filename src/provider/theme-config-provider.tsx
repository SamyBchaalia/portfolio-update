import { ReactElement, useEffect } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type Props = {
  children: ReactElement;
};

const darkTheme = createTheme({ palette: { mode: 'dark' } });

function LayoutConfigProvider({ children }: Props) {
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light');
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default LayoutConfigProvider;
