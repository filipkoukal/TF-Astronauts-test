<template>
    <div class="hello"> This is the footer</div>
   
  

  </template>
  
  <script>
  //import * as appView from "../constants/appView";
  //import * as api from "../constants/api";
  
  export default {
    name: "Footer",
    data(){
      return{
      }
    },
    methods:{
  
    },
    computed: {
  
    },
  };
  </script>
  
  <style scoped lang="less">
  .hello {
    position: fixed;
    left: 0;
  bottom: 0;
    z-index: 100;
    //background-color: #276678;
    height: 50px;
    width: 100%;
  }

  </style>
  