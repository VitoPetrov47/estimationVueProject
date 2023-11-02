<template>
  <div class="side-header-main sidebar-custom-main" :class="{'sidebar-custom-main-open': isSidebarOpen}">
    <div class="side-header-wrapper">
      <button class="side-burger-btn" @click="toggleSidebar">
        <svg fill="none"
             height="24"
             width="24"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"

        >
          <g clip-path="url(#clip0_105_1724)">
            <path d="M3 6.00098H21M3 12.001H21M3 18.001H21" stroke="#292929" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </g>
          <defs>
            <clipPath id="clip0_105_1724"><rect fill="white" height="24" transform="translate(0 0.000976562)" width="24"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div class="sidebar-main-style-top">
        <nav class="sidebar-nav-main sidebar-main-style-left">
          <router-link class="side-nav-link"
                       :class="{'side-nav-link side-drop-down-main': isHomeRoute}"
                       to="/">Home</router-link>
          <div class="side-nav-create-est-content">
            <router-link to="/createEst/infoClient" id="dropDownList" class="side-nav-link" :class="{'side-nav-link side-drop-down-main': $route.path.includes('/createEst')}">
              Create an Estimation
              <svg id="arrowDropdown"
                   style="margin-left: 10px"
                   width="12" height="7"
                   viewBox="0 0 12 7"
                   fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4225 0.244078C11.0971 -0.0813593 10.5695
            -0.0813593 10.244 0.244078L5.83329 4.65482L1.42255 0.244077C1.09711 -0.0813602 0.569472 -0.0813602
            0.244036 0.244077C-0.0814019 0.569514 -0.0814019 1.09715 0.244036 1.42259L5.24404 6.42259C5.56947
            6.74803 6.09711 6.74803 6.42255 6.42259L11.4225 1.42259C11.748 1.09715 11.748 0.569515 11.4225 0.244078Z" fill="#131C47"/>
              </svg>
            </router-link>
            <div class="side-drop-down-menu-content-list" v-if="$route.path.includes('/createEst')">
              <router-link
                  v-for="link in links"
                  :key="link.url"
                  active-class="active"
                  :to="link.url"
                  class="side-nav-info-link"
              >{{link.title}}</router-link>
            </div>
          </div>
          <router-link class="side-nav-link" :class="{'side-nav-link side-drop-down-main': $route.path.includes('/estList')}" to="/estList">Estimation lists</router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  computed: {
    isHomeRoute() {
      return this.$route.path === '/';
    }
  },
  data: () => ({
    isSidebarOpen: false,
    links: [
      {title: 'Client\'s Info', url: '/createEst/infoClient'},
      {title: 'Project Params', url: '/createEst/infoProjectParams'},
      {title: 'Info Attributes', url: '/createEst/infoAttributes'},
      {title: 'Info Constructor', url: '/createEst/infoConstructor'},
      {title: 'Review', url: '/createEst/infoReview'},
    ]
  }),
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
.side-nav-create-est-content {

}
.side-header-main {
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.06), 0px 3px 24px rgba(0, 0, 0, 0.07);
  width: 300px;
  padding: 100px 0 0;
}
.side-drop-down-main {
  display: flex;
  justify-content: left;
  align-items: center;

  cursor: pointer;
  border: 0;
  border-radius: 6px;
  outline: none;
  background: var(--main-bg-color);
  font-size: 20px;
  font-weight: 500;

  transition: all .3s;
}
.side-drop-down-main svg {
  transform: rotate(0deg);
  transition: all .3s;
}
.side-drop-down-main:hover svg {
  transform: rotate(180deg);
}

.side-drop-down-menu-content-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
}
.side-drop-down-menu-content-list.open {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
}
.side-nav-link {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;

  font-size: 16px;
  font-weight: 400;
  margin-bottom: 5px;
  padding: 10px 12px;
  color: #000000;
  text-decoration: none;
}
.side-nav-info-link {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0 0 20px;
  color: #000000;
  text-decoration: none;

  border-bottom: 2px solid transparent;
  transition: all .2s;
}
.side-nav-info-link:hover {
  /*border-bottom: 2px solid var(--main-bg-hover-color);*/
  color: var(--main-bg-hover-color);
}
.side-nav-info-link.active {
  /*color: var(--main-bg-color)*/
  color: var(--main-bg-active-color);
}
/*SIDEBAR*/
.sidebar-custom-main {
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  background-color: white;

  transition: all .3s;
}
.sidebar-custom-main-open {
  left: -220px;
}
.side-header-wrapper {
  position: relative;
}
.side-burger-btn {
  position: absolute;
  right: -44px;
  top: 10px;
  border: 0;
  outline: none;
  background: var(--main-bg-color);
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  width: 44px;
  height: 42px;

  transition: all .3s;
}
.side-burger-btn:hover {
  background: var(--main-bg-hover-color);
  cursor: pointer;
}
.sidebar-main-style-between {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}
.sidebar-main-style-top {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
}
.sidebar-main-style-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sidebar-main-style-left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.sidebar-main-style-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
/*END SIDEBAR*/


</style>