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

  exports.p2p = functions.auth.user().onCreate(event => {
      const value = event.data;
      console.log(value);
      return admin.database().ref(`p2p/c1/users/${value.uid}`).update({
            uid1: value.uid,
            uid2: value.uid2
      })
  });

exports.p2pMap = functions.auth.user().onCreate(event => {
    const value = event.data;
    console.log(value);
    return admin.database().ref(`p2pMap/${value.uid1}`).update({
        uid1:  c1
    })
})


exports.group = functions.auth.user().onCreate(event => { 
    const value = event.data;
    console.log(value);
    return admin.database().ref(`group/g1/users/${value.uid}`).update({

    })
})