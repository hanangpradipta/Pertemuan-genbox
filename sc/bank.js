let saldo = 0
let cek = true
while(cek){
alert ("selamat Datang")
let menu = prompt("pilih menu \n 1. Cek saldo \n 2. Tarik tunai \n 3. Setor tunai")
if (menu == 1){
    alert("jumlah saldo : " + " "+ saldo)
    cek = confirm("lanjut gak?")
}else if (menu == 2){
    let tarik = parseInt(prompt("input jumlah tarik tunai"))
    if (tarik > saldo){
    alert("saldo kurang")
    cek = confirm("lanjut gak?")}
    else {
        saldo -= tarik
        alert("Sisa saldo anda :"+ " "+ saldo)
        cek = confirm("lanjut gak?")}
    }
else if (menu == 3){
    let setor = parseInt(prompt("input jumlah setor tunai"))
    saldo += setor
    alert("jumlah saldo anda saat ini :" + " "+saldo)
    cek = confirm("lanjut gak?")
}
else{
    alert("tidak ada dalam menu")
    cek = confirm("lanjut gak?")
}

    }
    alert("TERIMAKASIH")
