<template>
  <div class="wrapper-main">
    <div class="container-custom-L">
      <section class="section-block card-section" style="padding-top: 130px">
        <h1 class="card-title">Result Estimation</h1>
        <div class="card-content-main">
          <div class="card-content">
            <label class="card-text">Would you like to download the Estimation Word Document?</label>
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%">
              <button @click="createDocument" class="btn btn-success">Yes, download</button>
              <button @click="goToDashboard" class="btn btn-warning">Go to Dashboard</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <div style="display: none">
    <div class="document-content">

      <div style='page-break-before: always; position: fixed; top: 0; left: 0; width: 100%; text-align: left'>
        <img src="logo.png" width="152" height="56" alt="logo">
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
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.authorization}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">User Profile</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.profile}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Dashboard</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.dashboard}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Publish Post</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.publish}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Subscribe</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.subscribe}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Referral</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.referral}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Payment</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.payment}}</p></td>
          </tr>
          <tr>
            <td width="200" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">Balance</p></td>
            <td width="401" style="border:solid #F1C232 1.0pt;"><p style="text-align:center;line-height:normal; font-size:12.0pt;font-family:Nunito;mso-fareast-font-family:Nunito;color:#666666">{{attributesInfo.balance}}</p></td>
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
</template>

<script>
import {useStore} from "vuex";
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";

export default {
  name: "InfoResult",
  setup() {
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
      // console.log('Constructor: ', constructorInfo.value._value);
      console.log('Constructor: ', constructorInfo.value);

      tree.value = constructorInfo.value;

      console.log('tree: ',  tree);

      console.log('attributesInfo.value: ', attributesInfo.value);
      console.log('projectInfo.value : ', projectInfo.value);
      console.log('clientInfo.value: ', clientInfo.value);
    });

    const goToDashboard = () => {
      router.push({
        path: '/'
      })
    }

    const createDocument = async () => {
      const preHtml =
          "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
      const postHtml = '</body></html>';

      const contentHtml = document.querySelector('.document-content').innerHTML;

      const html = preHtml + contentHtml + postHtml;
      const blob = new Blob(['\ufeff', html], {
        type: 'application/msword',
      });

      // Specify file name
      const filename = 'document.doc';

      if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, filename);
      } else {
        // Create a link to the file
        const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
        const downloadLink = document.createElement('a');
        document.body.appendChild(downloadLink);

        // Setting the file name
        downloadLink.href = url;
        downloadLink.download = filename;

        // Trigger the download
        downloadLink.click();

        await document.body.removeChild(downloadLink);
      }
    };

    return {
      clientInfo,
      projectInfo,
      attributesInfo,
      constructorInfo,
      tree,
      goToDashboard,
      createDocument,
    }
  }
}
</script>

<style scoped>

</style>