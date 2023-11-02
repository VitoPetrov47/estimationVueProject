<template>
  <Navbar/>
  <Sidebar/>
  <router-view class="main-content"></router-view>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar/Navbar";
import Sidebar from "@/components/Navigation/Sidebar/Sidebar";


export default {
  name: "main-layout",
  components: {
    Navbar, Sidebar
  }
}
</script>

<style scoped>
  .main-content {
    padding-top: 120px;
    padding-bottom: 30px;
  }
</style>