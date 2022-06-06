import { FeedbackModalResult } from './feedback-modal.result';

export interface FeedbackModalConfig {
  callback: (data: FeedbackModalResult) => void;
}
