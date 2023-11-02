<template>
  <div class="wrapper-main">
    <div class="container-custom-L">
      <section class="section-block card-section" style="padding-top: 130px">
        <h1 class="card-title">Review</h1>
        <div class="card-content-main">
          <div class="card-content">
            <label class="card-text">Client Information</label>
            <div class="card-information">
              <div class="card-info-content" style="padding-right: 30px">
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>Client Name: </p>
                  <label v-if="clientInfo.clientName">{{ clientInfo.clientName }}</label>
                </div>
                <div class="card-info">
                  <p>Client Nickname:</p>
                  <label v-if="clientInfo.clientNickname">{{ clientInfo.clientNickname }}</label>
                </div>
              </div>

              <div class="card-info-content">
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>Project PM: </p>
                  <label v-if="clientInfo.PM">{{ clientInfo.PM }}</label>
                </div>
                <div class="card-info">
                  <p>Milestone Duration:</p>
                  <label v-if="clientInfo.milestone">{{ clientInfo.milestone }}</label>
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
                  <label v-if="projectInfo.type">{{ projectInfo.type }}</label>
                </div>
                <div class="card-info">
                  <p>Project Platform:</p>
                  <label v-if="projectInfo.platform">{{ projectInfo.platform }}</label>
                </div>
              </div>

              <div class="card-info-content">
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>Description: </p>
                  <label v-if="projectInfo.description">{{ projectInfo.description }}</label>
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
                  <label v-if="attributesInfo.authorization">{{ attributesInfo.authorization.toString() }}</label>
                </div>
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>User's Profile:</p>
                  <label v-if="attributesInfo.profile">{{ attributesInfo.profile.toString() }}</label>
                </div>
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>User's Dashboard: </p>
                  <label v-if="attributesInfo.dashboard">{{ attributesInfo.dashboard.toString() }}</label>
                </div>
                <div class="card-info">
                  <p>User's Publish Posts:</p>
                  <label v-if="attributesInfo.publish">{{ attributesInfo.publish.toString() }}</label>
                </div>
              </div>

              <div class="card-info-content">
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>Subscription: </p>
                  <label v-if="attributesInfo.subscribe">{{ attributesInfo.subscribe.toString() }}</label>
                </div>
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>Referral System: </p>
                  <label v-if="attributesInfo.referral">{{ attributesInfo.referral.toString() }}</label>
                </div>
                <div class="card-info" style="margin-bottom: 20px;">
                  <p>Payment: </p>
                  <label v-if="attributesInfo.payment">{{ attributesInfo.payment.toString() }}</label>
                </div>
                <div class="card-info">
                  <p>Client's Balance: </p>
                  <label v-if="attributesInfo.balance">{{ attributesInfo.balance.toString() }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="card-content">
            <label class="card-text">Constructor Information</label>
            <div class="card-information">
              <div class="card-info-content" style="padding-right: 30px">

                <div class="card-i-c-parent" v-for="(item, index) in tree" :key="index">
                  <p>Content: {{ item.content }}</p>
                  <div class="card-i-c-paragraph" v-for="(item1, index) in item.paragraph" :key="index">
                    <div class="c-i-c-paragraph">
                      <p style="margin-right: 10px; padding-left: 20px">{{ item1.id+1 }}. </p>
                      <p>Content: {{ item1.content }}</p>
                    </div>
                    <div class="card-i-c-child" v-for="(item2, index) in item1.child_paragraph" :key="index">
                      <div class="c-i-c-child">
                        <p style="margin-right: 10px; padding-left: 40px">- </p>
                        <p>Content: {{item2.content}}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="btn-review-block">
          <button @click="openModal" class="btn btn-review">Review</button>
          <InfoReviewModal :isModalOpen="isModalOpen"
                           :modalContent="modalContent"
                           :clientInfo="clientInfo"
                           :projectInfo="projectInfo"
                           :attributeInfo="attributesInfo"
                           :tree="tree"
                           :closeModal="closeModal"/>

        </div>
      </section>

      <footer class="footer-info-main">
        <button class="btn footer-save-next-btn" @click="submitReview">Confirm</button>
      </footer>
    </div>
  </div>

<!--  <div style="display: none">-->
<!--    <div class="document-content">-->

<!--      <div style='page-break-before: always; position: fixed; top: 0; left: 0; width: 100%; text-align: left'>-->
<!--        <img src="logo.png" width="152" height="56" alt="logo">-->
<!--      </div>-->

<!--      <div style="width: 100%">-->
<!--        <p class="MsoNormal" style="text-align:justify"><span lang="ru" style="font-size:-->
<!--15.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:Nunito;-->
<!--mso-bidi-font-family:Nunito">Hello,<b style="mso-bidi-font-weight:normal">{{clientInfo.clientName}}!</b></span></p>-->

<!--        <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">-->
<!--          Project Description</b></h2>-->

<!--        <h3 style="text-align:justify"><span lang="ru" style="font-size:12.0pt;line-height:115%;font-family:Nunito;mso-fareast-font-family:-->
<!--          Nunito;mso-bidi-font-family:Nunito">{{projectInfo.description}}</span></h3>-->

<!--        <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">-->
<!--          Project Info</b></h2>-->

<!--        <table width="601" border="1" cellspacing="0" cellpadding="0"-->
<!--               style="-->
<!--                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;-->
<!--                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;-->
<!--                 mso-border-alt:solid #F1C232 1.0pt;-->
<!--                 mso-border-insideh:1.0pt solid #F1C232;-->
<!--                 mso-border-insidev:1.0pt solid #F1C232;">-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Type</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Platform</p></td>-->
<!--          </tr>-->
<!--          </thead>-->

<!--          <tbody width="601" border="1" cellspacing="0" cellpadding="0">-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{projectInfo.type}}</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{projectInfo.platform}}</p></td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->

<!--        <table width="601" border="1" cellspacing="0" cellpadding="0"-->
<!--               style="-->
<!--                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;-->
<!--                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;-->
<!--                 mso-border-alt:solid #F1C232 1.0pt;-->
<!--                 mso-border-insideh:1.0pt solid #F1C232;-->
<!--                 mso-border-insidev:1.0pt solid #F1C232;">-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Name</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;background:#FFF2CC;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#434343;">Attributes</p></td>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody width="601" border="1" cellspacing="0" cellpadding="0">-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Authentication</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.authorization}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">User Profile</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.profile}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dashboard</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.dashboard}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Publish Post</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.publish}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Subscribe</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.subscribe}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Referral</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.referral}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Payment</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.payment}}</p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Balance</p></td>-->
<!--            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.balance}}</p></td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->

<!--        <h2 align="center" style="text-align:center"><b style="mso-bidi-font-weight:normal; font-family:Nunito;">-->
<!--          ESTIMATION AND FUNCTIONALITY</b></h2>-->

<!--        <table width="601" border="1" cellspacing="0" cellpadding="0"-->
<!--               style="-->
<!--                 border-collapse:collapse;mso-table-layout-alt:fixed;border:none;-->
<!--                 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;-->
<!--                 mso-border-alt:solid #F1C232 1.0pt;-->
<!--                 mso-border-insideh:1.0pt solid #F1C232;-->
<!--                 mso-border-insidev:1.0pt solid #F1C232;">-->

<!--          <thead>-->
<!--          <tr>-->
<!--            <th width="70" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">-->
<!--              <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">Dev</p>-->
<!--            </th>-->
<!--            <th width="431" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">-->
<!--              <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">In Work</p>-->
<!--            </th>-->
<!--            <th width="100" style="border: solid #F1C232 1.0pt; background: #FFF2CC;">-->
<!--              <p style="text-align: center; line-height: normal; font-size: 12.0pt; font-family: Nunito; mso-fareast-font-family: Nunito; color: #434343;">Hours</p>-->
<!--            </th>-->
<!--          </tr>-->
<!--          </thead>-->

<!--          <tbody v-for="(item, index) in tree" :key="index" width="601" border="1" cellspacing="0" cellpadding="0">-->
<!--          <tr>-->
<!--            <td width="70" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666"></p></td>-->
<!--            <td width="431" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{item.content}}</p></td>-->
<!--            <td width="100" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666"></p></td>-->
<!--          </tr>-->
<!--          <tr>-->
<!--            <td width="70" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dev</p></td>-->
<!--            <td width="431" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">-->
<!--              <ul style="list-style: none;">-->
<!--                <li v-for="(item1, index) in item.paragraph" :key="index">-->
<!--                  <div style="display: flex; justify-content: left; align-items: center; text-align: left">-->
<!--                    <p style="padding-right: 5px">{{ item1.id+1 }}. </p>-->
<!--                    <p>{{ item1.content }}</p>-->
<!--                  </div>-->
<!--                  <ul style="list-style: none;">-->
<!--                    <li v-for="(item2, index) in item1.child_paragraph" :key="index">-->
<!--                      <div style="display: flex; justify-content: left; align-items: center; text-align: left">-->
<!--                        <p style="padding-right: 5px">- </p>-->
<!--                        <p>{{item2.content}}</p>-->
<!--                      </div>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                </li>-->
<!--              </ul>-->
<!--              </p></td>-->
<!--            <td width="100" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">0</p></td>-->
<!--          </tr>-->
<!--          </tbody>-->

<!--        </table>-->

<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
</template>

<script>
import {ref, computed, onBeforeMount, onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useStore} from "vuex";
import InfoReviewModal from "@/views/InfoReviewModal";
// import {useStore} from "vuex";

export default {
  name: "InfoReview",
  components: {
    InfoReviewModal
  },
  setup() {
    const isModalOpen = ref(false);
    const modalContent = ref("Содержимое модального окна");

    const openModal = () => {
      isModalOpen.value = true;
    };

    const closeModal = () => {
      isModalOpen.value = false;
    };


    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    let clientInfo = ref({});
    let projectInfo = ref({});
    let attributesInfo = ref({});
    let constructorInfo = ref({});

    let tree = ref([]);

    onMounted(() => {
      clientInfo.value = {
        clientName: route.query.clientName || '',
        clientNickname: route.query.clientNickname || '',
        PM: route.query.PM || '',
        milestone: route.query.milestone || '',
      };

      projectInfo.value = {
        description: route.query.description || '',
        type: route.query.type || '',
        platform: route.query.platform || '',
      };

      attributesInfo.value = {
        authorization: route.query.authorization || '',
        dashboard: route.query.dashboard || '',
        profile: route.query.profile || '',
        publish: route.query.publish || '',
        subscribe: route.query.subscribe || '',
        referral: route.query.referral || '',
        payment: route.query.payment || '',
        balance: route.query.balance || '',
      }

      constructorInfo.value = JSON.parse(route.query.estTree || '[]');
      console.log('Constructor: ', constructorInfo.value._value);

      tree.value = constructorInfo.value._value;
    });

    const submitReview = async () => {
      console.log('review');

      console.log('clientInfo: ', clientInfo);
      console.log('projectInfo: ', projectInfo);
      console.log('AttributionsInfo: ', attributesInfo);
      console.log('Constructor: ', constructorInfo);

      try {
        const dateCreate = new Date().toJSON();

        const date = new Date(dateCreate);
        const day = date.getDate(); // Извлекаем день
        const month = date.getMonth() + 1; // Извлекаем месяц (месяцы в JavaScript начинаются с 0, поэтому добавляем 1)
        const year = date.getFullYear(); // Извлекаем год

        const formattedDay = day < 10 ? `0${day}` : day;
        const formattedMonth = month < 10 ? `0${month}` : month;
        const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

        const result = await store.dispatch('createRecord', {
          clientInfo: clientInfo.value,
          projectInfo: projectInfo.value,
          attributesInfo: attributesInfo.value,
          constructorInfo: tree.value,
          date_create: formattedDate
        });

        // await createDocument()

        console.log('record added: ', result);

        await router.push({
          path: '/createEst/infoResult',
          query: {
            clientName: clientInfo.value.clientName,
            clientNickname: clientInfo.value.clientNickname,
            PM: clientInfo.value.PM,
            milestone: clientInfo.value.milestone,
            description: projectInfo.value.description,
            type: projectInfo.value.type,
            platform: projectInfo.value.platform,
            authorization: attributesInfo.value.authorization,
            dashboard: attributesInfo.value.dashboard,
            profile: attributesInfo.value.profile,
            publish: attributesInfo.value.publish,
            subscribe: attributesInfo.value.subscribe,
            referral: attributesInfo.value.referral,
            payment: attributesInfo.value.payment,
            balance: attributesInfo.value.balance,
            estTree: JSON.stringify(tree.value)
          }
        })
        // router.push('/infoResult');
      } catch (e) {
        console.log(e.message);
      }
    }
    // const createDocument = async () => {
    //   const preHtml =
    //       "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    //   const postHtml = '</body></html>';
    //
    //   const contentHtml = document.querySelector('.document-content').innerHTML;
    //
    //   const html = preHtml + contentHtml + postHtml;
    //
    //   const blob = new Blob(['\ufeff', html], {
    //     type: 'application/msword',
    //   });
    //
    //   // Specify file name
    //   const filename = 'document.doc';
    //
    //   if (navigator.msSaveOrOpenBlob) {
    //     navigator.msSaveOrOpenBlob(blob, filename);
    //   } else {
    //     // Create a link to the file
    //     const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    //     const downloadLink = document.createElement('a');
    //     document.body.appendChild(downloadLink);
    //
    //     // Setting the file name
    //     downloadLink.href = url;
    //     downloadLink.download = filename;
    //
    //     // Trigger the download
    //     downloadLink.click();
    //
    //     await document.body.removeChild(downloadLink);
    //   }
    // };

    return {
      submitReview,
      clientInfo,
      projectInfo,
      attributesInfo,
      constructorInfo,
      tree,
      isModalOpen,
      modalContent,
      openModal,
      closeModal,
    }
  },
};
</script>

<style scoped>
/*card*/
.card-information {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  display: flex;
  justify-content: left;
  align-items: center;
}
.card-info p {
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
  align-items: flex-start;
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
/*footer*/
.footer-info-main {
  display: flex;
  justify-content: left;
  align-items: center;

  margin-top: 20px;
  padding-bottom: 30px;
}
.footer-save-next-btn {
  border: 0;
  outline: none;
  border-radius: 10px;
  padding: 10px 12px;
  background: var(--main-bg-color);

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  color: #000000;
  margin-right: 30px;
  cursor: pointer;

  transition: all .3s;
}
.footer-save-next-btn:hover {
  background: var(--main-bg-hover-color);
}
.footer-step-text {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #636363;
}

/*custom select*/
.custom-select {
  position: relative;
}

.card-i-c-parent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 8px 12px;
  cursor: pointer;

  display: flex;
  justify-content: left;
  align-items: center;
}

li:hover {
}
.search-option {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.search-option svg {
  width: 40px;
  height: 40px;

  transform: scale(.6);
}
.input-style-custom-select {
  border-radius: 0;
  border: 0;
  width: 190px;
  padding: 8px 0;
}
.input-style-custom-select:focus {
  border: 0;
  box-shadow: none;
}
.btn-custom-selector {
  width: 300px;
  border-radius: 4px;

  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: black;
}
.btn-review-block {
  display: flex;
  justify-content: left;
  align-items: center;

  margin-bottom: 10px;
}
.btn-review {
  background: var(--main-bg-color);
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 10px;

  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: #000000;
}
.btn-review:hover {
  background: var(--main-bg-hover-color);
}
</style>