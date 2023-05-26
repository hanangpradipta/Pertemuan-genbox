<template>
  <div class="bg">
    <div class="atur">
    <h1 class="jkt">{{ kota }}</h1>
    <img class="awan" :src="icon" alt="">
    <div class="klasawan">
    <div class="bgawan">
    </div>
    <p class="berawan">{{cuaca}} <br> {{ temp }}&deg;C</p>
  </div>
    <div class="garis1"></div>
    <p class="keep">Keep save</p>
    <div class="kanan">
      <p class="hari">{{ date }}</p>
      <div class="garis2"></div>
      <div class="waktu">
        <div class="jam">
          <h1 class="tulisjam">12</h1>
        </div>
        <h1 class="titikdua">:</h1>
        <div class="menit">
          <h1 class="tulismenit">00</h1>
        </div>
      </div>
    </div>
    <KotakDua/>
  </div>
  </div>
</template>

<script>
import KotakDua from './KotakDua.vue'
export default {
  name: 'HelloWorld',
  components: {
    KotakDua

  },
data(){
    return{
    cuaca : '',
    kota : '',
    icon : '',
    date : ''
  }
},
mounted() {
  fetch('https://api.weatherbit.io/v2.0/current?key=dbf7284b79e941d0a04e7c4f788d7afd&include=minutely&city=jakarta&lang=id')
  .then(res => res.json())
  .then(res => {
    this.cuaca = res.data[0].weather.description
      this.kota = res.data[0].city_name
      this.icon = this.source(res.data[0].weather.icon)
      this.temp = res.data[0].app_temp
      this.date = res.data[0].datetime
      console.log(res)

  })
},
methods : {
  source(test){
    return `https://cdn.weatherbit.io/static/img/icons/${test}.png`
  }
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  margin: 0;
}
.bg{
  position: relative;
  background: linear-gradient(130.54deg, #27A5F9 26.95%, rgba(39, 165, 249, 0) 123.41%);
  width: 100%;
  height: 800px;
  /* bottom: 60px; */
  overflow: hidden;
}
.jkt{
  position: relative;
  color: white;
  font-size: 95px;
  left: 60px;
  top: 250px;
  z-index: 999;
  
}
.klasawan{
display: flex;
position: relative;
top: 220px;
}
.bgawan{
  position: relative;
  background-color: rgb(212, 211, 211);
  opacity: 30%;
  height: 64px;
  width: 450px;
  left: 80px;
  top: 20px;
  border-radius: 10px;
}
.awan{
  position: absolute;
  left: 90px;
  top: 335px;
  width: 100px;
z-index: 999;
}
.berawan{
  color: white;
  font-size: 50px;
  position: absolute;
  left: 150px;
  top: 20px;
  z-index: 999;

}
.garis1{
  height: 5px;
  width: 600px;
  position: absolute;
  background-color: white;
  top: 470px;
  left: 110px;
}
.keep{
  position: absolute;
  color: white;
  font-size: 70px;
  top: 480px;
  left: 130px;
  font-family: calibri;
}
.hari{
  color: white;
  font-size: 45px;
  position: absolute;
  left: 750px;
  bottom: 540px;
}
.garis2{
  height: 5px;
  width: 320px;
  position: absolute;
  background-color: white; 
  left: 1070px;
  bottom: 552px;
}
.jam{
  border: solid;
  border-color: white;
  width: 80px;
  height: 100px;
  border-radius: 10px;
}
.tulisjam{
  font-size: 45px;
  text-align: center;
  margin-top: 25px;
  color: white;
}
.menit{
  border: solid;
  border-color: white;
  width: 80px;
  height: 100px;
  border-radius: 10px;
  position: absolute;
  bottom: 1px;
  left: 120px;
}
.tulismenit{
  font-size: 45px;
  text-align: center;
  margin-top: 25px;
  color: white;
}
.titikdua{
  font-size: 45px;
  color: white;
  position: absolute;
  bottom: 33px;
  left: 95px;
}
.waktu{
  position: absolute;
  top: 690px;
  left: 1145px;
}
.atur{
  margin-left: 50px;

}

</style>
