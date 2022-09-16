<template>
  <NavBar :getUser="getUser" @login="login($event.email, $event.password)" @logout="logout()"/>

  <div class="body-page">
    <div v-if="getUser.data">
      <SideBar />

      <div class="frame frame-login">
        <div class="component">
          <a class="addWidget" @click="isShow = !isShow"><i class="fas fa-plus-circle"></i></a>
          <div v-show="isShow">
            <ul class="list-element">
              <li v-for="(widget, index) in widgetList" :key="index" v-show="shouldShow(index)"><a @click="add(index); isShow = !isShow; widget.isAlreadyShown=true;" >{{widget.name}}</a></li>
            </ul>
          </div>
          <Card @click.middle="remove(component.id)" @click.right="remove(component.id)"
                v-for="(component, index) in widgets"
                :key="index"
                :user="getUser.data"
                :widget="widgetList[component.widget].content"
          />
        </div>
      </div>
    </div>

    <div class="logged-out frame" v-else>
      <SignUpForm @signUpSubmit="signUp($event.username, $event.mail, $event.password)"/>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Card from "./components/Card";
import Weather from './components/Weather.vue'
import SignUpForm from './components/SignUpForm.vue'
import { useAuth } from '@/use/useAuth'
import { useWidgets } from '@/use/useWidgets'
import Cinema from './components/Cinema.vue'
import TodoList from './components/ToDoList.vue'
import { availableWidgets } from './widgets'
import { registerRuntimeCompiler } from '@vue/runtime-core';

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    Card,
    Weather,
    TodoList,
    SignUpForm,
    Cinema
  },
  setup() {
    const { getUser, login, logout, signUp, tryLog } = useAuth();
    const { widgets, addWidget, deleteWidget } = useWidgets()
    const widgetList = availableWidgets();

    return {
      getUser, login, logout, signUp, widgets, addWidget, deleteWidget, widgetList
    }
  },
  data: function() {
    return {
      components: [],
      isShow: false
    }
  },
  methods: {
    add(component){
      this.addWidget(component, this.getUser.data.id)
    },
    remove(id){
      this.deleteWidget(id)
    },
    shouldShow(index){
      return this.widgets.find(element => element.widget === index) === undefined
    }
  },
  mounted() {
    document.querySelector('html').style.height = '100%'
    document.querySelector('body').style.margin = '0'
    document.querySelector('body').style.height = '100%'
    document.querySelector('#app').style.height = '100%'
  }
}
</script>

<style scoped>
/* ******************************* *
 *              PAGE               *
 * ******************************* */

body::-webkit-scrollbar{
  display:none;
}
body{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.body-page {
  min-height: 100%;
  background-image: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow-y: hidden;
}

.frame {
  padding-top: 60px;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.frame-login {
  padding-left: 60px;
}
@media only screen and (max-width: 767px) {
  .frame-login {
    padding-left: 0;
  }
}



/* ******************************* *
 *          WIDGET MANAGER         *
 * ******************************* */
.addWidget {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #7ac982;
  color: white;
  padding: 8px;
  font-size: 150%;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: inline-block;
  cursor: pointer;
  z-index: 99;
}
.addWidget:hover {
  background-color: #89D269;
}
.addWidget:active {
  background-color: #97DB4F;
}

.list-element {
	position: absolute;
  bottom: 80px;
  right: 30px;
  margin: 20px 0 0 0;
  padding: 10px 0;
  width: 160px;
  margin-left: calc((160px / 2));
  box-sizing: border-box;
  z-index: 100;
  background: white;
  border-radius: 6px;
  box-shadow: 2px 2px 5px black;
  list-style: none;
}

.list-element li {
  padding: 0;
  margin: 0;
}

.list-element li a, .list-element li a:visited {
  display: inline-block;
  padding: 10px 0.8rem;
  width: 100%;
  box-sizing: border-box;
  color: black;
  text-decoration: none;
}

.list-element li a:hover {
  background-color: dodgerblue;
  color: white;
	cursor: pointer;
}
</style>
