// objectt
// variabel yang bisa menampung banyak variabel


// object literal
//let data = {
//    nama : "Hanang",
//    hobi : "Main",
//    alamat :{
 //       jalan : "jl. jalan",
//        RT : 1,
 //       RW : 6
//    },
 //   makanan :[ "bakso", "mie", "pempek"],
//    greet : function(){
//        console.log("hallo" + this.nama);
//    }
//}

//data.minuman = ["teh", "kopi", "jus"]
//data.nama = 'Hanang Pr'

//console.log(data);
// console.log(data.nama);
// console.log(data['nama']);

//console.log(data.alamat.jalan);
//console.log(data.greet());
//console.log(data.makanan[0]);

// console.log(this);
// console.log(window)

//let data = function (nama, hobi){
//    let obj = {}
//    obj.nama=nama
//    obj.hobi=hobi
//    return obj
//
//}
//let hanang = data("Hanang", "nonton")
//console.log(hanang.nama);

let Data = function(nama, hobi){
    this.nama = nama
    this.hobi = hobi
    this.greet = function(){
        return "halo saya"+ this.nama;
    }
}

Data.prototype.greet= function(){
    return"hallo saya" + this.nama;
}

// fungsi didalam object = method
// variabel didalam object = property

let pemain1 = new Data("Hanang pr", "main")
console.log(pemain1.greet());


