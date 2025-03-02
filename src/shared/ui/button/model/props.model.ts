import { VariantProps } from 'class-variance-authority';
import { HTMLAttributes, Ref } from 'react';

import { buttonVariants } from '../config/styles.config';

export type TButtonProps = HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    ref?: Ref<HTMLButtonElement>;
  };
