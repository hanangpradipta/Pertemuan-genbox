//DOM
// Document Obect Model

//Hirarki
//root
// PArent > child > sibling

// let judul = document.queryselecor('h1')

//let judul = document.querySelectorAll('h1')

//console.log(judul);
//judul[0].style.fontSize = "90px"
//judul[1].style.color = "red"

// manipulasi Class
//let judul = document.querySelector('h1')

//add
//judul.classList.add("tes")

//remove
//judul.classList.remove("tes")

//toggle
//judul.classList.toggle("tes")

//contains
//console.log(judul.classList.contains("tes"));

//event
//event handler
//let tes = () =>{
//    let a = parseint(prompt("nilai 1 :"))
//    let b = parseint(prompt("nilai 2 :"))
//    alert(a + "+"+ b+"="+(a+b))
//}

//addEventListener
// let tombol = document.querySelector(".btn")
// let judul = document.querySelector("h1")

 //tombol.addEventListener('click', function(){
//judul.classList.toggle("tes")})

//on
//let tombol = document.querySelector(".btn")

//let tes = () =>{
//    let a = parseint(prompt("nilai 1 :"))
//    let b = parseint(prompt("nilai 2 :"))
//    alert(a + "+"+ b+"="+(a+b))

 //   tombol.onclick = tes


//let judul = document.querySelector('h1')
//let judul = document.querySelector('.namaClass')
//let judul = document.querySelector('#namaID')
//let judul = document.querySelectorAll('h1')
//let judul = document.querySelectorAll('.namaClass')
//let judul = document.querySelectorAll('#namaID')

//innerHTML
//let content = document.querySelector('#root')
//content.innerHTML = '<h1>Halooooo</h1>'
//content.innerText ='tes'

//let makan = document.querySelectorAll('li')
//for (let a = 0; a <= makan.length; a++){
//console.log(makan);
//makan[a].style.fontSize="90px"
//}

let tombol = document.querySelector(".btn")
let back = document.querySelector(".tes")
let judul = document.querySelector(".tes2")
tombol.addEventListener('click', function(){
    back.classList.toggle('tes')
    back.classList.toggle('tes2')
})
