const fs = require('fs')
const csv = require('csv-parser')
const results=[]

fs.createReadStream('test.csv')
.pipe(csv({}))
.on('data',(data)=>results.push(data))
.on('end',()=>{
    console.log(results)
})



//   (async()=>{
// const test = await csv().fromFile("test.csv");
// console.log(test);
//   })();