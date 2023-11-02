<template>
  <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
    <div class="modal" @click.stop>
      <span class="modal-close" @click="closeModal">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L11 11" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M11 1L1.00002 11" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
      </span>
      <div class="modal-content">
        <h2>Estimation Review</h2>

        <div class="review-content">
          <div style='page-break-before: always; position: relative; top: 0; left: 0; width: 100%; text-align: left'>
            <img src="../../logo.png" width="152" height="56" alt="logo">
          </div>

          <div style="width: 100%">
            <p class="MsoNormal" style="text-align:justify"><span lang="ru" style="font-size:
15.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:Nunito;
mso-bidi-font-family:Nunito">Hello,<b style="mso-bidi-font-weight:normal">{{clientInfo.clientName}}!</b></span></p>

            <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
              Project Description</b></h2>

            <h3 style="text-align:justify"><span lang="ru" style="font-size:12.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:
          Nunito;mso-bidi-font-family:Nunito">{{projectInfo.description}}</span></h3>

            <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
              Project Info</b></h2>

            <table width="601" border="1" cellspacing="0" cellpadding="0"
                   style="
                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                 mso-border-alt:solid #F1C232 1.0pt;
                 mso-border-insideh:1.0pt solid #F1C232;
                 mso-border-insidev:1.0pt solid #F1C232;">
              <thead>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Type</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Platform</p></td>
                </tr>
              </thead>

              <tbody width="601" border="1" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{projectInfo.type}}</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{projectInfo.platform}}</p></td>
                </tr>
              </tbody>
            </table>

            <table width="601" border="1" cellspacing="0" cellpadding="0"
                   style="
                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                 mso-border-alt:solid #F1C232 1.0pt;
                 mso-border-insideh:1.0pt solid #F1C232;
                 mso-border-insidev:1.0pt solid #F1C232;">
              <thead>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Name</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Attributes</p></td>
                </tr>
              </thead>
              <tbody width="601" border="1" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Authentication</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.authorization}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">User Profile</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.profile}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dashboard</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.dashboard}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Publish Post</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.publish}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Subscribe</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.subscribe}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Referral</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.referral}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Payment</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.payment}}</p></td>
                </tr>
                <tr>
                  <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Balance</p></td>
                  <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributeInfo.balance}}</p></td>
                </tr>
              </tbody>
            </table>

            <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">
              ESTIMATION AND FUNCTIONALITY</b></h2>

            <table width="601" border="1" cellspacing="0" cellpadding="0"
                   style="
                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;
                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
                 mso-border-alt:solid #F1C232 1.0pt;
                 mso-border-insideh:1.0pt solid #F1C232;
                 mso-border-insidev:1.0pt solid #F1C232;">

              <thead>
              <tr>
                <th width="70" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">
                  <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">Dev</p>
                </th>
                <th width="431" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">
                  <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">In Work</p>
                </th>
                <th width="100" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">
                  <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">Hours</p>
                </th>
              </tr>
              </thead>

              <tbody v-for="(item, index) in tree" :key="index" width="601" border="1" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="70" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666"></p></td>
                  <td width="431" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.content}}</p></td>
                  <td width="100" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666"></p></td>
                </tr>
                <tr>
                  <td width="70" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dev</p></td>
                  <td width="431" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">
                    <ul style="list-style: none;">
                      <li v-for="(item1, index) in item.paragraph" :key="index">
                        <div style="display: flex; justify-content: left; align-items: center; text-align: left">
                          <p style="padding-right: 5px">{{ item1.id+1 }}. </p>
                          <p>{{ item1.content }}</p>
                        </div>
                        <ul style="list-style: none;">
                          <li v-for="(item2, index) in item1.child_paragraph" :key="index">
                            <div style="display: flex; justify-content: left; align-items: center; text-align: left">
                              <p style="padding-right: 5px">- </p>
                              <p>{{item2.content}}</p>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </p></td>
                  <td width="100" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">0</p></td>
                </tr>
              </tbody>

            </table>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineProps } from 'vue';

export default {
  props: {
    isModalOpen: Boolean,
    modalContent: String,
    clientInfo: Array,
    projectInfo: Array,
    attributeInfo: Array,
    tree: Array,
    closeModal: Function, // Передаем метод closeModal из родительского компонента
  },
  setup() {
  }
};
</script>

<style scoped>
/* Стили для модального окна и оверлея */
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

/* Стили для кнопки закрытия */
.modal-close {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  cursor: pointer;
}
.review-content {
  max-height: 400px; /* Задайте фиксированную высоту контейнера */
  overflow-y: auto; /* Добавьте скролл при необходимости */
  overflow-x: hidden;
}
</style>