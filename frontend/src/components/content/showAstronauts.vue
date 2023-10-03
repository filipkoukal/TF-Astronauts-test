<template>
  <div
    class="p-10 space-y-5 flex justify-center "
    v-if="astronauts.length != 0"
  >
    <div class="grid justify-items-end flex flex-col ">
      <CreateButton @click="toggleCreateAstroModal()" class="pb-2 " />
      <div class="flex flex-col">
        <div class="-m-1.5 overflow-x-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="border rounded-lg overflow-hidden dark:border-gray-700">
              <table
                class="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
              >
                <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      @click="sortAstronauts('first_name')"
                      scope="col"
                      :class="{
                        'text-gray-800 font-medium':
                          sort_helper['first_name'] != 'inactive',
                        'text-gray-500': sort_helper['first_name'] == 'inactive'
                      }"
                      class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer transition duration-100 ease-out hover:text-gray-800"
                    >
                      First name
                      <i
                        :class="{
                          'pi-angle-down':
                            sort_helper['first_name'] == 'desc' ||
                            sort_helper['first_name'] == 'inactive',
                          'pi-angle-up': sort_helper['first_name'] == 'asc'
                        }"
                        class="group-hover:opacity-100 opacity-0 pi transition duration-100 ease-out relative top-0.5"
                      ></i>
                    </th>
                    <th
                      @click="sortAstronauts('last_name')"
                      scope="col"
                      :class="{
                        'text-gray-800 font-medium':
                          sort_helper['last_name'] != 'inactive',
                        'text-gray-500': sort_helper['last_name'] == 'inactive'
                      }"
                      class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer transition duration-100 ease-out hover:text-gray-800"
                    >
                      Last name
                      <i
                        :class="{
                          'pi-angle-down':
                            sort_helper['last_name'] == 'desc' ||
                            sort_helper['last_name'] == 'inactive',
                          'pi-angle-up': sort_helper['last_name'] == 'asc'
                        }"
                        class="group-hover:opacity-100 opacity-0 pi transition duration-100 ease-out relative top-0.5"
                      ></i>
                    </th>
                    <th
                      @click="sortAstronauts('date_of_birth')"
                      scope="col"
                      :class="{
                        'text-gray-800 font-medium':
                          sort_helper['date_of_birth'] != 'inactive',
                        'text-gray-500':
                          sort_helper['date_of_birth'] == 'inactive'
                      }"
                      class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer transition duration-100 ease-out hover:text-gray-800"
                    >
                      Date of birth
                      <i
                        :class="{
                          'pi-angle-down':
                            sort_helper['date_of_birth'] == 'desc' ||
                            sort_helper['date_of_birth'] == 'inactive',
                          'pi-angle-up': sort_helper['date_of_birth'] == 'asc'
                        }"
                        class="group-hover:opacity-100 opacity-0 pi transition duration-100 ease-out relative top-0.5"
                      ></i>
                    </th>
                    <th
                      @click="sortAstronauts('updatedAt')"
                      scope="col"
                      :class="{
                        'text-gray-800 font-medium':
                          sort_helper['updatedAt'] != 'inactive',
                        'text-gray-500': sort_helper['updatedAt'] == 'inactive'
                      }"
                      class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer transition duration-100 ease-out hover:text-gray-800"
                    >
                      Last updated
                      <i
                        :class="{
                          'pi-angle-down':
                            sort_helper['updatedAt'] == 'desc' ||
                            sort_helper['updatedAt'] == 'inactive',
                          'pi-angle-up': sort_helper['updatedAt'] == 'asc'
                        }"
                        class="group-hover:opacity-100 opacity-0 pi transition duration-100 ease-out relative top-0.5"
                      ></i>
                    </th>
                    <th
                      @click="sortAstronauts('superpower')"
                      scope="col"
                      :class="{
                        'text-gray-800 font-medium':
                          sort_helper['superpower'] != 'inactive',
                        'text-gray-500': sort_helper['superpower'] == 'inactive'
                      }"
                      class="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase cursor-pointer transition duration-100 ease-out hover:text-gray-800"
                    >
                      Superpower
                      <i
                        :class="{
                          'pi-angle-down':
                            sort_helper['superpower'] == 'desc' ||
                            sort_helper['superpower'] == 'inactive',
                          'pi-angle-up': sort_helper['superpower'] == 'asc'
                        }"
                        class="group-hover:opacity-100 opacity-0 pi transition duration-100 ease-out relative top-0.5"
                      ></i>
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    ></th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <AstronautRow
                    @click="toggleModal(astronaut)"
                    v-bind:astronaut="astronaut"
                    v-for="astronaut in astronauts"
                    :key="astronaut.id"
                    :class="{
                      hidden: astro_id_to_page[astronaut.id] != active_page
                    }"
                  />
                </tbody>
              </table>
            </div>

            <!-- pagination -->
            <div class="py-1 px-4 w-full grid justify-items-center	">
              <nav class="flex items-center space-x-2">
                <a
                  @click="pageBackward"
                  class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md transition duration-300 ease-out hover:ease-in"
                  href="#"
                >
                  <span aria-hidden="true">«</span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  v-for="n in parseInt(num_pages)"
                  @click="changePage(n)"
                  :key="n"
                  :class="{
                    'bg-blue-500 text-white': n - 1 == active_page,
                    'text-gray-400 hover:text-blue-600': n - 1 != active_page
                  }"
                  class="w-10 h-10 p-4 inline-flex items-center text-sm font-medium rounded-full transition duration-300 ease-out hover:ease-in "
                  href="#"
                  >{{ n }}</a
                >
                <a
                  @click="pageForward"
                  class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md transition duration-300 ease-out hover:ease-in"
                  href="#"
                >
                  <span class="sr-only">Next</span>
                  <span aria-hidden="true">»</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-10 space-y-5 flex justify-center text-center" v-else>
    <div class="flex flex-col  space-y-5 ">
      <p class="font-bold">
        There are no astronauts in the database!
      </p>
      <p>
        You can start by creating a new astronaut. Press the button below to
        create a new astronaut!
      </p>
      <CreateButton @click="toggleCreateAstroModal()" class="pb-2 " />
    </div>
  </div>

  <AstronautModal
    ref="astroModal"
    @refreshList="refreshList"
    @refreshSort="refreshSort"
    @errorToast="errorToast"
  />
  <CreateAstronautModal
    ref="createAstroModal"
    @refreshList="refreshList"
    @errorToast="errorToast"
  />
  <Toasts ref="toasts" />
</template>

<script>
// Main component for showing list of astronauts
import * as api from "../../constants/api";
import AstronautRow from "./astronautRow.vue";
import AstronautModal from "./astronautModal.vue";
import CreateButton from "./createAstronautButton.vue";
import CreateAstronautModal from "./createAstronautModal.vue";
import Toasts from "./toasts.vue";
import {
  recursiveFindIndex,
  recursiveFindItem
} from "../../helpers/generalHelper.js";

export default {
  name: "ShowAstronauts",
  components: {
    AstronautRow,
    AstronautModal,
    CreateButton,
    CreateAstronautModal,
    Toasts
  },
  data() {
    return {
      astronauts: [],
      max_rows: 4,
      astro_id_to_page: {},
      active_page: 0,
      num_pages: 0,
      sort_helper: {
        first_name: "inactive",
        last_name: "inactive",
        date_of_birth: "inactive",
        superpower: "inactive",
        updatedAt: "inactive"
      },
      current_sort: {
        col: "",
        type: ""
      }
    };
  },
  methods: {
    toggleModal(astronaut) {
      this.$refs.astroModal.onToggle(astronaut);
    },
    toggleCreateAstroModal() {
      this.$refs.createAstroModal.onToggle();
    },
    refreshList(toast_type) {
      this.axios
        .get(api.GET_ASTRONAUTS)
        .then(response => {
          let new_astronauts = response.data;
          let new_ids = new_astronauts.map(new_astro => new_astro.id);
          let old_ids = this.astronauts.map(old_astro => old_astro.id);
          let ids_to_del = old_ids.filter(n => !new_ids.includes(n));
          let ids_to_add = new_ids.filter(n => !old_ids.includes(n));

          // delete removed astros from list
          ids_to_del.forEach(id => {
            let index = recursiveFindIndex(this.astronauts, id);
            this.astronauts.splice(index, 1);
          });

          // add new astros to list
          ids_to_add.forEach(id => {
            let new_astro = recursiveFindItem(new_astronauts, id);
            this.astronauts.push(new_astro[0]);
          });

          this.refreshSort(toast_type);
          // check if last page is empty
          if (this.active_page == this.num_pages && this.num_pages > 0) {
            this.active_page = this.num_pages - 1;
          }
        })
        .catch(() => {
          this.errorToast();
        });
    },
    assignAstrosToPages() {
      let astro_ids = this.astronauts.map(astro => astro.id);
      this.num_pages = Math.ceil(astro_ids.length / this.max_rows);
      for (let i = 0; i < this.num_pages; i++) {
        for (let j = 0; j < this.max_rows; j++) {
          this.astro_id_to_page[astro_ids.shift()] = i;
        }
      }
    },
    changePage(n) {
      this.active_page = n - 1;
    },
    pageForward() {
      if (this.active_page < this.num_pages - 1) {
        this.active_page++;
      }
    },
    pageBackward() {
      if (this.active_page > 0) {
        this.active_page--;
      }
    },
    sortAstronauts(key) {
      let method = "desc";
      if (this.sort_helper[key] == "desc") {
        method = "asc";
      }
      if (key == "updatedAt") {
        this.astronauts.sort((a, b) => {
          return new Date(a[key]) - new Date(b[key]);
        });
      } else {
        this.astronauts.sort((a, b) => {
          return a[key].localeCompare(b[key]);
        });
      }

      if (method == "desc") {
        this.astronauts.reverse();
      }
      this.sort_helper.first_name = "inactive";
      this.sort_helper.last_name = "inactive";
      this.sort_helper.superpower = "inactive";
      this.sort_helper.updatedAt = "inactive";
      this.sort_helper.date_of_birth = "inactive";
      this.sort_helper[key] = method;
      this.current_sort.col = key;
      this.current_sort.type = method;
      this.assignAstrosToPages();
    },
    refreshSort(toast_type) {
      if (this.current_sort.col == "updatedAt") {
        this.astronauts.sort((a, b) => {
          return (
            new Date(a[this.current_sort.col]) -
            new Date(b[this.current_sort.col])
          );
        });
      } else {
        this.astronauts.sort((a, b) => {
          return a[this.current_sort.col].localeCompare(
            b[this.current_sort.col]
          );
        });
      }
      if (this.current_sort.type == "desc") {
        this.astronauts.reverse();
      }
      this.assignAstrosToPages();
      // fire toast if toast_type not empty
      if (toast_type) {
        this.fireToast(toast_type);
      }
    },
    fireToast(type) {
      this.$refs.toasts.fireToast(type);
    },
    errorToast() {
      this.fireToast("error");
    }
  },

  computed: {},
  beforeMount() {
    this.axios
      .get(api.GET_ASTRONAUTS)
      .then(response => {
        this.astronauts = response.data;
        this.sortAstronauts("updatedAt");
      })
      .catch(() => {
        this.errorToast();
      });
  }
};
</script>

<style scoped lang="less"></style>
