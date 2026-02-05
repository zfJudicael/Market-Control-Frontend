<template>
    <div class="flex flex-col items-center justify-center gap-4 p-4 h-screen">
        <div class="border-2 border-gray-200 rounded-lg p-5 w-[90%] md:w-md">
          <h2 class="text-center font-bold text-2xl my-2.5">Login</h2>
          
          <img :src="IMAGES.logoToamasina" alt="Capital économique" class="w-[30%] mx-auto">
          
          <UForm @submit="submit">
            <UFormField label="Email :" name="email" class="my-6">
              <UInput 
                v-model="state.email" 
                class="w-full"
                placeholder="Email..."
              />
            </UFormField>

            <UFormField label="Password :" name="password" class="my-6">
              <UInput
                v-model="state.password"
                placeholder="Password"
                :type="showPassword ? 'text' : 'password'"
                :ui="{ trailing: 'pe-1' }"
                class="w-full"
              >
                <template #trailing>
                  <UButton
                    color="neutral"
                    variant="link"
                    size="sm"
                    :icon="showPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                    :aria-label="showPassword ? 'Hide password' : 'Show password'"
                    :aria-pressed="showPassword"
                    aria-controls="password"
                    @click="showPassword = !showPassword"
                  />
                </template>
              </UInput>
            </UFormField>
          
            <UButton type="submit" class="w-full justify-center" :loading="loading" loading-icon="i-lucide-loader">Confirmer</UButton>
          </UForm>
          
        </div>
    </div>
</template>

<script setup lang="ts">
import { IMAGES } from '~/constants/assets';
const authStore = useAuthStore()

const state = reactive({
  email: '',
  password: ''
})

const showPassword = ref<boolean>(false)
const loading = ref<boolean>(false)
const submit = ()=>{
  loading.value = true
  setTimeout(async ()=>{
    if (authStore.conneted) {
      authStore.logout()
    }else authStore.login()
    
    loading.value = false   
    navigateTo('/home')
  }, 3000)
}
</script>