import { DropdownMenuRadioItemProps } from '@radix-ui/react-dropdown-menu';
import { Ref } from 'react';

export type TRadioItemProps = DropdownMenuRadioItemProps & {
  ref?: Ref<HTMLDivElement>;
};
