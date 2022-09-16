<template>
  <nav class="sidebar">
    <ul>
      <li>
        <a href="#">
          <span class="icon"><i class="fas fa-home"></i></span>
          <span class="title">Home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fas fa-comments"></i></span>
          <span class="title">Messages</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fas fa-users"></i></span>
          <span class="title">Groups</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span class="icon"><i class="fas fa-cogs"></i></span>
          <span class="title">Settings</span>
        </a>
      </li>
    </ul>
  </nav>
  <div class="toggle" v-on:click="toggleMenu()"></div>
</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>
/* ******************************* *
 *             SIDEBAR             *
 * ******************************* */
.sidebar {
  left: 0;
  top: 0;
  z-index: 100;
  position: fixed;
  width: 60px;
  height: 100%;
  background: #4D5359;
  transition: 0.5s;
  overflow: hidden;
}
.sidebar:hover, .sidebar.active {
  width: 300px;
}

.sidebar ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 60px;
  padding-left: 0;
}

.sidebar ul li {
  position: relative;
  width: 100%;
  list-style: none;
}
.sidebar ul li:hover {
  background: #65666A;
}

.sidebar ul li a {
  position: relative;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: white;
  font: bold 22px sans-serif;
}

.sidebar ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.sidebar ul li a .icon .fas {
  font-size: 24px;
}

.sidebar ul li a .title {
  position: relative;
  display: block;
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}

.toggle {
  z-index: 101;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  background: #4D5359;
  cursor: pointer;
}
.toggle.active {
  background: #65666A;
}
.toggle:before {
  content: '\f0c9';
  font-family: fontAwesome;
  position: absolute;
  width: 100%;
  height: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 24px;
  color: white;
}
.toggle.active:before {
  content: '\f00d';
}

@media only screen and (max-width: 767px) {
  .sidebar {
    left: -60px;
  }

  .sidebar.active {
    left: 0;
    width: 100%;
  }

  .toggle {
    display: block;
    position: fixed;
  }
}
</style>