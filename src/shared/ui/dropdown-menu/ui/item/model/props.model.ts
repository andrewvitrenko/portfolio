import { DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TItemProps = DropdownMenuItemProps & {
  inset?: boolean;
  ref?: Ref<HTMLDivElement>;
};
