export interface Resources {
  owner: Owner;
}

export interface Owner {
  name: string;
  shortName: string;
  slogan: string;
  logoImage: string;
  callCenterPhone: string[];
  callCenterWorkFrom: string;
  callCenterWorkTo: string;
  callCenterPhoneLocal: string[];
  ecpTechSupportPhone: string[];
  copyright: string;
  defaulеWebAppSettings: string;
  valueAddedTax: string;
  advertisementTax1: string;
  advertisementTax2: string;
  barsCryptorUpdatePath: string;
  barsCryptorMinimumVersion: string;
  barsCryptorCurrentVersion: string;
  version: string;
  currencies: string[];
  cloudWin64Url: string;
  cloudWin32Url: string;
  cloudLinuxUrl: string;
  cloudMacUrl: string;
  refreshCertificateUrl: string;
}
