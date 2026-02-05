<template>
    <UDropdownMenu :items="items" class="mt-2" size="lg">
        <UButton icon="i-lucide-user" color="neutral" variant="ghost" class="w-[90%] justify-center">Mon compte</UButton>
    </UDropdownMenu>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items = ref<DropdownMenuItem[]>([
    [
        {
            label: 'Mes informations',
            icon: 'i-lucide-user'
        },
        {
            label: 'Parametres',
            icon: 'i-lucide-cog',
        },
    ],
    [
        {
            label: 'Se deconnecter',
            icon: 'i-lucide-log-out',
            color: 'error',
            kbds: ['shift', 'meta', 'q']
        }
    ]
])
</script>