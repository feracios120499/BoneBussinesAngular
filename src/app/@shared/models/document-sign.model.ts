import { SignProvider } from '@b1-types/sign-providers.type';
import { SignUser } from './sign-user.model';

export interface DocumentSign {
  Date?: Date;
  potentialSigners?: SignUser[];
  signProviderType?: SignProvider;
  user?: SignUser;
  visaId: number;
}
