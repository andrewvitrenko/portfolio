import { HTMLAttributes } from 'react';

import { ERoute } from '@/shared/model/navigation.model';

export type TLinkProps = HTMLAttributes<HTMLAnchorElement> & {
  href: ERoute;
};
