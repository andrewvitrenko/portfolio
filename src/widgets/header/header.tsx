import { FC, memo } from 'react';

import { ThemeToggle } from '@/features/theme-provider';

import { Navigation } from './ui/navigation';

export const Header: FC = memo(() => {
  return (
    <header className="sticky flex items-center justify-between border-b border-b-input p-4">
      <div className="size-9" />
      <Navigation />
      <ThemeToggle />
    </header>
  );
});

Header.displayName = 'Header';
