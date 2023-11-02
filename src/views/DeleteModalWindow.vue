<template>
  <div v-if="isDeleteModalOpen" class="modal-overlay" @click="closeDeleteModal">
    <div style="width: 400px" class="modal" @click.stop>
      <span class="modal-close" @click="closeDeleteModal">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L11 11" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M11 1L1.00002 11" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </span>

      <div class="modal-content">
        <h1 class="card-title">Are you sure that you want to delete this Estimation?</h1>
<!--        <h1 class="card-title">ID: {{id}}</h1>-->
      </div>

      <div class="btns-content" style="padding-top: 30px">
        <button class="btn btn-success" @click="deleteRecord(id)">Confirm</button>
        <button class="btn" @click="closeDeleteModal">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {ref} from "vue";

export default {
  name: "DeleteModalWindow",
  props: {
    isDeleteModalOpen: Boolean,
    id: String,
    closeDeleteModal: Function,
  },
  setup() {
    const store = useStore();
    let records = ref([]);

    const deleteRecord = async (id) => {
      // console.log('id: ', id);
      try {
        const result = await store.dispatch('deleteRecordById', id);
        if (result) {
          // Удаление успешно, обновите список записей или выполните другие необходимые действия
          console.log('Record deleted successfully');
          records.value = await store.dispatch('fetchInfo');
          window.location.reload();
          // Тут можно обновить список записей, например, вызвать store.dispatch('fetchInfo') снова
        } else {
          console.error('Failed to delete record');
        }
      } catch (e) {
        console.error(e);
      }
    };

    return {
      deleteRecord,
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #fff;
  padding: 60px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
}
.btns-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>