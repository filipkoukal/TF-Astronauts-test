<template>
  <div class="bg-white h-screen w-screen text-gray-500 m-0">
    <Header msg="Welcome to Your Vue.js App" />
    <component :is="getActiveViewComponent" />
    <!--<Footer />-->
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ShowAstronauts from "./components/content/showAstronauts.vue";

import * as appView from "./constants/appView";
//import * as api from "./constants/api";


export default {
  name: "App",
  components: {
    Header,
    Footer,
    ShowAstronauts
  },
  data:() => {
    return {
      timer: null
    }
  },
  methods:{

  },
  computed:{
    AppState(){
        //console.log(this.$store.getters.getAppState)
        return this.$store.getters.getAppState
    },
    getActiveViewComponent(){
        switch (this.AppState.activeView) {
          case appView.SHOW_ASTRONAUTS:
            return "ShowAstronauts";
          default:
            return "ShowAstronauts";
          }
      },
  },
  mounted() {
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #ffffff;
  input{
    color:#2c3e50
  }
}
.view {
  margin-left: 80px;
  top: 50px;
  position: absolute;
}
</style>
