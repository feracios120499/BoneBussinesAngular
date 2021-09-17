export interface LoginResponse {
  type: 'Token' | 'Otp';
  phone?: string;
}
