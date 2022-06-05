const csvtojson = require('csvtojson');
const fs= require('fs');

const csvfilepath="Localizacion.csv";

csvtojson()
.fromFile(csvfilepath)
.then((json)=>{
    fs.writeFileSync("Output.json",JSON.stringify(json),"utf-8",(err)=>{
        if(err)console.log(err)
    })
})