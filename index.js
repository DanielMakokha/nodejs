// console.log('Hello Daniel Makokha');
// console.log('Dtech');
// understanding modules

// const {add,sub} = require('./add')
// console.log(add(3,4));
// console.log(sub(10,4));
// console.log(__dirname);
// console.log(__filename);

// const add= require('./calculator/add');
// const div= require('./calculator/div');
// const mul= require('./calculator/mul');
// const sub= require('./calculator/sub');

// // console.log(add(3,6));
// const a=parseInt(process.argv[2]);
// const choice=(process.argv[3]);
// const b=parseInt(process.argv[4]);

// // console.log(a,choice,b);

// if (choice === 'ADD') {
//     console.log(add
//         (a,b));
// }else if (choice === 'SUB') {
//     console.log(sub(a,b));
// }else if (choice === 'MUL') {
//     console.log(mul(a,b));
// }else if (choice === 'DIV') {
//     console.log(div(a,b));
// }else{
//     console.log('Invalid choice');
// }


// FILE SYSTEM MODULE
const fs =require('fs');

//create a file
// fs.writeFile('./app.txt','Hi easy learning',(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('File just created');
//     }
// });

// Read file
// fs.readFile('./app.txt','utf-8',(err,data)=>{
//     if(err)console.log(err);
//     else console.log(data);
// })

//Rename a file
// fs.rename('./app.txt','./helper.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     }else{
//         console.log('file sysytem succesfully renamed');
// //     }
// })

// Delete a file

fs.unlink('./helper.txt',(err)=>{
   if (err) {
    console.log(err);
   }else{
    console.log('File deleted');
   }
})