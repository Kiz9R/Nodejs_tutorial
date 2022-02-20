const {readFile,writeFile}=require('fs');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first=result;
    readFile('./content/result.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
    }
    const second=result;
    writeFile('./content/resultAsync.txt',`Here is the Async Result ${first},${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    });
    })
});
