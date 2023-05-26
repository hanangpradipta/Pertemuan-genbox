// runtime JS
// x framework
// x library

// JS:
// chrome/browser
// runtime v8 engine
// dibungkus dan dipindah ke OS kita

// js itu otaknya browser

// node JS

// clouser
// sebuah function yang mengakses lexical
// scope variabel

// let data=((nm) =>{
//     let nama = nm
//     return function greet(inpt){
//         return "haiiii "+" " + nama +" "+"nama saya" +" "+ inpt  
 
//     }
// })('dunia')
// console.log(data('hanang'));
// let tes = data("dunia")
// console.log(tes("hanang"));

// callback
// parameter yg menerima function

let tes =(nama) => {
    console.log("halo saya "+nama);
}

let cetak =(isi, coba) => {
    // tes('Hanang)
    coba(isi)
}
cetak ('hanang', tes)