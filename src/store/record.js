import firebase from "firebase/compat/app";

export default {
    actions: {
        //add
        async createRecord({ dispatch, commit }, record) {
            console.log('record:', record);
            try {
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/records/${uid}`).push(); // Создаем новую запись
                const newRecordRef = firebase.database().ref(`/records/${uid}`).push(); // Получаем ссылку на новую запись
                newRecordRef.set(record); // Устанавливаем данные для новой записи
                return newRecordRef.key; // Возвращаем ключ новой записи
            } catch (e) {
                commit("setError", e);
                throw e;
            }
        },
        //get
        async fetchInfo({dispatch, commit}) {
            try {
                const uid = await dispatch('getUid')
                const info = (await firebase.database().ref(`/records/${uid}`).once('value')).val()
                return info;
            } catch (e) {
                commit('setError', e)
                throw e
            }
        },
        //getById
        async fetchInfoById({dispatch, commit}, id) {
          try {
              const uid = await dispatch('getUid')
              const record = (await firebase.database().ref(`/records/${uid}/${id}`).once('value')).val()
              return record;
          } catch (e) {
              commit('setError', e)
              throw e
          }
        },
        //delete
        async deleteRecordById({ dispatch }, id) {
            try {
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/records/${uid}/${id}`).remove(); // Удаляем запись по ID
                return true; // Возвращаем успешный результат
            } catch (e) {
                console.error(e);
                throw e;
            }
        },
        //edit
        async editRecordById({ dispatch }, { id, updatedData }) {
            try {
                const uid = await dispatch('getUid');
                const recordRef = firebase.database().ref(`/records/${uid}/${id}`);
                // Используйте метод .update(), чтобы обновить данные записи
                await recordRef.update(updatedData);
                return true; // Возвращаем успешный результат
            } catch (e) {
                console.error(e);
                throw e;
            }
        }
    },
};