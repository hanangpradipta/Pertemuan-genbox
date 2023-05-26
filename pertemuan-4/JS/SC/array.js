// array = sebuah variabel yang bisa menampung lebih dari satu value

// simbol array []

// let data = ["Hanang", "nonton", 13.4, true, 'b']

// console.log.apply(data[0]);
// console.log.apply(data[1]);
// console.log.apply(data[2]);
// console.log.apply(data[3]);
// console.log.apply(data[4]);

// data[0] = "pradipta" //ganti data

// console.log(data[0]);

// let data = ["Hanang", "bola", 13.4, true, "apa"]
// console.log(let i = 0; i< data.length; i++){
//     console.log(data[i]);
// }
//let tes =['a', 's', 'f', [1, 2, ['z', 'x']],'d']
//console.log(tes[3][2][1]);

let tes = ['bakso', 'telor', 'ayam', ['jus', 'es', 'kopi'], 'bayem']

for(let i = 0; i <tes.length; i++){
     if (i === 3 ){
       for(let c = 0; c < tes[3].length; c++)
   console.log(tes[3][c])}
  else{
    console.log(tes[i])}
  }

