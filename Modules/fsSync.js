const {readFileSync,writeFileSync}=require('fs');

const first=readFileSync('./content/first.txt','utf8');
console.log(first);

const result=writeFileSync('./content/result.txt',`Here is the result : ${first}`,{flag:'a'});

