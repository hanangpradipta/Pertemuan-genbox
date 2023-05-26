<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to My Website"/>
  <CardName/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CardName from './components/Card.vue'

export default {
  name: 'App',
  components: {
    CardName,  
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
