import { FC, memo } from 'react';

import { Link } from '@/shared/ui/link';

import { links } from './config/links.config';

export const Navigation: FC = memo(() => {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-4 md:gap-8">
        {links.map(({ href, name }) => (
          <Link href={href} key={name}>
            {name}
          </Link>
        ))}
      </ul>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
