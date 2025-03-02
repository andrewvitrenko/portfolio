import { SubTrigger as SubtriggerPrimitive } from '@radix-ui/react-dropdown-menu';
import { ChevronRight } from 'lucide-react';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TSubTriggerProps } from './model/props.model';

export const DropdownMenuSubTrigger: FC<TSubTriggerProps> = memo(
  ({ inset, className, children, ...props }) => {
    return (
      <SubtriggerPrimitive
        className={cn(
          'flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
          { ['pl-8']: inset },
          className,
        )}
        {...props}
      >
        {children}
        <ChevronRight className="ml-auto" />
      </SubtriggerPrimitive>
    );
  },
);

DropdownMenuSubTrigger.displayName = SubtriggerPrimitive.displayName;
