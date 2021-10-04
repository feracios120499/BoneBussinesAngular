export interface MenuSetting {
  name: string;
  isDisplay: boolean;
  number: number;
}

export interface Customer {
  id: number;
  clientId: string;
  taxCode: string;
  name: string;
  nameShort: string;
  nameInternational: string;
  contractNumber: string;
  address: string;
  phone?: any;
  custType: number;
  dateOpen: Date;
  dateClosed?: any;
  signNumber: number;
  signCount: number;
  roles: string[];
  bankDate: Date;
  edrpo: string;
  menuSettings: MenuSetting[];
  bankName: string;
  bankAddress: string;
  torgAccount: string;
  buyingCommission?: number;
  sellingCommission?: number;
  conversionCommission?: any;
  syncDate: Date;
}

export interface Profile {
  creatingDate: Date;
  customers: Customer[];
  modules: any[];
  userId: string;
  userName: string;
  userDisplayName: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  userInternationalName?: any;
  email: string;
  phoneNumber: string;
  userPictureUrl?: any;
  mobileIdIsActive: boolean;
}
