const _=require("lodash");

const items=[1,[2,[3,[4],5]]];

console.log(items);

const newItems =_.flattenDeep(items);

console.log(newItems);

var a=10,b=5;

function multiple(n,m){
    return n*m;
}

function display(){
    console.log(multiple(a,b));
}

foo(a);
console.log(`new line`);
display();

function foo(r){
    a-=1;
    if(a!==0){
        console.log(r);
        return foo(a);
    }
    else{
        console.log(`end`);
    }
}