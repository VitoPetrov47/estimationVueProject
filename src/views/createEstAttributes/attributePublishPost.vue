<template>
  <div class="card-content">
    <label class="card-text">Publish Post</label>
    <div class="custom-select ">
      <button class="btn btn-custom-selector" @click="toggleDropdown" :style="{ borderRadius: isDropdownOpen ? '4px 4px 0 0' : '4px' }">{{ 'Select option' }}</button>
      <ul v-show="isDropdownOpen">
        <div class="search-option">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.33331 2.66667C4.75598 2.66667 2.66665 4.75601 2.66665 7.33334C2.66665 9.91066 4.75598 12 7.33331 12C9.91064 12 12 9.91066 12 7.33334C12 4.75601 9.91064 2.66667 7.33331 2.66667ZM1.33331 7.33334C1.33331 4.01963 4.0196 1.33334 7.33331 1.33334C10.647 1.33334 13.3333 4.01963 13.3333 7.33334C13.3333 10.647 10.647 13.3333 7.33331 13.3333C4.0196 13.3333 1.33331 10.647 1.33331 7.33334Z" fill="#636363"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6286 10.6286C10.889 10.3682 11.3111 10.3682 11.5714 10.6286L14.4714 13.5286C14.7318 13.7889 14.7318 14.2111 14.4714 14.4714C14.2111 14.7318 13.789 14.7318 13.5286 14.4714L10.6286 11.5714C10.3683 11.3111 10.3683 10.8889 10.6286 10.6286Z" fill="#636363"/>
          </svg>
          <input
              class="input-style-custom input-style-custom-select"
              v-model="authorization"
              @click.stop
              @keydown.enter="selectOption(filteredOptions[0])"
          />
        </div>
        <li v-for="option in filteredOptions" :key="option.id" @click="selectOption(option)">
          <svg width="12" height="9" class="checked-option" v-if="isSelected(option)" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.1679 0.911236L11.161 0.902238L11.1534 0.893793C10.9211 0.636051 10.5363 0.635404 10.3033 0.891853L4.51343 7.1224L1.71268 4.10065C1.47963 3.84406 1.09478 3.84465 0.862444 4.10245C0.645852 4.34277 0.645852 4.71447 0.862444 4.95479L0.862423 4.95481L0.865268 4.95788L3.80455 8.12909C3.99157 8.33561 4.25065 8.44286 4.497 8.44286C4.76358 8.44286 5.00521 8.33258 5.18934 8.12922L11.1133 1.75431C11.3545 1.51386 11.3501 1.14705 11.1679 0.911236Z" fill="#636363" stroke="#636363" stroke-width="0.6"/>
          </svg>
          {{ option.label }}
        </li>
        <div class="custom-select-add-new-option">
          <input class="input-style-custom" v-model="newOptionText" @keydown.enter="addNewOption" placeholder="Add new option">
          <button class="btn" @click="addNewOption">+</button>
        </div>
      </ul>
    </div>
    <div class="show-attributes">
      <div class="the-attribute" v-for="selectedAttr in selectedAttributes" :key="selectedAttr.id">
        <label>{{ selectedAttr.label }}</label>
        <button @click="removeAttribute(selectedAttr)">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L8.99998 8.99998" stroke="#636363" stroke-linecap="round"/>
            <path d="M9 1L1.00002 8.99998" stroke="#636363" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref, computed, onMounted, onBeforeMount} from 'vue';

export default {
  name: "attributeAuth",
  setup(props, { emit }) {
    const selectedAttributes = ref([]);
    const selectedOptions = ref([]);

    const newOptionText = ref(''); // Для хранения текста ввода новой опции
    const newOptions = ref([]);    // Для хранения новых опций

    const authorization = ref('');

    const authOption = ref([
      { id: 1, label: 'Галерея', param: false },
      { id: 2, label: 'Расширенный набор параметров', param: false },
    ]);

    const selectedOption = ref({});
    const searchText = ref('');
    const isDropdownOpen = ref(false);

    const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };

    const filteredOptions = computed(() => {
      const existingOptions = authOption.value.filter(option =>
          option.label.toLowerCase().startsWith(searchText.value.toLowerCase())
      );
      return [...existingOptions, ...newOptions.value];
    });

    const selectOption = option => {
      if (!isSelected(option)) {
        selectedOption.value = option;
        searchText.value = '';
        isDropdownOpen.value = false;
        authorization.value = option.label;
        selectedAttributes.value.push(option);

        selectedOptions.value.push(option);
        emit('optionSelected', selectedOptions.value);
      }
    };

    const removeAttribute = selectedAttr => {
      const index = selectedAttributes.value.indexOf(selectedAttr);
      if (index !== -1) {
        selectedAttributes.value.splice(index, 1);

        const selectedOptionIndex = selectedOptions.value.findIndex(item => item.id === selectedAttr.id);
        if (selectedOptionIndex !== -1) {
          selectedOptions.value.splice(selectedOptionIndex, 1);
        }
      }
    };

    const isSelected = option => {
      return selectedAttributes.value.some(item => item.id === option.id);
    };

    const addNewOption = () => {
      if (newOptionText.value) {
        const newOption = {
          id: authOption.value.length + 1, // Генерируйте уникальный id для новой опции
          label: newOptionText.value,
          param: false,
        };
        authOption.value.push(Object.assign({}, newOption)); // Создаем копию объекта
        newOptionText.value = ''; // Очистите текст ввода после добавления
      }
    };

    return {
      authorization,
      selectOption,
      selectedOption,
      filteredOptions,
      toggleDropdown,
      isDropdownOpen,
      selectedAttributes,
      removeAttribute,
      isSelected,
      selectedOptions,
      addNewOption,
      newOptionText,
      newOptions
    }
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
.custom-select-add-new-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
}
</style>