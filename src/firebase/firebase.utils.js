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


export const createUtility = async (current_user_uid, utility_name, utility_index_period_start, utility_index_period_end, utility_payment_deadline, utility_client_code, utility_address) => {
    if (utility_name === '' || utility_payment_deadline === '' || utility_address === '') {
        alert("Please fill in the fields");
        return;
    }


    utility_index_period_start = parseInt(utility_index_period_start);
    utility_index_period_end = parseInt(utility_index_period_end);
    const utility_deadline = parseInt(utility_payment_deadline);

    const utility_index_period_array = [];
    for (let i = utility_index_period_start; i <= utility_index_period_end; i++) {
        utility_index_period_array.push(i);
    }

//  create utility reference
    const utilityDocRef = db.doc(`documents/${current_user_uid}/utilities/${utility_name}`);
    const utilityDocSnapshot = await utilityDocRef.get();
    if (!utilityDocSnapshot.exists) {
        const createdAt = new Date();
        try {
            await utilityDocRef.set({
                utility_name,
                utility_index_period_array,
                utility_deadline,
                utility_client_code,
                utility_address,
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

export const createDebt = async (current_user,
                                 bank_name,
                                 debt_name,
                                 debt_value,
                                 debt_currency,
                                 debt_length,
                                 debt_fix_interest,
                                 debt_variable_interest,
                                 debt_first_payment_date) => {

    if (current_user === '' || debt_name === '' || debt_value === '' || debt_length === '' || debt_fix_interest === '' || debt_variable_interest === '' || debt_first_payment_date === '' || debt_currency === '') {
        alert('Please fill in all fields');
        return;
    }
    const raw_date = debt_first_payment_date.split('-');
    const transformed_date = `${raw_date[2]}-${raw_date[1]}-${raw_date[0]}`;
    const debtDocRef = db.doc(`documents/${current_user}/debts/${debt_name}`);
    const debtDocSnapshot = await debtDocRef.get();
    if (!debtDocSnapshot.exists) {
        const createdAt = new Date();
        try {
            debtDocRef.set(
                {
                    debt_name,
                    bank_name,
                    debt_value,
                    debt_currency,
                    debt_length,
                    debt_fix_interest,
                    debt_variable_interest,
                    debt_first_payment_date: transformed_date,
                    createdAt,
                    is_selected: false
                }
            );
        } catch (e) {
            console.log(e);
        }
    } else {
        console.log('Debt already exists');
    }
};

export const createExpenseCategory = async (current_user_uid, expense_category_name, expense_category_color) => {
    const expensesDocRef = db.doc(`documents/${current_user_uid}/expenses/${expense_category_name}`);
    const expensesDocSnapshot = await expensesDocRef.get();
    if (!expensesDocSnapshot.exists) {
        const createdAt = new Date();
        try {
            await expensesDocRef.set(
                {
                    expense_category_name,
                    expense_category_color,
                    expense_category_selected: false,
                    createdAt
                }
            )
        } catch (e) {
            console.log(e);
        }
    }

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

export const getAllExpensesCategories = (current_user_uid) => {
    const list_of_expenses_categories = [];
    const collectionRef = db.collection(`documents/${current_user_uid}/expenses`);
    collectionRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            list_of_expenses_categories.push({
                expense_category_name: doc.data().expense_category_name,
                expense_category_color: doc.data().expense_category_color
            })
        })
    });
    return list_of_expenses_categories;
};

export const transformUtilities = (snapshot) => {
    const list_of_utilities = snapshot.docs.map((utility) => {
        return utility.data()
    });
    return list_of_utilities;
};

export const deleteUtility = (current_user_uid, utility_name) => {
    // const docRef = db.collection(`documents/${current_user_uid}/utilities/Enel`);
    const docReference = db.collection('documents').doc(`${current_user_uid}`).collection('utilities').doc(`${utility_name}`);
    docReference.delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

};

export const deleteDebt = (current_user_uid, debt_name) => {
    // const docRef = db.collection(`documents/${current_user_uid}/utilities/Enel`);
    const docReference = db.collection('documents').doc(`${current_user_uid}`).collection('debts').doc(`${debt_name}`);
    docReference.delete().then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });

};


export const selectDebtFirestore = (current_user_uid, debt_name) => {
    const collectionRef = db.collection(`documents/${current_user_uid}/debts`);
    collectionRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            // console.log(doc.data().debt_name);

            if (doc.data().debt_name === debt_name) {
                const docRef = db.collection('documents').doc(`${current_user_uid}`).collection('debts').doc(`${debt_name}`);
                docRef.update({
                    is_selected: !doc.data().is_selected
                })
            }
        })
    })
};

export const selectExpenseCategoryFirestore = (current_user_uid, expense_category_name) => {
    const collectionRef = db.collection(`documents/${current_user_uid}/expenses`);
    collectionRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            if (doc.data().expense_category_name === expense_category_name) {
                collectionRef.doc(doc.data().expense_category_name).update(
                    {
                        expense_category_selected: true
                    }
                ).then(() => {
                    console.log('Success');
                }).catch(e => {
                    console.log('Couldnt select the expense category');
                })
            } else {
                collectionRef.doc(doc.data().expense_category_name).update(
                    {
                        expense_category_selected: false
                    }
                )
            }
        })
    });
};
