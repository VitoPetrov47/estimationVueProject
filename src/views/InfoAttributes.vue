<template>
  <div class="wrapper-main">
    <div class="container-custom-L">
      <section class="section-block card-section">
        <h1 class="card-title">Additional Attributes</h1>
        <div class="card-content-main">
          <AttributeAuth @optionSelected="handleOptionSelected"/>
          <AttributeProfile @optionSelected="handleOptionSelectedProfile"/>
          <AttributeDashboard @optionSelected="handleOptionSelectedDashboard"/>
          <AttributePublishPost @optionSelected="handleOptionSelectedPublish"/>
          <AttributeSubscribe @optionSelected="handleOptionSelectedSubscribe"/>
          <AttributeReferral @optionSelected="handleOptionSelectedReferral"/>
          <AttributePayment @optionSelected="handleOptionSelectedPayment"/>
          <AttributeBalance @update:balance="handleOptionSelectedBalance"/>
        </div>
      </section>

      <footer class="footer-info-main">
        <button class="btn footer-save-next-btn" @click="submitAttributesInfo">Save and Next</button>
        <label class="footer-step-text">Next step: Review</label>
      </footer>
    </div>
  </div>
</template>

<script>
import {ref, computed, onMounted, onBeforeMount} from 'vue';
import {useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
import {useStore} from "vuex";
// import {useStore} from "vuex";
import AttributeAuth from "@/views/createEstAttributes/attributeAuth";
import AttributeProfile from "@/views/createEstAttributes/attributeProfile";
import AttributeDashboard from "@/views/createEstAttributes/attributeDashboard";
import AttributeReferral from "@/views/createEstAttributes/attributeReferral";
import AttributePublishPost from "@/views/createEstAttributes/attributePublishPost";
import AttributeSubscribe from "@/views/createEstAttributes/attributeSubscribe";
import AttributePayment from "@/views/createEstAttributes/attributePayment";
import AttributeBalance from "@/views/createEstAttributes/attributeBalance";

export default {
  name: "InfoAttributes",
  components: {
    AttributeAuth,
    AttributeProfile,
    AttributeDashboard,
    AttributeReferral,
    AttributePublishPost,
    AttributeSubscribe,
    AttributePayment,
    AttributeBalance
  },

  setup() {
    const selectedOptionsArray = [];
    const balanceInput = ref('');

    const handleOptionSelected = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Authorization');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Authorization', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Auth:', selectedOptionsArray);
    }
    const handleOptionSelectedProfile = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Profile');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Profile', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Profile:', selectedOptionsArray);
    }
    const handleOptionSelectedDashboard = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Dashboard');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Dashboard', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Dashboard:', selectedOptionsArray);
    }
    const handleOptionSelectedPublish = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Publish');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Publish', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Publish:', selectedOptionsArray);
    }
    const handleOptionSelectedSubscribe = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Subscribe');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Subscribe', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Subscribe:', selectedOptionsArray);
    }
    const handleOptionSelectedReferral = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Referral');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Referral', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Referral:', selectedOptionsArray);
    }
    const handleOptionSelectedPayment = (selectedOptions) => {
      const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Payment');
      if (existingElementIndex !== -1) {
        selectedOptionsArray[existingElementIndex].options = selectedOptions.map(option => ({ ...option }));
      } else {
        selectedOptionsArray.push({ name: 'Payment', options: selectedOptions.map(option => ({ ...option })) });
      }

      // console.log('Payment:', selectedOptionsArray);
    }
    const handleOptionSelectedBalance = (newValue) => {
      balanceInput.value = newValue;
      if (newValue !== '') {
        // console.log('handleOptionSelectedBalance:', newValue);
        const existingElementIndex = selectedOptionsArray.findIndex(item => item.name === 'Balance');
        if(existingElementIndex !== -1) {
          selectedOptionsArray[existingElementIndex].options = newValue;
        } else {
          selectedOptionsArray.push({name: 'Balance', options: newValue});
        }
      }
      // console.log('selectedOptionsArray:', selectedOptionsArray);
    }

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const clientInfo = ref({});
    const projectInfo = ref({});

    onBeforeMount(() => {
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

      console.log(clientInfo.value);
      console.log(projectInfo.value);
    });

    const submitAttributesInfo = async () => {

      const AttributionsInfo = selectedOptionsArray;

      const distributedInfo = AttributionsInfo.reduce((result, item) => {
        result[item.name] = item;
        return result;
      }, {});

      const Authorization = distributedInfo['Authorization'].options.map(option => option.label);
      const Profile = distributedInfo['Profile'].options.map(option => option.label);
      const Dashboard = distributedInfo['Dashboard'].options.map(option => option.label);
      const Publish = distributedInfo['Publish'].options.map(option => option.label);
      const Subscribe = distributedInfo['Subscribe'].options.map(option => option.label);
      const Referral = distributedInfo['Referral'].options.map(option => option.label);
      const Payment = distributedInfo['Payment'].options.map(option => option.label);
      const Balance = distributedInfo['Balance'].options;

      console.log('Authorization: ', Authorization);
      console.log('Profile: ', Profile);
      console.log('Dashboard: ', Dashboard);
      console.log('Publish: ', Publish);
      console.log('Subscribe: ', Subscribe);
      console.log('Referral: ', Referral);
      console.log('Payment: ', Payment);
      console.log('Balance: ', Balance);

      try {
        await router.push({
          path: '/createEst/infoConstructor',
          query: {
            clientName: clientInfo.value.clientName,
            clientNickname: clientInfo.value.clientNickname,
            PM: clientInfo.value.PM,
            milestone: clientInfo.value.milestone,
            description: projectInfo.value.description,
            type: projectInfo.value.type,
            platform: projectInfo.value.platform,
            Authorization: Authorization,
            Dashboard: Dashboard,
            Profile: Profile,
            Publish: Publish,
            Subscribe: Subscribe,
            Referral: Referral,
            Payment: Payment,
            Balance: Balance,
          }
        })
      } catch (e) {
        console.log(e);
      }
    };

    return {
      clientInfo,
      projectInfo,
      submitAttributesInfo,
      handleOptionSelected,
      handleOptionSelectedProfile,
      handleOptionSelectedDashboard,
      handleOptionSelectedPublish,
      handleOptionSelectedSubscribe,
      handleOptionSelectedPayment,
      handleOptionSelectedReferral,
      handleOptionSelectedBalance,
      balanceInput
    }
  },
};
</script>

<style scoped>
.checked-option {
  margin-right: 10px;
}
/*card*/
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

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 300px;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
}

li {
  padding: 8px 12px;
  cursor: pointer;

  display: flex;
  justify-content: left;
  align-items: center;
}

li:hover {
  background-color: #f2f2f2;
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
</style>