<template>
    <div class="Contact">
      <h1>Hanang</h1>
      <hr>
      <h3>Hanang Pradipta</h3>
      <hr>
      <div class="konten" v-for="data in kontak">
        <ul>

            <li>{{ data.nama }}</li>
            <li>{{ data.email }}</li>
            <div v-if="data.phone === ''">
            <li><i>tidak punya hp</i></li>
        </div>
        <div v-else>

            <li>{{ data.phone }}</li>
        </div>
        </ul>
    </div>
    </div>
  </template>

  <script>
export default{
    name:"ContactView",
    data(){
        return{
            kontak : [
                {
                    nama: "Hanang",
                    email: "abcd@gmail.com",
                    phone: "08912637289"
                },
                {
                    nama: "Pradipta",
                    email: "Pradipta@gmail.com",
                    phone: ""
                },
                {
                    nama: "Kris",
                    email: "Kris@gmail.com",
                    phone: "089126253628"
                }
            ]
        }
    }
}
</script>
<style>
ul{
    list-style: none;
}
</style>
  