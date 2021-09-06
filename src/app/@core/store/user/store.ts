import { Notification } from '@models/notification.model';
import { Profile } from '@models/profile.model';

export const USER_KEY = 'user';

export interface UserState {
    profile: Profile | undefined;
    notifications: Notification[];
    currentClientId: string | undefined;
}

export const initialState: UserState = {
    profile: undefined,
    notifications: new Array<Notification>(),
    currentClientId: undefined
};
