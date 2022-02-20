const path=require('path');

console.log(path.sep);

const filePath = path.join('./content/','text.txt');
console.log(filePath);

const base=path.basename(filePath);
console.log(base);

const absolutePath = path.resolve(filePath);
console.log(absolutePath);