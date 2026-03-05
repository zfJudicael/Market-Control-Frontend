<template>
    <div 
        class="flex items-center gap-1 text-gray-600 cursor-pointer rounded p-1 hover:bg-gray-50 hover:text-gray-800 transition-colors" 
        :class="{ active : isActiveRoute(to) }"
        @click="navigateTo({name : to})"
    >
        <UIcon :name="icon" class="size-5" />
        <label>{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    icon: string,
    label: string,
    to: string
}>()

const route = useRoute()
const isActiveRoute = (routeName: string)=>{
    return route.name === routeName
}

</script>

<style scoped>
.active{
    color: black;
    background-color: white;
    border-right: 5px solid black;
}
</style>