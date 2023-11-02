// import { signInWithEmailAndPassword } from "firebase/auth";
// import firebase from "firebase/compat/app";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/compat/app";

export default {
    actions: {
        async login({commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
                throw e;
            }
        },
        async register({dispatch, commit}, {email, password, name}) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password)
                const uid = await dispatch('getUid')
                console.log('uid: ', uid);
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                    email,
                    data: new Date().toLocaleDateString(),
                    roles: 'user'
                })
            } catch (e) {
                commit('setError', e)
                console.log(commit('setError', e));
                throw e;
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user.uid : null
        },
        async logout({commit}) {
            await firebase.auth().signOut()
            await commit('clearInfo')
        }
    }
}