import { SignProvider } from '@b1-types/sign-providers.type';
import { SignUser } from './sign-user.model';

export interface DocumentSign {
  date?: Date;
  potentialSigners?: SignUser[];
  signProviderType?: SignProvider;
  user?: SignUser;
  visaId: number;
}
