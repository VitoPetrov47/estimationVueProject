<template>
  <div class="card-content">
    <label class="card-text">Client's Balance</label>
    <div class="custom-select ">
      <input v-model="balanceInput" @input="handleInput" class="input-style-custom input-style-custom-select" placeholder="Type Balance">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "attributeBalance",
  setup(props, { emit }) {
    const balanceInput = ref('');

    const handleInput = () => {
      // console.log('Input changed:', balanceInput.value);
      emit('update:balance', balanceInput.value);
    };

    return {
      balanceInput,
      handleInput
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