<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br><hr>
    <i>dibuat oleh {{ nama }} pada tahun {{ tahun }}</i>
    <div>{{ {print} }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return {
      nama:'Hanang',
      tahun:2023,
      print: <br><i>haloo</i>
    }
  }
}
</script>
