// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: 'AIzaSyAUDAqBQxw_Kmu8pAyBwh6x_ywzpSB4Wds',
  authDomain: 'sanpracticefire.firebaseapp.com',
  databaseURL: 'https://sanpracticefire.firebaseio.com',
  projectId: 'sanpracticefire',
  storageBucket: 'sanpracticefire.appspot.com',
  messagingSenderId: '782472128860',
  appId: '1:782472128860:web:04a213d287a63f6f'
};

export const environment = {
  production: false,
  firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
