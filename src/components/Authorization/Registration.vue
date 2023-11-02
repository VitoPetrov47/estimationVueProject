<template>
  <div class="auth-bg-main">

    <form class="auth-form-main" @submit.prevent="submitHandler">
      <div class="auth-form-content">
        <span class="card-title">Registration</span>
        <div class="input-field">
          <label for="email">Name</label>
          <input
              id="name"
              type="text"
              class="validate input-style-custom"
              placeholder="Type Name"
              v-model.trim="name"
          >
        </div>
        <div class="input-field">
          <label for="email">Email</label>
          <input
              id="email"
              type="text"
              class="validate input-style-custom"
              placeholder="Type Email"
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
        <div class="input-field">
          <label for="password">Confirm Password</label>
          <input
              id="confrimPassword"
              type="password"
              class="validate input-style-custom"
              placeholder="Confirm Password"
              v-model.trim="confimPassword"
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
          Уже есть аккаунта?
          <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: "Registration",
  data: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  }),
  methods: {
    async submitHandler() {
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        await this.$store.dispatch('register', formData)
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