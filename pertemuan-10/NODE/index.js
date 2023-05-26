// module

/*
1. local module
2. core module
3. third-party module / npm
*/

// local module
// import

//destruct
// let { pi, luas } = require('./circle');
// console.log(pi);
// console.log(luas(24));

// let circle=require('./circle')
// console.log(circle);
// console.log(circle.pi);
// console.log(circle.luas(24));
const fs = require('fs');
const {log} = require('console');

fs.writeFile('tes.json', "tes", (err)=>{
    if (err) console.log(err)
    console.log("sukses");
})