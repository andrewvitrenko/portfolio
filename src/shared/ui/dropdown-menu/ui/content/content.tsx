import {
  Content as ContentPrimitive,
  Portal,
} from '@radix-ui/react-dropdown-menu';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TContentProps } from './model/props.model';

export const DropdownMenuContent: FC<TContentProps> = memo(
  ({ className, sideOffset = 4, ...props }) => {
    return (
      <Portal>
        <ContentPrimitive
          className={cn(
            'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
            'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            className,
          )}
          sideOffset={sideOffset}
          {...props}
        />
      </Portal>
    );
  },
);

DropdownMenuContent.displayName = ContentPrimitive.displayName;
