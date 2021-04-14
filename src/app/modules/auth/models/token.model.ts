// tslint:disable variable-name
export class Token {
  access_token: string | undefined;
  token_type: string | undefined;
  expires_in: string | undefined;
  refresh_token: string | undefined;
  client_id: string | undefined;
  user_id: string | undefined;
  issued: Date | undefined;
  expires: string | undefined;
  sessionId: string | undefined;
  constructor() { }
}
