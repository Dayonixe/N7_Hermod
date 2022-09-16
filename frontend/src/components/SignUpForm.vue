<template>
  <div class="box">
    <div class="card">
      <div class="card-header">
        <label>Registration</label>
      </div>
      <div class="card-body">
        <input type="text" placeholder="Username" v-model="username"/>
        <input type="email" placeholder="Email" v-model="mail"/>
        <input type="password" placeholder="Password" v-model="password"/>
        <br>
        <button @click="submit(username, mail, password)">Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "SignUpForm",
  emits: ['signUpSubmit'],
  setup() {
    let username = ref('')
    let mail = ref('')
    let password = ref('')

    return {
      username, mail, password
    }
  },
  methods: {
    submit: function(username, mail, password) {
      this.$emit("signUpSubmit", {username, mail, password})
    }
  }
}
</script>

<style scoped>
.box {
  position: absolute;
  top: 28%;
  text-align: center;
  width: 100%;
  justify-content: center!important;
  display: flex!important;
  z-index: 5;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  width: 18rem;
  font-family: 'Roboto', sans-serif;
  color: #2c3e50;
}
@media only screen and (max-width: 767px) {
  .card {
    width: 90%;
  }
}
.card-header {
  background-color: #F7F7F7;
  padding: 20px;
  font-weight: bold;
  font-size: 22px;
}
.card-body {
  background-color: #FFFFFF;
  padding: 20px;
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
</style>