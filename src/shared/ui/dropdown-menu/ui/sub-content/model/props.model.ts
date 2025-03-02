import { DropdownMenuSubContentProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TSubContentProps = DropdownMenuSubContentProps & {
  ref?: Ref<HTMLDivElement>;
};
