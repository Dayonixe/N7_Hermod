import { reactive, computed } from "vue"

import app from "@/feather-client"

const cinema = reactive({
   cinemaReady: false,
   data: []
})

const searchCinema = (text) => {
   app.service('cinema').get({ text }).then(rep => {
      cinema.data = rep;
      cinema.cinemaReady = true;
   });
   return cinema.data
}

const cinemaData = computed(() => {
   if(!cinema.cinemaReady){
      return null
   }
   return cinema.data
})

export function useCinema() {
   return {
      cinemaData, searchCinema
   }
}
