
/*
//import myName function from index file
const myName = require('./index');

myName();
*/

/*
//import all functions form index file
const indexFileFunctions = require('./index');
*/

/*
//calling all functions form index file
indexFileFunctions.firstFunction();
indexFileFunctions.secondFunction();
indexFileFunctions.myAge();

console.log('file name is '+ __filename);
console.log('directory name is '+ __dirname);
*/


const myFile = require('fs');

/*
myFile.writeFile(
    'myFile.txt',
    'my name is ahmed ,im live in cairo,im a software engineer',
    ()=>{
        console.log('my file created successfully');
    }
);
*/

// 'utf-8' to make program read our data .. without 'utf-8' we can't read data .. 
myFile.readFile(
    'myFile.txt','utf-8',
    (error,data)=>{
        if(error){
            console.log('error occured .. try to handel it')
        }else{
            console.log(data);
        }
    }
);



