import { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TContentProps = DropdownMenuContentProps & {
  ref?: Ref<HTMLDivElement>;
};
