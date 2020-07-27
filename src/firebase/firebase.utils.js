import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDh3t5ocXomo-AX81mG8ot5FOtXNzXYvk4",
    authDomain: "bills-money.firebaseapp.com",
    databaseURL: "https://bills-money.firebaseio.com",
    projectId: "bills-money",
    storageBucket: "bills-money.appspot.com",
    messagingSenderId: "1074167854724",
    appId: "1:1074167854724:web:e779d3199feb9155c2b4d1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

//Google provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)
    .then(result => {
        console.log("sign in with google successful");
    })
    .catch(error => {
        console.log("google sign in failed");
    });
export const db = firebase.firestore();

export const createUserProfile = async (userAuth, additionalData) => {
//    check if user is null
    if (!userAuth)
        return;
//    create user profile
    const userDocRef = db.doc(`users/${userAuth.uid}`);
    const userDocSnapshot = await userDocRef.get();
    if (!userDocSnapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userDocRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            )
        } catch (e) {
            console.log(e)
        }
    } else {
        console.log("User profile already exists");
    }
    return userDocRef;
};

export const createUtility = async (current_user, utility_name, utility_index_period, utility_payment_deadline) => {
    if (utility_name === '' || utility_index_period === '' || utility_payment_deadline === '') {
        alert("Please fill in the fields");
        return;
    }
    const utility_index_period_array = utility_index_period.split(',').map(Number);
    const utility_deadline = parseInt(utility_payment_deadline);
//  create utility reference
    const utilityDocRef = db.doc(`documents/${current_user}/utilities/${utility_name}`);
    const utilityDocSnapshot = await utilityDocRef.get();
    if (!utilityDocSnapshot.exists) {
        const createdAt = new Date();
        try {
            utilityDocRef.set({
                utility_name,
                utility_index_period_array,
                utility_deadline,
                createdAt
            })
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log('Utility already registered');
    }
    return utilityDocRef;
};

export const getAllUtilities = (current_user_uid) => {
    const list_of_utilities = [];
    const collectionRef = db.collection(`documents/${current_user_uid}/utilities`);
    collectionRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            list_of_utilities.push({
                utility_name: doc.data().utility_name,
                index_period: doc.data()['utility_index_period_array']
            });
        })
    });
    return list_of_utilities;
};

export const transformUtilities = (snapshot)=>{
    const list_of_utilities = snapshot.docs.map((utility)=>{
        return utility.data()
    });
    return list_of_utilities;
};

export const deleteUtility = (current_user_uid, utility_name)=>{
    // const docRef = db.collection(`documents/${current_user_uid}/utilities/Enel`);
    const docReference = db.collection('documents').doc(`${current_user_uid}`).collection('utilities').doc(`${utility_name}`);
    docReference.delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });

};
