// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBggkKFCPe6rwEu_eHPthTMd-fAXyEyyMI',
    authDomain: 'cavalheiros-do-zodiaco.firebaseapp.com',
    databaseURL: 'https://cavalheiros-do-zodiaco.firebaseio.com',
    projectId: 'cavalheiros-do-zodiaco',
    storageBucket: 'cavalheiros-do-zodiaco.appspot.com',
    messagingSenderId: '930681368780',
    appId: '1:930681368780:web:cb9b6f7c8c0797e0'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
