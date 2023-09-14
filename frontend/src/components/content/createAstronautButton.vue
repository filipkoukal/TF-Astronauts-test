<template>
    <div>
        <button @click="createAstronaut" class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-green-600">
            <div class="flex">
                <i class="pi pi-plus pr-2"></i>
                <div>Add New Astronaut</div>

            </div>
        </button>
    </div>

    <!-- TODO: add create astro modal -->
</template>

<script>
import * as api from "../../constants/api";

export default {
    name: "CreateButton",

    methods:{
        // TODO: make function work
        createAstronaut(){
            this.axios.post(api.CREATE_ASTRONAUT).then((response) => {
                this.astronauts = response.data
                })
        }
    },
    computed: {

    },
};
</script>

<style scoped lang="less">
</style>