const functions = require('firebase-functions');
const md5 = require('md5');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

function hash(txt) {
    return md5(txt)
}


exports.createUser = functions.auth.user().onCreate(event => {
    const value = event.data;
    console.log(value);
    const custUid = hash(value.email);

    console.log(hash("test"))
    console.log(hash("test"))
    
    return admin.database().ref(`users/${value.uid}`).update({
        email: value.email,
        uid: custUid
    })

});


exports.deleteUser = functions.auth.user().onDelete(event => {
    const value = event.data;
    console.log(value);
    return admin.database().ref(`users/${value.uid}`).remove();
})

// exports.p2pMap = functions.database.ref(`p2p/{convId}`).onCreate(event => {
//     const conv = event.data.val()
//     const convId = event.params.convId

//     const uid1 = conv.users[0]
//     const uid2 = conv.users[1]

//     const p2pMapUid1 = admin.database().ref(`p2pMap/${uid1}/${uid2}`).set(convId)
//     const p2pMapUid2 = admin.database().ref(`p2pMap/${uid2}/${uid1}`).set(convId)
//     return Promise.all([p2pMapUid1, p2pMapUid2]).then(results => {
//         console.log("All done")
//     })
// })

// exports.grpMap = functions.database.ref(`grp/{grpId}`).onCreate(event => {
//     const grp = event.data.val()
//     const grpId = event.params.grpId

//     const uid1 = grp.users[0]
//     const uid2 = grp.users[1]
//     const uid3 = grp.users[2]

//     const grpMapUid1 = admin.database().ref(`grpMap/${uid1}/${uid2}/${uid3}`).set(grpId)
//     return Promise.all([grpMapUid1]).then(results => {
//         console.log("All done")
//     })
// })