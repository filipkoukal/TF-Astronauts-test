<template>
  <Transition name="delete-fade">
    <div v-if="isModalVisible">
      <div
        @click="onToggle"
        class="absolute bg-black opacity-70 inset-0 z-40"
      ></div>

      <div
        class="w-full max-w-md p-3 mx-auto my-auto rounded-xl shadow-lg bg-gray-800 fixed top-1-3 left-0 right-0 z-50 text-gray-200"
      >
        <div>
          <div class="text-center p-3 flex-auto justify-center leading-6">
            <h2 class="text-2xl font-bold py-4">
              Delete Astronaut {{ astronaut.first_name }}
              {{ astronaut.last_name }}
            </h2>

            <div class="flex flex-col">
              <p>
                Are you sure? This is an irreversible action!
              </p>
            </div>
          </div>
          <div class="p-3 mt-2 text-center space-x-4 md:block">
            <button
              @click="deleteAstronaut"
              class="transition duration-150 ease-out hover:ease-in mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-red-600"
            >
              Yes
            </button>
            <button
              @click="onToggle"
              class="transition duration-150 ease-out hover:ease-in mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
// Component handling the delete astronaut modal including backend communication
import * as api from "../../constants/api";

export default {
  name: "DeleteAstronautModal",
  emits: ["deletedAstronaut", "errorToast"],
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
      this.astronaut = astronaut;
    },

    deleteAstronaut() {
      this.axios
        .delete(api.DELETE_ASTRONAUT + this.astronaut.id)
        .then(() => {
          this.isOpen = !this.isOpen;
          this.$emit("deletedAstronaut");
        })
        .catch(() => {
          this.$emit("errorToast");
        });
    }
  }
};
</script>
<style scope lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.top-1-3 {
  top: 33.33%;
}

.delete-fade-enter-from,
.delete-fade-leave-to {
  opacity: 0;
}

.delete-fade-enter-active,
.delete-fade-leave-active {
  transition: 200ms ease-out;
}
</style>
