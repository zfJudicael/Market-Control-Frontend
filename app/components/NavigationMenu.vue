<template>
    <div class="flex items-center gap-1 text-gray-600 cursor-pointer rounded p-1 hover:bg-gray-50 hover:text-gray-800 transition-colors" :class="{ active : active }">
        <UIcon :name="icon" class="size-5" />
        <label>{{ label }}</label>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    icon: string,
    label: string,
    active: boolean
}>()
</script>

<style scoped>
.active{
    color: black;
    background-color: white;
}
</style>