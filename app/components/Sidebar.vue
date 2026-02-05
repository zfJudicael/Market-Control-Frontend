<template>
    <div class="sidebar w-[18%] h-screen bg-gray-200 p-4 flex flex-col">
        <div class="logo mb-8">
            <img :src="IMAGES.capitalEconomique" alt="Logo" class="w-[70%] mx-auto">
        </div>
        
        <div class="grow flex flex-col gap-1">
            <NavigationMenu icon="i-lucide-home" label="Accueil" :active="true"/>
            <NavigationMenu icon="i-lucide-store" label="Marchés" :active="false"/>
            <NavigationMenu icon="i-lucide-book-user" label="Marchands" :active="false"/>
            <NavigationMenu icon="i-lucide-book-open" label="Contrat" :active="false"/>
            <NavigationMenu icon="i-lucide-users" label="Percepteur" :active="false"/>
        </div>
    
        <div class="footer border-t-2 border-gray-400 flex justify-center">
            <UserMenu />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IMAGES } from '~/constants/assets';
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[][]>([
  [
    {
        label: 'Accueil',
        icon: 'i-lucide-home',
    },
    {
        label: 'Marchés',
        icon: 'i-lucide-home',
    },
    {
        label: 'Marchands',
        icon: 'i-lucide-home',
    },
    {
        label: 'Percepteur',
        icon: 'i-lucide-home',
    },
    {
        label: 'Contrats',
        icon: 'i-lucide-home',
    },
    {
      label: 'Guide',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Introduction',
          description: 'Fully styled and customizable components for Nuxt.',
          to: '/login',
          icon: 'i-lucide-house'
        },
        {
          label: 'Installation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },
      ]
    },
    ]
])
</script>