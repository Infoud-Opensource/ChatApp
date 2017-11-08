const functions = require('firebase-functions');
const md5 = require('md5');


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const DEFAULT_DP = "https://firebasestorage.googleapis.com/v0/b/chatapp-140da.appspot.com/o/default%2Fdefault.png?alt=media&token=37edd301-ce83-4405-bb6f-3df7105a1ba6"

function hash(txt) {
    return md5(txt)
}

exports.createUser = functions.auth.user().onCreate(event => {
    const value = event.data;
    console.log(value);
    const custUid = hash(value.email);
    
    return admin.database().ref(`users/${value.uid}`).update({
        email: value.email,
        uid: custUid,
        authUid: value.uid,
        imageUrl: DEFAULT_DP
    })
});

exports.deleteUser = functions.auth.user().onDelete(event => {
    const value = event.data;
    console.log(value);
    return admin.database().ref(`users/${value.uid}`).remove();
});

exports.p2pMap = functions.database.ref(`p2p/{convId}`).onCreate(event => {
    const conv = event.data.val()
    const convId = event.params.convId

    const uid1 = conv.users[0]
    const uid2 = conv.users[1]

    const p2pMapUid1 = admin.database().ref(`p2pMap/${uid1}/${uid2}`).set(convId)
    const p2pMapUid2 = admin.database().ref(`p2pMap/${uid2}/${uid1}`).set(convId)
    return Promise.all([p2pMapUid1, p2pMapUid2]).then(results => {
        console.log("All done")
    })
})

exports.grpMap = functions.database.ref(`grp/{grpId}`).onCreate(event => {
    const grp = event.data.val()
    const grpId = event.params.grpId
    data = {}

    grp.users.forEach(uid => {
      let path = `grpMap/${uid}/${grpId}`
      data[path]=grp.name  
    })
    if (Object.keys(data).length === 0 && data.constructor === Object) return
    return admin.database().ref().update(data)
})

// exports.p2pMsgCreate = functions.database.ref(`p2p/{convId}/messages/{msgId}`).onCreate(event => {
//     const msgId = event.params.msgId
//     const convId = event.params.convId
//     return admin.database().ref(`p2p/${convId}/messages/${msgId}`).update({"status":"sent"})
// });