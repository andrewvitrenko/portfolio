import { ThemeProviderProps } from 'next-themes';

export const defaultTheme: ThemeProviderProps = {
  defaultTheme: 'system',
  enableSystem: true,
  attribute: 'class',
  disableTransitionOnChange: true,
};
