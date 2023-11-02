<template>
  <div class="wrapper-main">
    <div class="container-custom-L">
      <section class="section-block card-section">
        <h1 class="card-title">Information about Client</h1>
        <div class="card-content-main">
          <div class="card-content">
            <label class="card-text">Client Name</label>
            <input class="input-style-custom"
                   v-model="clientName"
                   type="text"
                   placeholder="Name: ">
          </div>

          <div class="card-content">
            <label class="card-text">Client Nickname</label>
            <input class="input-style-custom"
                   type="text"
                   v-model="clientNickname"
                   placeholder="Nickname: ">
          </div>
        </div>

        <div class="card-content-main">
          <div class="card-content">
            <label class="card-text">PM of the project</label>
            <div class="custom-select ">
              <button class="btn btn-custom-selector" @click="toggleDropdown" :style="{ borderRadius: isDropdownOpen ? '4px 4px 0 0' : '4px' }">{{ selectedOption.label || 'Select option' }}</button>
              <ul v-show="isDropdownOpen">
                <div class="search-option">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33331 2.66667C4.75598 2.66667 2.66665 4.75601 2.66665 7.33334C2.66665 9.91066 4.75598 12 7.33331 12C9.91064 12 12 9.91066 12 7.33334C12 4.75601 9.91064 2.66667 7.33331 2.66667ZM1.33331 7.33334C1.33331 4.01963 4.0196 1.33334 7.33331 1.33334C10.647 1.33334 13.3333 4.01963 13.3333 7.33334C13.3333 10.647 10.647 13.3333 7.33331 13.3333C4.0196 13.3333 1.33331 10.647 1.33331 7.33334Z" fill="#636363"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6286 10.6286C10.889 10.3682 11.3111 10.3682 11.5714 10.6286L14.4714 13.5286C14.7318 13.7889 14.7318 14.2111 14.4714 14.4714C14.2111 14.7318 13.789 14.7318 13.5286 14.4714L10.6286 11.5714C10.3683 11.3111 10.3683 10.8889 10.6286 10.6286Z" fill="#636363"/>
                  </svg>
                  <input
                      class="input-style-custom input-style-custom-select"
                      v-model="searchText"
                      @click.stop
                      @keydown.enter="selectOption(filteredOptions[0])"
                  />
                </div>
                <li v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
                  {{ option.label }}
                </li>
              </ul>
            </div>

          </div>

          <div class="card-content">
            <label class="card-text">Milestone</label>
            <div class="custom-select ">
              <button class="btn btn-custom-selector" @click="toggleDropdownMile" :style="{ borderRadius: isDropdownOpenMile ? '4px 4px 0 0' : '4px' }">{{ selectedOptionMile.label || 'Select option' }}</button>
              <ul v-show="isDropdownOpenMile">
                <div class="search-option">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33331 2.66667C4.75598 2.66667 2.66665 4.75601 2.66665 7.33334C2.66665 9.91066 4.75598 12 7.33331 12C9.91064 12 12 9.91066 12 7.33334C12 4.75601 9.91064 2.66667 7.33331 2.66667ZM1.33331 7.33334C1.33331 4.01963 4.0196 1.33334 7.33331 1.33334C10.647 1.33334 13.3333 4.01963 13.3333 7.33334C13.3333 10.647 10.647 13.3333 7.33331 13.3333C4.0196 13.3333 1.33331 10.647 1.33331 7.33334Z" fill="#636363"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6286 10.6286C10.889 10.3682 11.3111 10.3682 11.5714 10.6286L14.4714 13.5286C14.7318 13.7889 14.7318 14.2111 14.4714 14.4714C14.2111 14.7318 13.789 14.7318 13.5286 14.4714L10.6286 11.5714C10.3683 11.3111 10.3683 10.8889 10.6286 10.6286Z" fill="#636363"/>
                  </svg>
                  <input
                      class="input-style-custom input-style-custom-select"
                      v-model="searchTextMile"
                      @click.stop
                      @keydown.enter="selectOptionMile(filteredOptionsMile[0])"
                  />
                </div>
                <li v-for="option in filteredOptionsMile" :key="option.id" @click="selectOptionMile(option)">
                  {{ option.label }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer class="footer-info-main">
        <button class="btn footer-save-next-btn" @click="submitClientInfo">Save and Next</button>
        <label class="footer-step-text">Next step: Information of the Project Parameters</label>
      </footer>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// import {useStore} from "vuex";

export default {
  name: "ClientInfo",
  setup() {
    // const store = useStore();
    const router = useRouter();

    const clientName = ref('');
    const clientNickname = ref('');
    const PM = ref('');
    const milestone = ref('');

    const submitClientInfo = async () => {
      // Ваши действия по сохранению данных
      // Например, передайте данные через параметры маршрута
      await router.push({
        path: '/createEst/infoProjectParams', // Путь к странице ProjectVue
        query: {
          clientName: clientName.value,
          clientNickname: clientNickname.value,
          PM: PM.value.label,
          milestone: milestone.value.label,
        },
      });
    };

    const PMOptions = ref([
      { id: 1, label: 'John Smith' },
      { id: 2, label: 'Albert Width' },
      { id: 3, label: 'Elisa Grey' },
    ]);

    const MilestoneOptions = ref([
      { id: 1, label: '1 week' },
      { id: 2, label: '2 week' },
      { id: 3, label: '3 week' },
      { id: 4, label: '4 week' },
      { id: 5, label: '5 week' },
      { id: 6, label: '6 week' },
    ]);

    const selectedOption = ref({});
    const searchText = ref('');
    const isDropdownOpen = ref(false);

    const selectedOptionMile = ref({});
    const searchTextMile = ref('');
    const isDropdownOpenMile = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
      // console.log(isDropdownOpen);
    };

    const toggleDropdownMile = () => {
      isDropdownOpenMile.value = !isDropdownOpenMile.value;
    };

    const filteredOptions = computed(() => {
      if (!searchText.value) {
        return PMOptions.value;
      }
      return PMOptions.value.filter(option =>
          option.label.toLowerCase().startsWith(searchText.value.toLowerCase())
      );
    });

    const filteredOptionsMile = computed(() => {
      if (!searchTextMile.value) {
        return MilestoneOptions.value;
      }
      return MilestoneOptions.value.filter(option =>
          option.label.toLowerCase().startsWith(searchTextMile.value.toLowerCase())
      );
    });

    const selectOption = option => {
      selectedOption.value = option;
      searchText.value = '';
      isDropdownOpen.value = false;
      PM.value = option;
    };

    const selectOptionMile = option => {
      selectedOptionMile.value = option;
      searchTextMile.value = '';
      isDropdownOpenMile.value = false;
      milestone.value = option;
    };

    return {
      clientName,
      clientNickname,
      PM,
      milestone,
      submitClientInfo,
      selectedOption,
      searchText,
      isDropdownOpen,
      toggleDropdown,
      filteredOptions,
      selectOption,
      selectedOptionMile,
      searchTextMile,
      isDropdownOpenMile,
      toggleDropdownMile,
      filteredOptionsMile,
      selectOptionMile,
    };
  },
};
</script>

<style scoped>
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