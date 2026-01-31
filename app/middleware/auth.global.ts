import { useAuthStore } from "#imports"

export default defineNuxtRouteMiddleware((to, from) => {
  const publicPages = ['/', '/login']

  if (useAuthStore().conneted === false && !publicPages.includes(to.path)) {
    return navigateTo('/login')
  }
})