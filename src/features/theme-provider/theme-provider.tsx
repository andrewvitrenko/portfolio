'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { FC, memo } from 'react';

import { defaultTheme } from './config/default-theme.config';
import { TThemeProviderProps } from './model/props.model';

export const ThemeProvider: FC<TThemeProviderProps> = memo((props) => {
  return <NextThemeProvider {...defaultTheme} {...props} />;
});

ThemeProvider.displayName = 'ThemeProvider';
