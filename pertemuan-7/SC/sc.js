let tombol = document.querySelector(".link")
let menu = document.querySelector(".pilih1")
let pilih = document.querySelector(".pilih2")

tombol.addEventListener('mouseenter', function(){
    menu.classList.toggle('pilih1')
    menu.classList.toggle('pilih3')})

//menu.addEventListener('mouseenter', function(){
//    menu.classList.toggle('pilih1')
 //   menu.classList.toggle('pilih3')})

  tombol.addEventListener('mouseleave', function(){
   menu.classList.toggle('pilih1')
   menu.classList.toggle('pilih3')
  

})
