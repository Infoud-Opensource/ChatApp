const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.createUser = functions.auth.user().onCreate(event => {
    const value= event.data;
    
    console.log(value);
    return admin.database().ref(`users/${value.uid}`).update({
        email: value.email,
        uid: value.uid
      })
  });
