<template>
  <div class="column">
    <div class="card" v-if="widget">
      <component 
          :is="widget"
          :user="user"
      />
    </div>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['widget', 'user']
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.column {
  float: left;
  padding: 10px;
  width: 33%;
}

@media screen and (max-width: 1100px) {
  .column {
    width: 50%;
  }
}

@media screen and (max-width: 767px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 7px;
  text-align: center;
  background-color: #F1F1F1;
  overflow: hidden;
}
</style>