import { reactive, computed } from "vue"

import app from "@/feather-client"

const weather = reactive({
   weatherReady: false,
   data: {}
})

const searchWeather = (text) => {
   app.service('weather').get({ text }).then(rep => {
      weather.data = rep;
      weather.data.city = text;
      weather.weatherReady = true;
   });
}

app.on('logout', () => {
   console.log('weather, logout')
   weather.weatherReady = false
   weather.data = {}
})

const weatherData = computed(() => {
   if(!weather.weatherReady){
      return null
   }
   return weather.data
})

export function useWeather() {
   return {
      weatherData, searchWeather
   }
}
