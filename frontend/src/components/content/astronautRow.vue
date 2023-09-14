<template>
    <tr class="hover:bg-gray-100 group cursor-pointer">
        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{astronaut.first_name}}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ astronaut.last_name }}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{astronaut.date_of_birth}}</td>
        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{astronaut.superpower}}</td>
        <td class="px-2 py-4 "><div class="opacity-0 group-hover:opacity-100"><i class="pi pi-arrow-right"></i></div></td>
    </tr>
</template>

<script>
export default {
    name: "AstronautRow",
    props: ['astronaut'],

    methods:{

    },
    computed: {

    },
};

</script>

<style scoped lang="less">

</style>