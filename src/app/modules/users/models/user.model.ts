export interface User {
  id: string;
  clientId: string;
  displayName: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  phoneNumber: string;
  email: string;
  isDisable: boolean;
  isDeletable: boolean;
  signNumber: number | null;
  roles: string[];
  pictureUrl: string | null;
}
