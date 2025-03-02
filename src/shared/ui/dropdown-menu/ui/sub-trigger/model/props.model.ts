import { DropdownMenuSubTriggerProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TSubTriggerProps = DropdownMenuSubTriggerProps & {
  inset?: boolean;
  ref?: Ref<HTMLDivElement>;
};
