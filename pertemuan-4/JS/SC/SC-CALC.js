function calcw () {
    let a = parseInt(prompt("input angka pertama"))
    let b = parseInt(prompt("input angka kedua"))
    let c = prompt("ketik simbol \n + (penjumlahan) \n - (pengurangan) \n x (perkalian) \n / (pembagian) \n % (modulus)")
 
    if (c == "+"){
        let hasil = a+b
    alert("Hasil jumlah ="+" "+  hasil) 
    let lanjut = prompt("lanjut tidak? y/n")
        if (lanjut == "y"){
            return calcw()
        }else if (lanjut == "n"){
           return alert("terimakasih")
        }

    }
    else if (c == '-'){
        let hasil = a-b
        alert("Hasil jumlah ="+" "+  hasil) 
        let lanjut = prompt("lanjut tidak? y/n")
            if (lanjut == "y"){
                return calcw()
            }else if (lanjut == "n"){
               return alert("terimakasih")
            }
    
    }
    else if (c == 'x'){
        let hasil = a*b
        alert("Hasil jumlah ="+" "+  hasil) 
        let lanjut = prompt("lanjut tidak? y/n")
            if (lanjut == "y"){
                return calcw()
            }else if (lanjut == "n"){
               return alert("terimakasih")
            }
    
    }
    else if (c == '/'){
        let hasil = a/b
        alert("Hasil jumlah ="+" "+  hasil) 
        let lanjut = prompt("lanjut tidak? y/n")
            if (lanjut == "y"){
                return calcw()
            }else if (lanjut == "n"){
               return alert("terimakasih")
            }
    
    }
    else if (c == '%'){
        let hasil = a%b
        alert("Hasil jumlah ="+" "+  hasil) 
        let lanjut = prompt("lanjut tidak? y/n")
            if (lanjut == "y"){
                return calcw()
            }else if (lanjut == "n"){
               return alert("terimakasih")
            }
    
    }
}
calcw()