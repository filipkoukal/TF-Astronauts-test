<template>


<div class="p-10 space-y-5 flex justify-center" v-if="astronauts.length != 0">
  <div class="grid justify-items-end flex flex-col">
    <CreateButton class="pb-2 "/>
    <div class="flex  flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="border rounded-lg overflow-hidden dark:border-gray-700">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">First name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Last name</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date of birth</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Superpower</th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"></th>

                  </tr>
                </thead>

                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <AstronautRow @click="toggleModal(astronaut)" v-bind:astronaut="astronaut" v-for="astronaut in astronauts" :key="astronaut.id"/>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="p-10 space-y-5 flex justify-center text-center" v-else>
  <div class="flex flex-col  space-y-5 " >
    <p class="font-bold">
      There are no astronauts in the database!
    </p>
    <p>
      You can start by creating a new astronaut. Press the button below to create a new astronaut!
    </p>
    <CreateButton class="pb-2 "/>
    <!-- TODO: button -->
  </div>
</div>

<!-- TODO: pagination -->
        <!-- pagination
        <div class="py-1 px-4">
          <nav class="flex items-center space-x-2">
            <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
              <span aria-hidden="true">«</span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="w-10 h-10 bg-blue-500 text-white p-4 inline-flex items-center text-sm font-medium rounded-full" href="#" aria-current="page">1</a>
            <a class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">2</a>
            <a class="w-10 h-10 text-gray-400 hover:text-blue-600 p-4 inline-flex items-center text-sm font-medium rounded-full" href="#">3</a>
            <a class="text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 font-medium rounded-md" href="#">
              <span class="sr-only">Next</span>
              <span aria-hidden="true">»</span>
            </a>
          </nav>
        </div>
      -->


<AstronautModal ref="astroModal" @refreshList="refreshList"/>

</template>







<script>
import * as api from "../../constants/api";
import AstronautRow from "./astronautRow.vue"
import AstronautModal from "./astronautModal.vue"
import CreateButton from "./createAstronautButton.vue"

export default {
    name: "ShowAstronauts",
    components: {
      AstronautRow,
      AstronautModal,
      CreateButton
    },
    data(){
      return{
        astronauts: [],
      }
    },
    methods:{
      toggleModal(astronaut){
        this.$refs.astroModal.onToggle(astronaut);
      },
      refreshList(){
        this.axios.get(api.GET_ASTRONAUTS).then((response) => {
            let new_astronauts = response.data
            let new_ids = new_astronauts.map(new_astro=>new_astro.id)
            let old_ids = this.astronauts.map(old_astro=>old_astro.id)
            let ids_to_del = old_ids.filter(n => !new_ids.includes(n))


            const recursiveFindIndex = (data, id) =>
                data.reduce((indexes, item, index) => {
                    let subIndex;
                    Array.isArray(item) && (subIndex = recursiveFindIndex(item, id));
                    if (subIndex && subIndex.length) {
                        return indexes.concat([index], subIndex);
                    }
                    item.id === id && (indexes.push(index));

                return indexes;
            }, []);

            ids_to_del.forEach(id => {
              let index = recursiveFindIndex(this.astronauts, id)
              this.astronauts.splice(index, 1);
            });
            })
      

      }
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