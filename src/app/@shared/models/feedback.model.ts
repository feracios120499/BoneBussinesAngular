export type FeedbackTypeId = 'PROPOSITION' | 'GOOD' | 'BAD';

export interface Feedback {
  appId: string;
  appVersion: string;
  contactToMe: boolean;
  contactEmail: string;
  typeId: FeedbackTypeId;
  text: string;
  rating: number;
  EDRPOU: string; // eslint-disable-line @typescript-eslint/naming-convention
  region: string;
  contactName: string;
  contactPhone: string;
  nameOrganization: string;
}
