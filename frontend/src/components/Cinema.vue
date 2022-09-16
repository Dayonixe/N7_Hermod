<template>
  <div class="main-component">
    <div v-if=cinemaData class="slideshow-container">
      <div v-for="item in cinemaData" :key="item">
        <div class="mySlides">
          <div class="column fade">
            <img :src=getURL(item[1].poster_path) alt="Poster">
          </div>
          <div class="column">
            <span class="title">{{item[1].title}}</span>
            <br>
            <span class="date">{{item[1].release_date}}</span>
            <br>
            <span class="date">{{item[1].overview.length > 225 ? item[1].overview.substring(0, 225)+"..." : item[1].overview}}</span>
          </div>
        </div>
      </div>
      <a class="prev" @click="plusSlides(-1)">&#10094;</a>
      <a class="next" @click="plusSlides(1)">&#10095;</a>
    </div>
    <div class="footer" v-if=cinemaData style="text-align:center">
      <span v-for="i in cinemaData.length" :key="i" class="dot" @click="currentSlide(i)"></span>
    </div>
  </div>
</template>

<script>
import { useCinema} from "@/use/useCinema"
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
  var url = "https://image.tmdb.org/t/p/w500/"+value
  return url
}


const substr = (value) => {
  var str = value.toString()
  return str.substr(0,str.length-1);
}

var slideIndex = 1;
//showSlides(1);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  if(slides.length>0) {
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
  
} 



export default {
  name: 'Cinema',
  props: {
    msg: String
  },
  setup() {
    const { cinemaData, searchCinema } = useCinema()

    searchCinema('Toulouse')

    return {
      cinemaData, searchCinema, slideIndex, plusSlides, currentSlide, showSlides
    }
  },
  updated() {
    showSlides(1);
  },
  methods: {
    convertDate,
    substr,
    getURL,
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

.column {
  float: left;
  width: 50%;
}
@media screen and (max-width: 1300px) {
  .column {
    width: 100%;
  }
}



/* ******************************* *
 *             HEADER              *
 * ******************************* */
.title {
  display: block;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: clamp(20px, 3vw, 30px);
  padding: 30px 10px 0 10px;
}

.date {
  display: block;
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 12px;
  padding: 0 10px;
}

@media screen and (max-width: 1300px) {
  .title {
    padding: 10px 10px 0 10px;
  }

  .date {
    padding: 0 10px 5px 10px;
  }
}



/* ******************************* *
 *              BODY               *
 * ******************************* */
.column img {
  width: 100%;
  float: left;
}

.slideshow-container {
  position: relative;
  z-index: 1;
}

.mySlides {
  display: none;
  overflow: auto;
  height: max-content;
  background-color: black;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 45%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
  left: 0;
  border-radius: 0 3px 3px 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.6);
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}



/* ******************************* *
 *             FOOTER              *
 * ******************************* */
.footer {
  background-color: black;
  text-align: center;
  padding: 7px 7px 3px 7px;
}

.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}
</style>