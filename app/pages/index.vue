<template>
    <div class="flex flex-col items-center justify-center gap-4 p-4">
        <UPageCard class="w-full max-w-md">
            <UAuthForm title="Login" :fields="fields" class="max-w-md" />
        </UPageCard>
    </div>
</template>

<script setup lang="ts">
import type { AuthFormField } from '@nuxt/ui'

definePageMeta({
    layout: 'dashboard'
})

const fields = ref<AuthFormField[]>([
  {
    name: 'email',
    type: 'text',
    label: 'Email'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password'
  }
])
</script>