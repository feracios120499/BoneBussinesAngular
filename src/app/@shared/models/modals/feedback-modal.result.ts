import { Feedback } from '@models/feedback.model';

export interface FeedbackModalResult extends Omit<Feedback, 'appId' | 'appVersion'> {}
