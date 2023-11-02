<template>
  <div class="auth-bg-main">

    <form class="auth-form-main" @submit.prevent="submitHandler">
      <div class="auth-form-content">
        <span class="card-title">Log In</span>
        <div class="input-field">
          <label for="email">Email</label>
          <input
              id="email"
              type="text"
              class="validate input-style-custom"
              placeholder="Type email"
              v-model.trim="email"
          >
        </div>
        <div class="input-field">
          <label for="password">Password</label>
          <input
              id="password"
              type="password"
              class="validate input-style-custom"
              placeholder="Type Password"
              v-model.trim="password"
          >
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect waves-light auth-submit"
              type="submit"
          >
            Sing Up
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <router-link to="/registration">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: '',
    password: '',
  }),
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        console.log('formData1: ', formData);
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {
        console.log(e.message);
      }
    }
  }
}
</script>

<style scoped>
  .auth-bg-main {
    min-height: 100vh;
    background: #eeeeee;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .auth-form-main {
    background: white;
    border-radius: 10px;
    padding: 20px;
  }
  .auth-form-content {

  }
  .input-field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    padding-bottom: 20px;
  }
  .input-field label {
    padding: 0 0 10px;
  }
</style>