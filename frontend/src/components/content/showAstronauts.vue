<template>


<div class="p-10 space-y-5">
    <p class="greeting">{{ greeting }}</p>
    <div v-for="astronaut in astronauts" :key="astronaut.id">
        {{astronaut.first_name}}
    </div>
  </div>
  
</template>


<script>
import * as api from "../../constants/api";

export default {
    name: "ShowAstronauts",
    data(){
      return{
        astronauts: [],

        greeting: "This will be a table to show astronauts at some point",
      }
    },
    methods:{
    },
    computed: {

    },
    beforeMount(){
        this.axios.get(api.GET_ASTRONAUTS).then((response) => {
            this.astronauts = response.data
        })
    }
  };

</script>

<style scoped lang="less">

</style>