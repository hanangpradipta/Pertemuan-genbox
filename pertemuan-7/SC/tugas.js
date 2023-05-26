let tombol = document.querySelector(".button")
let menu = document.querySelector(".button2")
let pilih = document.querySelector(".pilih2")

tombol.addEventListener('mouseenter', function(){
    menu.classList.toggle('button2')
    menu.classList.toggle('button3')})
tombol.addEventListener('mouseleave', function(){
    menu.classList.toggle('button2')
    menu.classList.toggle('button3')})
let form = document.querySelector('form')
let data = document.querySelector('.inp')

data.addEventListener ('input', () => {
    document.querySelector('small').innerHTML =data.value
})

form.addEventListener('submit', (coba)=> {
    coba.preventDefault()
//     document.querySelector('b').innerHTML = data.value
})
let todo =document.querySelector('#todo')
function add(){
let txt = document.querySelector('#inpu')
// let pre = document.getElementById('view')
// console.log(txt.value)

// let cekk =document.getElementById('cek')
let todoo = "<li class = 'listt'> <span>" + txt.value + "</span>" +
"<span onclick='removeItem(this)'>" + "<input type='checkbox' id='cek' class='cek1'>"  + "</span>" +
"</li>"
todo.insertAdjacentHTML('beforeend',todoo)
txt.value=""
// pre.value=""
}
function removeItem(a){
a.parentElement.remove()}
// let hapus = document.querySelector('cek')
// let list = document.querySelector('li')
// hapus.addEventListener('click', function(){
// list.classList.remove('li')
// })
