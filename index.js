// console.log('Hello Daniel Makokha');
// console.log('Dtech');
// understanding modules

// const {add,sub} = require('./add')
// console.log(add(3,4));
// console.log(sub(10,4));
// console.log(__dirname);
// console.log(__filename);

const add= require('./calculator/add');
const div= require('./calculator/div');
const mul= require('./calculator/mul');
const sub= require('./calculator/sub');

// console.log(add(3,6));
const a=parseInt(process.argv[2]);
const choice=(process.argv[3]);
const b=parseInt(process.argv[4]);

// console.log(a,choice,b);

if (choice === 'ADD') {
    console.log(add
        (a,b));
}else if (choice === 'SUB') {
    console.log(sub(a,b));
}else if (choice === 'MUL') {
    console.log(mul(a,b));
}else if (choice === 'DIV') {
    console.log(div(a,b));
}else{
    console.log('Invalid choice');
}


