import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TCheckboxItemProps = DropdownMenuCheckboxItemProps & {
  ref?: Ref<HTMLDivElement>;
};
