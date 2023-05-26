<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div>
</div>
 
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld, 
    
  },
  data(){
    return{
    cuaca : ''
  }
},
mounted() {
  fetch('https://api.weatherbit.io/v2.0/current?key=dbf7284b79e941d0a04e7c4f788d7afd&include=minutely&city=jakarta')
  .then(res => res.json())
  .then(res => this.cuaca = res.data[0].weather.description)
}
}
</script>

<style>
</style>
