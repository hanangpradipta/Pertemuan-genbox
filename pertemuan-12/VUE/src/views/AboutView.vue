<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{ name }}</span>
<br>
    <button @click="ganti">Lihat nama Belakang</button>
  </div>
</template>

<script>
export default{
  name: 'AboutView',
  data(){
    return{
  name: 'Nama depan:  Hanang',
    }
  },
  methods:{
    ganti(){
      this.name='Nama belakang:  Pradipta'
    }
  
  
  }
}
</script>