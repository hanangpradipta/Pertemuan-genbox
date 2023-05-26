<template>
<div class="divutama">
    <div class="divkiri">
        <p class="pkiri">{{ yk }}</p>
        <img class="imgkiri" :src="icon2" alt="">
        <h1 class="hkiri">{{ yktem }}&deg;C</h1>
    </div>
    <div class="divkanan">
        <p class="pkanan">{{ btn }}</p>
        <img class="imgkanan" :src="icon3" alt="">
        <h1 class="hkanan">{{ btntem }}&deg;C</h1>
    </div>
</div>
  </template>
  
  <script>
  export default {
    name: 'KotakDua',
    data(){
    return{
    yk : '',
    btn : '',
   yktem : '',
    btntem : '',
    icon2 :'',
    icon3 :''
  }
},
mounted() {
  let fetch1 = fetch('https://api.weatherbit.io/v2.0/current?key=dbf7284b79e941d0a04e7c4f788d7afd&include=minutely&city=yogyakarta&lang=id').
  then(res => res.json())
  let fetch2 = fetch('https://api.weatherbit.io/v2.0/current?key=dbf7284b79e941d0a04e7c4f788d7afd&include=minutely&city=surabaya&lang=id').
  then(res => res.json()) 
  Promise.all([fetch1, fetch2])
  .then(([yogyakarta, banten])=> {
    this.yk = yogyakarta.data[0].city_name
    this.btn = banten.data[0].city_name
    this.yktem = yogyakarta.data[0].app_temp
    this.btntem = banten.data[0].app_temp
    this.icon2 = this.source(yogyakarta.data[0].weather.icon)
    this.icon3 = this.source(banten.data[0].weather.icon)
  })
},
methods : {
  source(test2){
    return `https://cdn.weatherbit.io/static/img/icons/${test2}.png`
  }

}}
  </script>
  <style>
  .divkiri{
    position: absolute;
    background-color: white;
    /* border:solid; */
    width: 290px;
    height: 370px;
    border-radius: 20px;
  }
  .pkiri{
    position: relative;
    font-size: 50px;
    text-align: center;
    color: gray;
   bottom: 10px;

  }
  .imgkiri{
    position: relative;
    width: 170px;
    bottom: 65px;
  left: 50px;

  }
  .hkiri{
    font-size: 60px;
    bottom: 110px;
    text-align: center;
    position: relative;
    opacity: 80%;
  }
  .divkanan{
    position: relative;
    background-color: white;
    /* border:solid; */
    width: 290px;
    height: 370px;
    border-radius: 20px;
    left: 350px;
  }
  .pkanan{
    position: relative;
    font-size: 50px;
    text-align: center;
    color: gray;
   top: 40px;

  }
  .imgkanan{
    position: relative;
    width: 170px;
    bottom: 20px;
  left: 50px;

  }
.hkanan{
  font-size: 60px;
    bottom: 60px;
    text-align: center;
    position: relative;
    opacity: 80%;
}
  .divutama{
    position: relative;
    left: 700px;
    top: 50px;
  }
</style>