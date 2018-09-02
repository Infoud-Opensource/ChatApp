import * as functions from 'firebase-functions';
import * as md5 from 'md5';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

function hash(txt) { return md5(txt) }

export const createUser = functions.auth.user().onCreate(event => {
    const value = event;
    console.log(value);
    const custUid = hash(value.email);

    return admin.database().ref(`users/${value.uid}`).update({
        email: value.email,
        uid: custUid,
        authUid: value.uid,
        imageUrl: value.photoURL,
        name: value.displayName
    })
});

export const deleteUser = functions.auth.user().onDelete(event => {
    const value = event;
    console.log(value);
    return admin.database().ref(`users/${value.uid}`).remove();
});

export const p2pMap = functions.database.ref(`p2p/{convId}`).onCreate((snapshot, context) => {
    const conv = snapshot.val()
    const convId = context.params.convId

    const uid1 = conv.users[0]
    const uid2 = conv.users[1]

    const p2pMapUid1 = admin.database().ref(`p2pMap/${uid1}/${uid2}`).set(convId)
    const p2pMapUid2 = admin.database().ref(`p2pMap/${uid2}/${uid1}`).set(convId)
    return Promise.all([p2pMapUid1, p2pMapUid2]).then(results => {
        console.log("All done")
    })
});

export const grpMap = functions.database.ref(`groups/{grpId}`).onCreate((snapshot, context) => {
    const grp = snapshot.val()
    const grpId = context.params.grpId
    const data = {}

    grp.users.forEach(uid => {
        const path = `groupMap/${uid}/${grpId}`
        data[path] = grp.name
    })
    if (Object.keys(data).length === 0 && data.constructor === Object) return null

    return admin.database().ref().update(data)
});