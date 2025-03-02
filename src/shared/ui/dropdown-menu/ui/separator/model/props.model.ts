import { DropdownMenuSeparatorProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TSeparatorProps = DropdownMenuSeparatorProps & {
  ref?: Ref<HTMLDivElement>;
};
