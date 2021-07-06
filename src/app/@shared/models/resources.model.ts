export interface Resources {
    Owner: Owner;
}

export interface Owner {
    Name: string;
    ShortName: string;
    Slogan: string;
    LogoImage: string;
    CallCenterPhone: string[];
    CallCenterWorkFrom: string;
    CallCenterWorkTo: string;
    CallCenterPhoneLocal: string[];
    ECPTechSupportPhone: string[];
    Copyright: string;
    DefaulеWebAppSettings: string;
    ValueAddedTax: string;
    AdvertisementTax1: string;
    AdvertisementTax2: string;
    BarsCryptorUpdatePath: string;
    BarsCryptorMinimumVersion: string;
    BarsCryptorCurrentVersion: string;
    Version: string;
    Currencies: string[];
    CloudWin64Url: string;
    CloudWin32Url: string;
    CloudLinuxUrl: string;
    CloudMacUrl: string;
}
