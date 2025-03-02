import { Separator as SeparatorPrimitive } from '@radix-ui/react-dropdown-menu';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TSeparatorProps } from './model/props.model';

export const DropdownMenuSeparator: FC<TSeparatorProps> = memo(
  ({ className, ...props }) => {
    return (
      <SeparatorPrimitive
        className={cn('-mx-1 my-1 h-px bg-muted', className)}
        {...props}
      />
    );
  },
);

DropdownMenuSeparator.displayName = SeparatorPrimitive.displayName;
