import { DropdownMenuLabelProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TLabelProps = DropdownMenuLabelProps & {
  inset?: boolean;
  ref?: Ref<HTMLDivElement>;
};
