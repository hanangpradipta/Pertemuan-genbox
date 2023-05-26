
let Data = function(nama, HP, XP, Lv){
    this.nama=nama
    this.HP= 100
    this.XP= 0
    this.Lv= 1
    this.greet = function(){
    return this.nama;
    }
}

Data.prototype.diserang=function(){
    this.HP -= 23
    if (this.HP <= 0){
    return "MATI!!!";
}
else {
    return this.HP ;
}

    }


Data.prototype.serang=function(){
    this.XP += 13
    if (this.XP >= 100){
        this.Lv += 1
        this.XP -= 100


    return "level up" +" "+ this.Lv
}

    }

let play = new Data("Hanang")
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();
play.serang();

console.log(play.serang());
console.log(play);