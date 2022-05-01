import { Profile } from '@models/profile.model';
import { Observable } from 'rxjs';

export abstract class BaseUserService {
  abstract getProfile(): Observable<Profile>;
}
