import { Label as LabelPrimitive } from '@radix-ui/react-dropdown-menu';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TLabelProps } from './model/props.model';

export const DropdownMenuLabel: FC<TLabelProps> = memo(
  ({ className, inset, ...props }) => {
    return (
      <LabelPrimitive
        className={cn(
          'px-2 py-1.5 text-sm font-semibold',
          { ['pl-8']: inset },
          className,
        )}
        {...props}
      />
    );
  },
);

DropdownMenuLabel.displayName = LabelPrimitive.displayName;
