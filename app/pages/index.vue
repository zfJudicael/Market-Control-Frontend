<script setup lang="ts">
const authStore = useAuthStore()

if(authStore.conneted){
  navigateTo('/dashboard')
}else{
  navigateTo('/login')
}
</script>