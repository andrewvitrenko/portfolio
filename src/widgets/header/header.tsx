import { FC, memo } from 'react';

import { Link } from '@/shared/ui/link';

import { links } from './config/navigation.config';

export const Header: FC = memo(() => {
  return (
    <header className="sticky border-b border-b-gray-400">
      <nav>
        <ul className="flex items-center justify-center gap-4 p-4 md:gap-8">
          {links.map(({ href, name }) => (
            <Link href={href} key={name}>
              {name}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
});

Header.displayName = 'Header';
