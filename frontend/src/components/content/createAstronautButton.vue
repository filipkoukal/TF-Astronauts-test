<template>
  <div>
    <button
      @click="createAstronaut"
      class="transition duration-300 ease-out hover:ease-in mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
    >
      <div class="flex">
        <i class="pi pi-plus pr-2"></i>
        <div>Add New Astronaut</div>
      </div>
    </button>
  </div>
</template>

<script>
// Component defining the create astronaut button
export default {
  name: "CreateButton",

  methods: {},
  computed: {}
};
</script>

<style scoped lang="less"></style>
