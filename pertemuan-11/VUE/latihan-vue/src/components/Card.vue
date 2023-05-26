<template>
    <div class="bg">
        <h1 class="h">Kartu ID</h1>
        <img alt="logo" src="../assets/foto.jpg">
        <ul class="p">
        <li>Nama : Risa </li><br>
        <li>Hobi : Ikut bootcamp genbox yg bermartabat </li><br>
        <li>Alamat : jl.kebagusan 2 no.32</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"CardName"

}
</script>
<style>
.bg{
    margin: auto;
    width: 250px;
    height: 300px;
    background-color: gray;
    border-radius: 15px;
}
.p{
    color: aliceblue;
    text-align: left;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    list-style: none;

}
img{
    width: 60px;
}
</style>