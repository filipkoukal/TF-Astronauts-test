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
                <div class="flex flex-col ">
                    <!-- first name -->
                    <div class="flex-1 flex flex-row">
                        <div id="modal-first-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <label class="text-xs font-medium text-gray-500 uppercase">
                                First name
                            </label>
                            <p class="py-2 whitespace-nowrap text-m font-medium text-gray-800 " v-if="!isEdit">
                                {{ astronaut.first_name }}
                            </p>
                            <input v-model="edited_astronaut.first_name" type="text"  :class="{'border-red-500':editFillErrors.first_name}"  class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else>
                            <label v-if="isEdit && editFillErrors.first_name" class="text-xs font-medium text-red-500 uppercase">Required field!</label>
                        </div>

                        <!-- last name -->
                        <div id="modal-last-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <label class="text-xs font-medium text-gray-500 uppercase">
                                Last name
                            </label>
                            <p class="py-2 whitespace-nowrap text-m font-medium text-gray-800 " v-if="!isEdit">
                                {{ astronaut.last_name }}
                            </p>
                            <input v-model="edited_astronaut.last_name" type="text" :class="{'border-red-500':editFillErrors.last_name}" class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else>
                            <label v-if="isEdit && editFillErrors.last_name" class="text-xs font-medium text-red-500 uppercase">Required field!</label>

                        </div>
                    </div>

                    <div class="flex-1  flex flex-row">
                    <!-- dob -->
                        <div id="modal-first-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <label class="text-xs font-medium text-gray-500 uppercase">
                                Date of Birth
                            </label>
                            <p class="py-2 whitespace-nowrap text-m font-medium text-gray-800 " v-if="!isEdit">
                                {{ astronaut.date_of_birth }}
                            </p>
                            <input v-model="edited_astronaut.date_of_birth" type="date" :class="{'border-red-500':editFillErrors.date_of_birth}" class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else>
                            <label v-if="isEdit && editFillErrors.date_of_birth" class="text-xs font-medium text-red-500 uppercase">Required field!</label>
                        </div>

                        <!-- superpower -->
                        <div id="modal-last-name" class="flex flex-col flex-1 px-6 py-3 text-left ">
                            <label class="text-xs font-medium text-gray-500 uppercase">
                                Superpower
                            </label>
                            <p class="py-2  text-m font-medium text-gray-800 " v-if="!isEdit"> 
                                {{ astronaut.superpower }}
                            </p>
                            <input v-model="edited_astronaut.superpower" type="text" :class="{'border-red-500':editFillErrors.superpower}" class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else>
                            <label v-if="isEdit && editFillErrors.superpower" class="text-xs font-medium text-red-500 uppercase">Required field!</label>

                        </div>
                    </div>

                </div>




              </div>
              <div class="p-3 mt-2 text-right space-x-4 md:block" v-if="!isEdit">
                  <button @click="editModeToggle" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                    Edit
                  </button>
                  <button @click="deleteAstro" class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600">
                    Delete
                  </button>
              </div>
              <div class="p-3 mt-2 text-right space-x-4 md:block" v-else>
                  <button @click="confirmEdit" class="mb-2 md:mb-0 bg-blue-500 border border-blue-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-blue-600">
                    Confirm
                  </button>
                  <button @click="editModeToggle" class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100">
                    Cancel
                  </button>
              </div>
            </div>
          </div>
        </div>
    </Transition>

  <DeleteAstronautModal ref="deleteAstroModal" @deletedAstronaut="deletedAstronaut"/>
</template>
  
<script>
import * as api from "../../constants/api";
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
        isEdit: false,
        astronaut: [],
        edited_astronaut: { 
          first_name : "",
          last_name : "",
          date_of_birth : "",
          superpower : ""
        },
        editFillErrors: {
          first_name: false,
          last_name: false,
          date_of_birth: false,
          superpower: false
        }
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
        this.isEdit = false
        this.astronaut = astronaut;

      },
      deleteAstro(){
        this.$refs.deleteAstroModal.onToggle(this.astronaut);
      },
      deletedAstronaut(){
        this.isOpen = !this.isOpen;
        this.$emit("refreshList")
      },
      editModeToggle(){
        this.resetErrors()
        this.isEdit = !this.isEdit
        this.edited_astronaut.first_name = this.astronaut.first_name;
        this.edited_astronaut.last_name = this.astronaut.last_name;
        this.edited_astronaut.date_of_birth = this.astronaut.date_of_birth;
        this.edited_astronaut.superpower = this.astronaut.superpower;
      },
      checkValidity(){
        this.resetErrors()
        if (this.edited_astronaut.first_name == "") this.editFillErrors.first_name = true
        if (this.edited_astronaut.last_name == "") this.editFillErrors.last_name = true
        if (this.edited_astronaut.date_of_birth == "") this.editFillErrors.date_of_birth = true
        if (this.edited_astronaut.superpower == "") this.editFillErrors.superpower = true
        
        if (
          !this.editFillErrors.first_name &&
          !this.editFillErrors.last_name &&
          !this.editFillErrors.date_of_birth &&
          !this.editFillErrors.superpower
        ) {
          return true
        } else {
          return false
        }
      },
      resetErrors(){
        this.editFillErrors.first_name = false
        this.editFillErrors.last_name = false
        this.editFillErrors.date_of_birth = false
        this.editFillErrors.superpower = false
      },
      confirmEdit(){
        if(this.checkValidity()){
          this.axios.put(api.EDIT_ASTRONAUT+this.astronaut.id, {
                      first_name: this.edited_astronaut.first_name,
                      last_name: this.edited_astronaut.last_name,
                      date_of_birth: this.edited_astronaut.date_of_birth,
                      superpower: this.edited_astronaut.superpower,
                  }).then(() => {
                      this.astronaut.first_name = this.edited_astronaut.first_name
                      this.astronaut.last_name = this.edited_astronaut.last_name
                      this.astronaut.date_of_birth = this.edited_astronaut.date_of_birth
                      this.astronaut.superpower = this.edited_astronaut.superpower
                      this.editModeToggle()
                  }) 
        }
      }
    },
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
  