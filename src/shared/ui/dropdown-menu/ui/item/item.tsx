import { Item as ItemPrimitive } from '@radix-ui/react-dropdown-menu';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TItemProps } from './model/props.model';

export const DropdownMenuItem: FC<TItemProps> = memo(
  ({ className, inset, ...props }) => {
    return (
      <ItemPrimitive
        className={cn(
          'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
          { ['pl-8']: inset },
          className,
        )}
        {...props}
      />
    );
  },
);

DropdownMenuItem.displayName = ItemPrimitive.displayName;
