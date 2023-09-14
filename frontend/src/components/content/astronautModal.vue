<template>
      <Transition name="fade">
        <div v-if="isModalVisible">
          <div @click="onToggle" class="absolute bg-black opacity-20 inset-0 z-0"></div>
            <div class="w-full max-w-lg p-3 mx-auto my-auto rounded-xl shadow-lg bg-white fixed top-1/4 left-0 right-0 z-30">
            <div>
                <!-- x button -->
                <div class="absolute top-5 right-5">
                    <button @click="onToggle" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                        <i class="pi pi-times"></i>
                    </button>
                </div>
              <div class="text-center p-3 flex-auto justify-center leading-6">
                <h2 class="text-2xl font-bold py-4">Astronaut Overview</h2>

                <!-- flexbox -->
                <div class="flex flex-col">
                    <!-- first name -->
                    <div class="flex-1 flex flex-row">
                        <div id="modal-first-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <p class="text-xs font-medium text-gray-500 uppercase">
                                First name
                            </p>
                            <p class="py-2 whitespace-nowrap text-m font-medium text-gray-800 ">
                                {{ astronaut.first_name }}
                            </p>
                        </div>

                        <!-- last name -->
                        <div id="modal-last-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <p class="text-xs font-medium text-gray-500 uppercase">
                                Last name
                            </p>
                            <p class="py-2 whitespace-nowrap text-m font-medium text-gray-800 ">
                                {{ astronaut.last_name }}
                            </p>
                        </div>
                    </div>

                    <div class="flex-1  flex flex-row">
                    <!-- dob -->
                        <div id="modal-first-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <p class="text-xs font-medium text-gray-500 uppercase">
                                Date of Birth
                            </p>
                            <p class="py-2 whitespace-nowrap text-m font-medium text-gray-800 ">
                                {{ astronaut.date_of_birth }}
                            </p>
                        </div>

                        <!-- superpower -->
                        <div id="modal-last-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <p class="text-xs font-medium text-gray-500 uppercase">
                                Superpower
                            </p>
                            <p class="py-2  text-m font-medium text-gray-800 ">
                                {{ astronaut.superpower }}
                            </p>
                        </div>
                    </div>

                </div>




              </div>
              <div class="p-3 mt-2 text-right space-x-4 md:block">
                <button class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                  Edit
                </button>
                <button @click="deleteAstro" class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
    </Transition>

  <DeleteAstronautModal ref="deleteAstroModal" @deletedAstronaut="deletedAstronaut"/>
</template>
  
<script>
import DeleteAstronautModal from "./deleteAstronautModal.vue"

  export default {
    name: "AstronautModal",
    emits: ["refreshList"],
    components: {
      DeleteAstronautModal
    },
    data() {
      return {
        isOpen: false,
        astronaut: []
      };
    },
  
    computed: {
      isModalVisible() {
        return this.isOpen;
      }
    },
  
    methods: {
      onToggle(astronaut) {
        this.isOpen = !this.isOpen;
        this.astronaut = astronaut
      },
      deleteAstro(){
        this.$refs.deleteAstroModal.onToggle(this.astronaut);
      },
      deletedAstronaut(){
        this.isOpen = !this.isOpen;
        this.$emit("refreshList")
      }
    }
  };
  </script>
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active  {
    transition: 200ms ease-out;
  }
  </style>
  