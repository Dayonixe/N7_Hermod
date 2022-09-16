<template>
  <div class="main-component">
    <div class="form">

      <label class="title">City:</label>
      <input type="text" v-model="city" @keyup.enter="searchWeather(city);this.search=city;this.city=''"/>
      <a class="searchButton" @click="searchWeather(ville);this.search=city;this.city='';">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <div v-if="weatherData" class="currentWeather">
      <div v-if="weatherData.err">Oops ! 404 city "{{ search }}" not found ! 😭</div>
      <div v-else>
      <div class="current">
        <p class="title">{{ weatherData.city }}</p>
        <table>
          <tr>
            <td>
              <p>{{ convertDate(weatherData.current.dt) }}</p>
            </td>
            <td>
              <img class="iconCurr" :src=getURL(weatherData.current.weather[0].icon)>
            </td>
            <td>
              <div class="tempCurr">
                <p>{{ roundDecimal(weatherData.current.temp) }}°C </p>
                <br>
                <p><small>{{ roundDecimal(weatherData.daily[0].temp.min) }}°C / {{ roundDecimal(weatherData.daily[0].temp.max) }}°C</small></p>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="forecast">
        <div v-for="day in nbDays" class="forecastInfo" :class="{forecast1: day === 1, forecast2: day === 2, forecast3: day === 3}">
          <table>
            <tr>
              <td>
                <p>{{ convertDate(weatherData.daily[day].dt) }}</p>
                <p><small>{{ roundDecimal(weatherData.daily[day].temp.min) }}°C / {{ roundDecimal(weatherData.daily[day].temp.max) }}°C</small></p>
              </td>
              <td>
                <img class="iconForecast" :src=getURL(weatherData.daily[day].weather[0].icon)>
              </td>
            </tr>
          </table>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import { useWeather } from "@/use/useWeather"
import dateFormat from 'dateformat'

/**
* Convert Unix Time Stamp to UTC time
* @param {integer} value The Unix Time Stamp
*/
const convertDate = (value) => {
  var date = dateFormat(new Date(value * 1000), 'DDDD')
  return date.toString()
}

/**
* Create URL to retrieve image resource
* @param {string} value The name of the picture
*/
const getURL = (value) => {
  var url = require.context('../assets/iconWeather/', false, /\.svg$/)
  return url('./' + value + '.svg')
}

const roundDecimal = (nombre) => {
    var precision = 1;
    var tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}

export default {
  name: 'Weather',
  props: {
    msg: String
  },
  setup() {
    const { weatherData, searchWeather } = useWeather()
    const city = ref('')
    const search = ''
    const nbDays = [1,2,3]

    return {
      weatherData, searchWeather, nbDays, city, search
    }
  },
  methods: {
    convertDate,
    getURL,
    roundDecimal
  }
}
</script>

<style scoped>
.main-component {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

p, span {
  font-family: 'Roboto', sans-serif;
  color: aliceblue;
  margin: 0;
}

table {
  width: 100%;
}
td {
  width: 33%;
}



/* ******************************* *
 *             HEADER              *
 * ******************************* */
.form {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #497878;
}

.form label {
  font-family: 'Roboto', sans-serif;
  font-size: 23px;
  color: aliceblue;
}

.form input {
  border: none;
  border-radius: 5px;
  width: 35%;
}

.searchButton {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #C79820;
  color: white;
  padding: 8px;
  font-size: 150%;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
}
.searchButton:hover {
  background-color: #DC9D11;
}
.searchButton:active {
  background-color: #F0A202;
}



/* ******************************* *
 *         CURRENT WEATHER         *
 * ******************************* */
.title{
  color: aliceblue;
  font-size: clamp(30px, 6vw, 50px);
}

.current {
  padding: 15px;
  background-color: #508484;
}

.current table p {
  font-size: clamp(25px, 5vw, 35px);
}

.current p small {
  font-size: 50%;
  max-font-size: 18px;
}

.iconCurr {
  width: 85%;
}



/* ******************************* *
 *         FORECAST WEATHER        *
 * ******************************* */
.forecastInfo {
  padding: 15px;
}

.forecast1 {
  background-color: #50787A;
}
.forecast2 {
  background-color: #506F72;
}
.forecast3 {
  background-color: #4F666A;
}

.forecast table p {
  font-size: clamp(20px, 3vw, 25px);
}

.forecast p small {
  font-size: 50%;
  max-font-size: 18px;
}

.iconForecast {
  width: 28%;
}

/* ******************************* *
 *         SVG ANIMATIONS          *
 * ******************************* */

.rayon {
  stroke-dasharray: 100;
  animation: dash 5s linear;
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>