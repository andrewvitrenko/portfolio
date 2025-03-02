import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TShortcutProps } from './model/props.model';

export const DropdownMenuShortcut: FC<TShortcutProps> = memo(
  ({ className, ...props }) => {
    return (
      <span
        className={cn('ml-auto text-xs tracking-widest opacity-60', className)}
        {...props}
      />
    );
  },
);

DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';
