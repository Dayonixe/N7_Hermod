<template>
  <nav class="navbar">
    <a href="#" @click="toggleLogin()" v-if="!getUser.data"><i class="fas fa-user"></i></a>
    <a href="#" @click="logout()" v-else><i class="fas fa-sign-out-alt"></i></a>
  </nav>


  <div class="card-login" v-if="getUser.data==null">
    <div class="card-header">
      <label>Login</label>
    </div>

    <div class="card-body">
      <div class="alert" v-if="getUser.error">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <label>Wrong password or login.</label>
      </div>

      <input type="email" placeholder="Email" v-model="email" class="input"/>
      <input type="password" placeholder="Password" v-model="password" class="input" @keyup.enter="submit({email, password})"/>
      <button @click="submit({email, password})" class="button-login" >Login</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: "NavBar",
  props: ['getUser'],
  setup() {
    let email = ref('');
    let password = ref('');

    return {
      email, password
    }
  },
  emits: {
    login: null,
    logout: null,
  },
  methods: {
    toggleMenu: function () {
      let sidebar = document.querySelector('.sidebar');
      let toggle = document.querySelector('.toggle');
      sidebar.classList.toggle('active');
      toggle.classList.toggle('active');
    },
    toggleLogin: () => {
      let loginForm = document.querySelector('.card-login')
      loginForm.classList.toggle('login-active')
    },
    submit: function ({email, password}) {
      this.$emit('login', {email, password})
    },
    logout: function() {
      console.log('OUI BONJOUR')
      this.$emit('logout')
    }
  }
}
</script>

<style scoped>
/* ******************************* *
 *             NAVBAR              *
 * ******************************* */
.navbar {
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #4A4238;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 99;
}

.navbar a {
  position: relative;
  display: block;
  float: right;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: white;
  font-size: 24px;
}
.navbar a:hover {
  background-color: #51483E;
}



/* ******************************* *
 *            LOGIN MENU           *
 * ******************************* */
.card-login{
  z-index: 10;
  position: absolute;
  width: 18rem;
  top: 70px;
  right: 10px;

  transition: opacity 0.25s ease-out;
  opacity: 0;
  overflow: hidden;

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  background-color: #F7F7F7;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}

.login-active {
  opacity: 1;
  height: auto;
}


.card-header {
  background-color: #F7F7F7;
  padding: 10px;
  font-weight: bold;
  font-size: 22px;
}
.card-body {
  background-color: #FFFFFF;
  padding: 10px;
}

input {
  width: 80%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #45A049;
}

.alert {
  padding: 10px;
  background-color: #f44336;
  color: white;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>