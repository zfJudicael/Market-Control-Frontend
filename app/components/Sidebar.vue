<template>
    <div class="sidebar w-[18%] h-screen bg-gray-200 p-4 flex flex-col">
        <div class="logo mb-8">
            <img :src="IMAGES.capitalEconomique" alt="Logo" class="w-[70%] mx-auto">
        </div>
        
        <div class="grow flex flex-col gap-1">
            <NavigationMenu icon="i-lucide-home" label="Accueil" to="index"/>
            <NavigationMenu icon="i-lucide-store" label="Marchés" to="market"/>
            <NavigationMenu icon="i-lucide-book-user" label="Marchands" to="merchant"/>
            <NavigationMenu icon="i-lucide-book-open" label="Contrat" to="contract"/>
            <NavigationMenu icon="i-lucide-users" label="Percepteur" to="collector"/>
            <NavigationMenu icon="i-lucide-ticket" label="Tickets" to="ticket"/>
        </div>
    
        <div class="footer border-t-2 border-gray-400 flex justify-center">
            <UserMenu />
        </div>
    </div>
</template>

<script setup lang="ts">
import { IMAGES } from '~/constants/assets';
</script>