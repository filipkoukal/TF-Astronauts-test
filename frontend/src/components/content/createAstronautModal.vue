<template>
  <Transition name="fade">
    <div v-if="isModalVisible">
      <div
        @click="onToggle"
        class="absolute bg-black opacity-20 inset-0 z-0"
      ></div>
      <div
        class="w-full max-w-lg p-3 mx-auto my-auto rounded-xl shadow-lg bg-white fixed top-1/4 left-0 right-0 z-30"
      >
        <div>
          <!-- x button -->
          <div class="absolute top-5 right-5">
            <button
              @click="onToggle"
              type="button"
              class="transition duration-150 ease-out hover:ease-in text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
            >
              <i class="pi pi-times"></i>
            </button>
          </div>
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <h2 class="text-2xl font-bold py-4">Create New Astronaut</h2>

            <div class="flex flex-col ">
              <!-- first name -->
              <div class="flex-1 flex flex-row">
                <div
                  id="modal-first-name"
                  class="flex flex-col flex-1 px-6 py-3 text-left "
                >
                  <label class="text-xs font-medium text-gray-500 uppercase">
                    First name
                  </label>

                  <input
                    maxlength="20"
                    v-model="new_astronaut.first_name"
                    type="text"
                    :class="{ 'border-red-500': fillErrors.first_name }"
                    class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    v-if="fillErrors.first_name"
                    class="text-xs font-medium text-red-500 uppercase"
                    >Required field!</label
                  >
                </div>

                <!-- last name -->
                <div
                  id="modal-last-name"
                  class="flex flex-col flex-1 px-6 py-3 text-left "
                >
                  <label class="text-xs font-medium text-gray-500 uppercase">
                    Last name
                  </label>
                  <input
                    maxlength="20"
                    v-model="new_astronaut.last_name"
                    type="text"
                    :class="{ 'border-red-500': fillErrors.last_name }"
                    class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    v-if="fillErrors.last_name"
                    class="text-xs font-medium text-red-500 uppercase"
                    >Required field!</label
                  >
                </div>
              </div>

              <div class="flex-1  flex flex-row">
                <!-- dob -->
                <div
                  maxlength="20"
                  id="modal-first-name"
                  class="flex flex-col flex-1 px-6 py-3 text-left "
                >
                  <label class="text-xs font-medium text-gray-500 uppercase">
                    Date of Birth
                  </label>

                  <input
                    v-model="new_astronaut.date_of_birth"
                    type="date"
                    :class="{ 'border-red-500': fillErrors.date_of_birth }"
                    class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    v-if="fillErrors.date_of_birth"
                    class="text-xs font-medium text-red-500 uppercase"
                    >Required field!</label
                  >
                </div>

                <!-- superpower -->
                <div
                  maxlength="200"
                  id="modal-last-name"
                  class="flex flex-col flex-1 px-6 py-3 text-left "
                >
                  <label class="text-xs font-medium text-gray-500 uppercase">
                    Superpower
                  </label>
                  <input
                    v-model="new_astronaut.superpower"
                    type="text"
                    :class="{ 'border-red-500': fillErrors.superpower }"
                    class="p-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <label
                    v-if="fillErrors.superpower"
                    class="text-xs font-medium text-red-500 uppercase"
                    >Required field!</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="p-3 mt-2 text-right space-x-4 md:block">
            <button
              @click="confirmAdd"
              class="transition duration-150 ease-out hover:ease-in mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600"
            >
              Create
            </button>
            <button
              @click="onToggle"
              class="transition duration-150 ease-out hover:ease-in mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
// Component handling the create astronaut modal including backend communication
import * as api from "../../constants/api";

export default {
  name: "CreateAstronautModal",
  emits: ["refreshList", "errorToast"],
  data() {
    return {
      isOpen: false,
      new_astronaut: {
        first_name: "",
        last_name: "",
        date_of_birth: "",
        superpower: ""
      },
      fillErrors: {
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
    onToggle() {
      this.isOpen = !this.isOpen;
      this.resetErrors();
      this.new_astronaut.first_name = "";
      this.new_astronaut.last_name = "";
      this.new_astronaut.date_of_birth = "";
      this.new_astronaut.superpower = "";
    },
    checkValidity() {
      this.resetErrors();
      if (this.new_astronaut.first_name == "")
        this.fillErrors.first_name = true;
      if (this.new_astronaut.last_name == "") this.fillErrors.last_name = true;
      if (this.new_astronaut.date_of_birth == "")
        this.fillErrors.date_of_birth = true;
      if (this.new_astronaut.superpower == "")
        this.fillErrors.superpower = true;

      if (
        !this.fillErrors.first_name &&
        !this.fillErrors.last_name &&
        !this.fillErrors.date_of_birth &&
        !this.fillErrors.superpower
      ) {
        return true;
      } else {
        return false;
      }
    },
    resetErrors() {
      this.fillErrors.first_name = false;
      this.fillErrors.last_name = false;
      this.fillErrors.date_of_birth = false;
      this.fillErrors.superpower = false;
    },
    confirmAdd() {
      if (this.checkValidity()) {
        this.axios
          .post(api.CREATE_ASTRONAUT, {
            first_name: this.new_astronaut.first_name,
            last_name: this.new_astronaut.last_name,
            date_of_birth: this.new_astronaut.date_of_birth,
            superpower: this.new_astronaut.superpower
          })
          .then(() => {
            this.onToggle();
            this.$emit("refreshList", "create");
          })
          .catch(() => {
            this.$emit("errorToast");
          });
      }
    }
  }
};
</script>
<style scoped lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: 200ms ease-out;
}
</style>
