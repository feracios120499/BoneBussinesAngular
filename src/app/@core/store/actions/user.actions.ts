import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/@shared/models/profile.model';

// loadProfileRequest action
export const loadProfileRequest = createAction('[USER] load profile');

// loadProfileSuccess action
export const loadProfileSuccess = createAction(
    '[USER] load profile success',
    props<{ profile: Profile }>()
);

// loadProfileFailure action
export const loadProfileFailure = createAction(
    '[USER] load profile failure',
    props<{ error: string }>()
);

export const checkProfile = createAction(
    '[USER] check profile'
);

export const profileExist = createAction(
    '[USER] profile exist'
);
