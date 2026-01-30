import { defineStore } from "pinia"

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    conneted: false,
  }),
  actions: {
    login(){
        this.conneted = true
    },

    logout(){
        this.conneted = false
    }
  },
})