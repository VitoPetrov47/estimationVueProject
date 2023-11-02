<template>
  <div v-if="isEditModalOpen" class="modal-overlay" @click="closeEditModal">
    <div class="modal" @click.stop>
      <span class="modal-close" @click="closeEditModal">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L11 11" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M11 1L1.00002 11" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </span>
            <section class="card-section">
              <h1 class="card-title">Edit Form</h1>
<!--              <h1 class="card-title">ID: {{id}}</h1>-->
              <div class="card-content-main">
                <div class="card-content">
                  <label class="card-text">Client Information</label>
                  <div class="card-information">
                    <div class="card-info-content" style="padding-right: 30px">
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Client Name: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.clientInfo.clientName">
                      </div>
                      <div class="card-info">
                        <p>Client Nickname:</p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.clientInfo.clientNickname">
                      </div>
                    </div>

                    <div class="card-info-content">
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Project PM: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.clientInfo.PM">
                      </div>
                      <div class="card-info">
                        <p>Milestone Duration:</p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.clientInfo.milestone">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-content">
                  <label class="card-text">Project Information</label>
                  <div class="card-information">
                    <div class="card-info-content" style="padding-right: 30px">
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Project Type: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.projectInfo.type">
                      </div>
                      <div class="card-info">
                        <p>Project Platform:</p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.projectInfo.platform">
                      </div>
                    </div>

                    <div class="card-info-content">
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Description: </p>
                        <textarea class="input-style-custom"
                                  v-model="localRecordInfo.projectInfo.description"></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-content">
                  <label class="card-text">Additional Attribution Information</label>
                  <div class="card-information">
                    <div class="card-info-content" style="padding-right: 30px">
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Authorization: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.authorization">
                      </div>
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>User's Profile:</p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.profile">
                      </div>
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>User's Dashboard: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.dashboard">
                      </div>
                      <div class="card-info">
                        <p>User's Publish Posts:</p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.publish">
                      </div>
                    </div>

                    <div class="card-info-content">
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Subscription: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.subscribe">
                      </div>
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Referral System: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.referral">
                      </div>
                      <div class="card-info" style="margin-bottom: 20px;">
                        <p>Payment: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.payment">
                      </div>
                      <div class="card-info">
                        <p>Client's Balance: </p>
                        <input class="input-style-custom"
                               v-model="localRecordInfo.attributesInfo.balance">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card-content">
                  <label class="card-text">Constructor Information</label>
                  <div class="card-information">
                    <div class="card-info-content" style="padding-right: 30px">

                      <div class="card-i-c-parent" v-for="(item, index) in localRecordInfo.constructorInfo" :key="index">
                        <input class="input-style-custom" v-model="item.content">
                        <div class="card-i-c-paragraph" v-for="(item1, index) in item.paragraph" :key="index">
                          <div class="c-i-c-paragraph">
                            <p style="margin-right: 10px; padding-left: 20px">{{ item1.id+1 }}. </p>
                            <input class="input-style-custom" v-model="item1.content">
                          </div>
                          <div class="card-i-c-child" v-for="(item2, index) in item1.child_paragraph" :key="index">
                            <div class="c-i-c-child">
                              <p style="margin-right: 10px; padding-left: 40px">- </p>
                              <input class="input-style-custom" v-model="item2.content">
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>

        <footer class="btns-content" style="padding-top: 30px">
          <button class="btn btn-success footer-save-next-btn" @click="confirmUpdate(id)">Confirm to Update</button>
          <button class="btn" @click="closeEditModal">Cancel</button>
        </footer>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {ref, watch} from "vue";

export default {
  name: "EditModalWindow",
  props: {
    isEditModalOpen: Boolean,
    id: String,
    recordInfo: Object,
    closeEditModal: Function, // Передаем метод closeModal из родительского компонента
  },
  setup(props) {
    const store = useStore();

    const localRecordInfo = ref();

    watch(() => props.isEditModalOpen, (isOpen) => {
      if (isOpen) {
        console.log('id', props.id);
        console.log('record', props.recordInfo);
        localRecordInfo.value = { ...props.recordInfo };
        console.log('localRecord', localRecordInfo.value);

        // Проверка и инициализация constructorInfo
        if (!localRecordInfo.value.constructorInfo) {
          localRecordInfo.value.constructorInfo = [];
        }
        // Проверка и инициализация paragraph и child_paragraph
        localRecordInfo.value.constructorInfo.forEach((item) => {
          if (!item.paragraph) {
            item.paragraph = [];
          }
          item.paragraph.forEach((p) => {
            if (!p.child_paragraph) {
              p.child_paragraph = [];
            }
          });
        });
      }
    });

    const confirmUpdate = async (id) => {

      //constructor
      const updatedConstructorInfo = localRecordInfo.value.constructorInfo.map((item, index) => {
        const updatedItem = { ...item };
        updatedItem.content = localRecordInfo.value.constructorInfo[index].content; // Обновляем content

        // Обновление paragraph
        updatedItem.paragraph = item.paragraph.map((p, pIndex) => {
          const updatedParagraph = { ...p };
          updatedParagraph.content = localRecordInfo.value.constructorInfo[index].paragraph[pIndex].content; // Обновляем content

          // Обновление child_paragraph
          updatedParagraph.child_paragraph = p.child_paragraph.map((c, cIndex) => {
            const updatedChildParagraph = { ...c };
            updatedChildParagraph.content = localRecordInfo.value.constructorInfo[index].paragraph[pIndex].child_paragraph[cIndex].content; // Обновляем content

            return updatedChildParagraph;
          });

          return updatedParagraph;
        });

        return updatedItem;
      });

      //update
      const updatedData = {
        clientInfo: {
          clientName: localRecordInfo.value.clientInfo.clientName,
          clientNickname: localRecordInfo.value.clientInfo.clientNickname,
          PM: localRecordInfo.value.clientInfo.PM,
          milestone: localRecordInfo.value.clientInfo.milestone
        },
        projectInfo: {
          platform: localRecordInfo.value.projectInfo.platform,
          type: localRecordInfo.value.projectInfo.type,
          description: localRecordInfo.value.projectInfo.description,
        },
        attributesInfo: {
          authorization: localRecordInfo.value.attributesInfo.authorization,
          dashboard: localRecordInfo.value.attributesInfo.dashboard,
          payment: localRecordInfo.value.attributesInfo.payment,
          profile: localRecordInfo.value.attributesInfo.profile,
          publish: localRecordInfo.value.attributesInfo.publish,
          referral: localRecordInfo.value.attributesInfo.referral,
          subscribe: localRecordInfo.value.attributesInfo.subscribe,
          balance: localRecordInfo.value.attributesInfo.balance,
        },
        constructorInfo: updatedConstructorInfo
      };

      console.log('id: ', id);
      console.log('updatedData:', updatedData);

      try {
        const result = await store.dispatch('editRecordById', { id, updatedData });
        if (result) {
          console.log('Record updated successfully');
          window.location.reload();
          // Вы можете выполнить какие-либо дополнительные действия после успешного обновления записи
        } else {
          console.error('Failed to update record');
        }
      } catch (e) {
        console.error(e);
      }
    };

    return {
      confirmUpdate,
      localRecordInfo,
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
.card-information {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;

  background: #F0F0F0;
  border-radius: 10px;
  border: 0;
  outline: none;
  padding: 20px;
}
.card-info-content {

}
.card-info {
  /*display: flex;*/
  /*justify-content: left;*/
  /*align-items: center;*/

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card-info p {
  margin-bottom: 10px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #636363;
}
.card-info label {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;

  margin-left: 10px;
}
.card-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-title {
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: black;

  margin-bottom: 30px;
}
.card-content-main {
  padding: 30px;
  max-width: 900px;
  height: 400px;
  overflow-y: auto;
}
.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 30px;
}
.card-text {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color:  black;

  margin-bottom: 10px;
}
.card-i-c-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.card-i-c-parent p {
  margin-bottom: 10px;
}
.c-i-c-paragraph {
  display: flex;
  justify-content: left;
  align-items: center;
}
.c-i-c-child {
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 10px 0;
}
.btns-content {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.card-i-c-paragraph {
  margin-top: 10px;
}
</style>