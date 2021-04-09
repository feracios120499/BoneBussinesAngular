export interface MenuSetting {
    Name: string;
    IsDisplay: boolean;
    Number: number;
}

export interface Customer {
    Id: number;
    ClientId: string;
    TaxCode: string;
    Name: string;
    NameShort: string;
    NameInternational: string;
    ContractNumber: string;
    Address: string;
    Phone?: any;
    CustType: number;
    DateOpen: Date;
    DateClosed?: any;
    SignNumber: number;
    SignCount: number;
    Roles: string[];
    BankDate: Date;
    EDRPO: string;
    MenuSettings: MenuSetting[];
    BankName: string;
    BankAddress: string;
    TorgAccount: string;
    BuyingCommission?: number;
    SellingCommission?: number;
    ConversionCommission?: any;
    SyncDate: Date;
}

export interface Profile {
    CreatingDate: Date;
    Customers: Customer[];
    Modules: any[];
    UserId: string;
    UserName: string;
    UserDisplayName: string;
    FirstName: string;
    LastName: string;
    Patronymic: string;
    UserInternationalName?: any;
    Email: string;
    PhoneNumber: string;
    UserPictureUrl?: any;
    MobileIdIsActive: boolean;
}