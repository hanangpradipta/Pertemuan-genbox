let todo =[]
let index = (todo.length <1)?0:todo.length

let hasil = document.querySelector('#todo')
let list = document.querySelector('ol')
let preview = document.querySelector('i')
let form= document.querySelector('form')
let tombol = document.querySelector(".button1")
let menu = document.querySelector(".button2")



tombol.addEventListener('mouseenter', function(){
    menu.classList.toggle('button2')
    menu.classList.toggle('button3')})
tombol.addEventListener('mouseleave', function(){
    menu.classList.toggle('button2')
    menu.classList.toggle('button3')})

let coba = (e)=>{
    e.preventDefault()
    todo.push('<li id="hsl" class="list-'+index+'">' + hasil.value + ' - <button class="bb1" onclick="apus('+index+')">X</button> <button class="bb2" onclick="edit('+index+')">EDIT</button></li>')
    hasil.value=""
    list.innerHTML = todo.join('')
    index=(todo.length <1)?0:todo.length
}
let apus =(e) =>{
    todo.splice(e, 1)
    list.innerHTML = todo.join('')
    index=(todo.length <1)?0:todo.length
    
}
let edit =(e)=>{

   let edt= prompt('insert edit')
    todo[e] = '<li id="hsl" class="list-'+e+'">' + edt + ' - <button class="bb1" onclick="apus('+e+')">X</button> <button class="bb2" onclick="edit('+e+')">EDIT</button></li>'
    list.innerHTML = todo.join('')
    index=(todo.length <1)?0:todo.length
    
    //  list-.addEventListener("submit", () =>{
    //     hasil.innerHTML=todo
        // document.querySelector(".list-" + e).insertAdjacentElement(hasil)
        // hasil.innerHTML=todo[e]

    // list.push('<li class="list-'+index+'">' + hasil.value + ' - <button onclick="apus('+index+')">X</button> <button onclick="edit('+index+')">edit</button></li>')
//    console.log('.list-' +e);
// hasil.insertAdjacentElement li
    // document.querySelector("list-"+e )
    // li.innerHTML=todo


}
form.addEventListener("submit", coba)

hasil.addEventListener("input", () => {
    preview.innerHTML=hasil.value
})