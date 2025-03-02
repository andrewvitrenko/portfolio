import NextLink from 'next/link';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TLinkProps } from './model/props.model';

export const Link: FC<TLinkProps> = memo(({ className, ...props }) => {
  return (
    <NextLink
      {...props}
      className={cn(
        'relative transition-colors duration-200 hover:text-primary hover:after:scale-x-100',
        'after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-center after:scale-x-0 after:bg-foreground after:transition-all after:duration-200 hover:after:bg-primary',
        className,
      )}
    />
  );
});

Link.displayName = 'Link';
