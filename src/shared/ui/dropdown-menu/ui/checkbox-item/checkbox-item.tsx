import {
  CheckboxItem as CheckboxItemPrimitive,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu';
import { Check } from 'lucide-react';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TCheckboxItemProps } from './model/props.model';

export const DropdownMenuCheckboxItem: FC<TCheckboxItemProps> = memo(
  ({ className, children, ...props }) => {
    return (
      <CheckboxItemPrimitive
        className={cn(
          'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className,
        )}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <ItemIndicator>
            <Check className="h-4 w-4" />
          </ItemIndicator>
        </span>
        {children}
      </CheckboxItemPrimitive>
    );
  },
);

DropdownMenuCheckboxItem.displayName = CheckboxItemPrimitive.displayName;
