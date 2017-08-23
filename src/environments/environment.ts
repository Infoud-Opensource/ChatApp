// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAk0HLgCSXFs4FTyK_WeOYuAWi9_OWUlnI",
    authDomain: "chatapp-2c59b.firebaseapp.com",
    databaseURL: "https://chatapp-2c59b.firebaseio.com",
    projectId: "chatapp-2c59b",
    storageBucket: "chatapp-2c59b.appspot.com",
    messagingSenderId: "926459817562"
  }
};