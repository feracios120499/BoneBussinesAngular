// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  languages: ['uk', 'ru', 'en'],
  defaultUserPictureUrl: 'assets/img/a0.jpg',
  mobileWidth: 812,
  payments: {
    dates: {
      documentDateMaxDaysFromBankDate: 30,
      valueDateMaxDaysFromDocumentDate: 9,
    },
  },
  tax: {
    vat: 20,
  },
  defaultSignProvider: 'BarsCryptor',
  appId: 'CORP-LIGHT-WEB',
  appVersion: '1.4.0',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
