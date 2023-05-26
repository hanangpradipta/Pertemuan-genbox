// function
// untuk menyimpan program

// DRY

// Deklarasi
// didalem parameter bisa diisi argumen
// argumen adalah variabel milik function

// function tes(nama, hobi){
//     console.log("halo semua");
//     console.log("Nama saya" + nama);
//     console.log("Hobi saya" + hobi);
// }

// tes(hanang, bola)

//function calc(satu, dua){
//    return satu + dua
//}
//console.log(calc(2,5));

// Ekspresi
//let tes = function(){
//    return "hallo dunia"}

//console.log(tes())
// Arrow
//let tes = (nama) => {
//    return "hallo" + nama}

//let tes = (nama) => "hallo" + nama
//let tes = (nama === "risa")? "hallo":(nama === "hasanah")?"hai" : (alert("masukkan nama!"), "ini siapa?")
//console.log(tes("hasanah"))

// Rekursif
let tes = (b) => {
   if (b <= 10){
console.log( b + ". hallo dunia")
     return tes(b + 1)}
     else{
        return("HALLO dunia")}
}
tes(1)